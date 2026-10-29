import AppKit
import ServiceManagement

// MARK: - Température de couleur -> multiplicateurs RVB (algorithme de Tanner Helland)

func rgb(forKelvin kelvin: Double) -> (r: Double, g: Double, b: Double) {
    let t = kelvin / 100
    var r: Double, g: Double, b: Double
    if t <= 66 {
        r = 255
        g = 99.4708025861 * log(t) - 161.1195681661
        b = t <= 19 ? 0 : 138.5177312231 * log(t - 10) - 305.0447927307
    } else {
        r = 329.698727446 * pow(t - 60, -0.1332047592)
        g = 288.1221695283 * pow(t - 60, -0.0755148492)
        b = 255
    }
    func clamp(_ v: Double) -> Double { min(max(v, 0), 255) / 255 }
    return (clamp(r), clamp(g), clamp(b))
}

// MARK: - Réglages

enum Mode: String { case gamma, overlay }

final class Settings {
    private let d = UserDefaults.standard
    init() {
        d.register(defaults: ["enabled": true, "kelvin": 3400.0, "intensity": 0.8, "mode": Mode.gamma.rawValue])
    }
    var enabled: Bool { get { d.bool(forKey: "enabled") } set { d.set(newValue, forKey: "enabled") } }
    var kelvin: Double { get { d.double(forKey: "kelvin") } set { d.set(newValue, forKey: "kelvin") } }
    /// 0.1 (léger) à 1 (plein effet), valable pour les deux méthodes.
    var intensity: Double { get { d.double(forKey: "intensity") } set { d.set(newValue, forKey: "intensity") } }
    var mode: Mode {
        get { Mode(rawValue: d.string(forKey: "mode") ?? "") ?? .gamma }
        set { d.set(newValue.rawValue, forKey: "mode") }
    }
}

// MARK: - Filtre

final class Filter {
    private var overlays: [NSWindow] = []

    func apply(_ s: Settings) {
        guard s.enabled else { clear(); return }
        switch s.mode {
        case .gamma:
            removeOverlays()
            applyGamma(kelvin: s.kelvin, intensity: s.intensity)
        case .overlay:
            CGDisplayRestoreColorSyncSettings()
            applyOverlay(kelvin: s.kelvin, intensity: s.intensity)
        }
    }

    func clear() {
        removeOverlays()
        CGDisplayRestoreColorSyncSettings()
    }

    // Modifie la table gamma de chaque écran, comme f.lux : le bleu (et un peu le vert) est atténué.
    private func applyGamma(kelvin: Double, intensity: Double) {
        let c = rgb(forKelvin: kelvin)
        func mix(_ v: Double) -> Float { Float(1 - intensity * (1 - v)) }
        var count: UInt32 = 0
        CGGetOnlineDisplayList(0, nil, &count)
        var ids = [CGDirectDisplayID](repeating: 0, count: Int(count))
        CGGetOnlineDisplayList(count, &ids, &count)
        for id in ids {
            CGSetDisplayTransferByFormula(id,
                0, mix(c.r), 1,
                0, mix(c.g), 1,
                0, mix(c.b), 1)
        }
    }

    // Fenêtre transparente, au-dessus de tout et traversée par les clics, sur chaque écran.
    private func applyOverlay(kelvin: Double, intensity: Double) {
        let c = rgb(forKelvin: kelvin)
        // Plus la température est basse, plus la teinte est orangée.
        let color = NSColor(srgbRed: 1, green: 0.55 + 0.45 * c.g, blue: 0.1 * c.b, alpha: 0.6 * intensity)
        if overlays.count != NSScreen.screens.count { removeOverlays() }
        if overlays.isEmpty {
            overlays = NSScreen.screens.map { screen in
                let w = NSWindow(contentRect: screen.frame, styleMask: .borderless, backing: .buffered, defer: false)
                w.isOpaque = false
                w.hasShadow = false
                w.ignoresMouseEvents = true
                w.level = NSWindow.Level(rawValue: Int(CGShieldingWindowLevel()))
                w.collectionBehavior = [.canJoinAllSpaces, .stationary, .fullScreenAuxiliary, .ignoresCycle]
                w.isReleasedWhenClosed = false
                w.setFrame(screen.frame, display: true)
                w.orderFrontRegardless()
                return w
            }
        }
        overlays.forEach { $0.backgroundColor = color }
    }

    private func removeOverlays() {
        overlays.forEach { $0.orderOut(nil) }
        overlays.removeAll()
    }
}

// MARK: - Panneau de réglages (affiché sous l'icône de la barre de menus)

final class PanelController: NSViewController {
    let settings: Settings
    let onChange: () -> Void

    let presets: [(String, Double)] = [
        ("Bougie", 1900), ("Incandescent", 2700), ("Halogène", 3400), ("Fluorescent", 4200), ("Jour", 5500),
    ]

    private var toggle: NSSwitch!
    private var kelvinValue: NSTextField!
    private var kelvinSlider: NSSlider!
    private var intensityValue: NSTextField!
    private var intensitySlider: NSSlider!
    private var presetButtons: NSSegmentedControl!
    private var modeControl: NSSegmentedControl!
    private var login: NSButton!

    init(settings: Settings, onChange: @escaping () -> Void) {
        self.settings = settings
        self.onChange = onChange
        super.init(nibName: nil, bundle: nil)
    }
    required init?(coder: NSCoder) { fatalError() }

    override func loadView() {
        let width: CGFloat = 300

        // En-tête : logo, nom, interrupteur
        let logo = NSImageView(image: NSApp.applicationIconImage)
        logo.widthAnchor.constraint(equalToConstant: 36).isActive = true
        logo.heightAnchor.constraint(equalToConstant: 36).isActive = true
        let title = NSTextField(labelWithString: "Filtre Jaune")
        title.font = .systemFont(ofSize: 15, weight: .semibold)
        toggle = NSSwitch()
        toggle.target = self
        toggle.action = #selector(toggleChanged)
        let spacer = NSView()
        spacer.setContentHuggingPriority(.defaultLow, for: .horizontal)
        let header = NSStackView(views: [logo, title, spacer, toggle])
        header.spacing = 10

        // Température
        kelvinValue = valueLabel()
        kelvinSlider = slider(min: 1900, max: 6500, action: #selector(kelvinChanged))
        presetButtons = NSSegmentedControl(labels: presets.map { $0.0 }, trackingMode: .momentary,
                                           target: self, action: #selector(presetPicked))
        presetButtons.controlSize = .small
        presetButtons.font = .systemFont(ofSize: 10)
        presetButtons.segmentDistribution = .fillEqually

        // Intensité
        intensityValue = valueLabel()
        intensitySlider = slider(min: 0.1, max: 1, action: #selector(intensityChanged))

        // Méthode
        modeControl = NSSegmentedControl(labels: ["Couleurs de l'écran", "Calque jaune"], trackingMode: .selectOne,
                                         target: self, action: #selector(modeChanged))
        modeControl.segmentDistribution = .fillEqually
        modeControl.controlSize = .small

        login = NSButton(checkboxWithTitle: "Ouvrir au démarrage du Mac", target: self, action: #selector(loginChanged))
        let quit = NSButton(title: "Quitter", target: NSApp, action: #selector(NSApplication.terminate(_:)))
        quit.bezelStyle = .rounded
        quit.controlSize = .small
        let version = NSTextField(labelWithString:
            "Version \(Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0")")
        version.font = .systemFont(ofSize: 10)
        version.textColor = .tertiaryLabelColor
        let spacer2 = NSView()
        spacer2.setContentHuggingPriority(.defaultLow, for: .horizontal)
        let footer = NSStackView(views: [version, spacer2, quit])

        let stack = NSStackView(views: [
            header, separator(),
            row("Température", kelvinValue), kelvinSlider, scale("Chaud", "Neutre"), presetButtons, separator(),
            row("Intensité", intensityValue), intensitySlider, scale("Léger", "Fort"), separator(),
            sectionLabel("Méthode"), modeControl, login, separator(), footer,
        ])
        stack.orientation = .vertical
        stack.alignment = .leading
        stack.spacing = 8
        stack.edgeInsets = NSEdgeInsets(top: 14, left: 16, bottom: 12, right: 16)
        stack.setCustomSpacing(2, after: kelvinSlider)
        stack.setCustomSpacing(2, after: intensitySlider)
        for v in stack.arrangedSubviews {
            v.widthAnchor.constraint(equalToConstant: width - 32).isActive = true
        }
        view = stack
        refresh()
    }

    func refresh() {
        guard isViewLoaded else { return }
        toggle.state = settings.enabled ? .on : .off
        kelvinSlider.doubleValue = settings.kelvin
        kelvinValue.stringValue = "\(Int(settings.kelvin)) K"
        intensitySlider.doubleValue = settings.intensity
        intensityValue.stringValue = "\(Int((settings.intensity * 100).rounded())) %"
        modeControl.selectedSegment = settings.mode == .gamma ? 0 : 1
        login.state = SMAppService.mainApp.status == .enabled ? .on : .off
    }

    // MARK: Actions

    @objc private func toggleChanged() { settings.enabled = toggle.state == .on; onChange() }
    @objc private func kelvinChanged() {
        settings.kelvin = (kelvinSlider.doubleValue / 100).rounded() * 100
        settings.enabled = true
        onChange()
    }
    @objc private func intensityChanged() {
        settings.intensity = (intensitySlider.doubleValue * 100).rounded() / 100
        settings.enabled = true
        onChange()
    }
    @objc private func presetPicked() {
        settings.kelvin = presets[presetButtons.selectedSegment].1
        settings.enabled = true
        onChange()
    }
    @objc private func modeChanged() {
        settings.mode = modeControl.selectedSegment == 0 ? .gamma : .overlay
        onChange()
    }
    @objc private func loginChanged() {
        do {
            if SMAppService.mainApp.status == .enabled { try SMAppService.mainApp.unregister() }
            else { try SMAppService.mainApp.register() }
        } catch {
            let a = NSAlert()
            a.messageText = "Impossible de modifier l'ouverture au démarrage"
            a.informativeText = error.localizedDescription
            a.runModal()
        }
        onChange()
    }

    // MARK: Éléments d'interface

    private func valueLabel() -> NSTextField {
        let l = NSTextField(labelWithString: "")
        l.font = .monospacedDigitSystemFont(ofSize: 12, weight: .regular)
        l.textColor = .secondaryLabelColor
        l.alignment = .right
        return l
    }
    private func sectionLabel(_ s: String) -> NSTextField {
        let l = NSTextField(labelWithString: s)
        l.font = .systemFont(ofSize: 12, weight: .semibold)
        return l
    }
    private func row(_ title: String, _ value: NSTextField) -> NSStackView {
        let s = NSStackView(views: [sectionLabel(title), value])
        s.distribution = .fill
        return s
    }
    private func slider(min: Double, max: Double, action: Selector) -> NSSlider {
        let s = NSSlider(value: min, minValue: min, maxValue: max, target: self, action: action)
        s.isContinuous = true
        return s
    }
    private func scale(_ left: String, _ right: String) -> NSStackView {
        let l = NSTextField(labelWithString: left)
        let r = NSTextField(labelWithString: right)
        for t in [l, r] { t.font = .systemFont(ofSize: 10); t.textColor = .tertiaryLabelColor }
        r.alignment = .right
        let s = NSStackView(views: [l, r])
        s.distribution = .fillEqually
        return s
    }
    private func separator() -> NSBox {
        let b = NSBox()
        b.boxType = .separator
        return b
    }
}

// MARK: - Application

final class AppDelegate: NSObject, NSApplicationDelegate {
    let settings = Settings()
    let filter = Filter()
    var statusItem: NSStatusItem!
    var panel: PanelController!
    let popover = NSPopover()
    var fallbackWindow: NSWindow?
    var timer: Timer?

    static let showNotification = Notification.Name("com.jordanthomas.filtrejaune.show")

    func applicationDidFinishLaunching(_ n: Notification) {
        // Une seule instance : si l'app tourne déjà, on lui demande d'afficher son panneau et on quitte.
        let me = NSRunningApplication.current
        let others = NSRunningApplication.runningApplications(withBundleIdentifier: Bundle.main.bundleIdentifier ?? "")
            .filter { $0.processIdentifier != me.processIdentifier }
        if !others.isEmpty {
            DistributedNotificationCenter.default().postNotificationName(Self.showNotification, object: nil,
                                                                         userInfo: nil, deliverImmediately: true)
            exit(0)
        }
        DistributedNotificationCenter.default().addObserver(self, selector: #selector(showPanel),
            name: Self.showNotification, object: nil)

        panel = PanelController(settings: settings) { [weak self] in self?.refresh() }
        popover.contentViewController = panel
        popover.behavior = .transient

        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.squareLength)
        statusItem.autosaveName = "FiltreJaune"
        statusItem.button?.target = self
        statusItem.button?.action = #selector(statusClicked)
        statusItem.button?.sendAction(on: [.leftMouseUp, .rightMouseUp])
        refresh()

        NotificationCenter.default.addObserver(self, selector: #selector(screensChanged),
            name: NSApplication.didChangeScreenParametersNotification, object: nil)
        NSWorkspace.shared.notificationCenter.addObserver(self, selector: #selector(screensChanged),
            name: NSWorkspace.didWakeNotification, object: nil)
        // macOS réinitialise parfois les tables gamma (veille, changement d'écran…) : on les réapplique.
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            guard let self, self.settings.enabled, self.settings.mode == .gamma else { return }
            self.filter.apply(self.settings)
        }

        // À l'ouverture de l'app, on montre le panneau (le temps que l'icône se place dans la barre).
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in self?.showPanel() }
    }

    func applicationWillTerminate(_ n: Notification) { filter.clear() }

    // Double-clic sur l'app alors qu'elle tourne déjà.
    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        showPanel()
        return true
    }

    func refresh() {
        let symbol = settings.enabled ? "sun.haze.fill" : "sun.haze"
        statusItem.button?.image = NSImage(systemSymbolName: symbol, accessibilityDescription: "Filtre Jaune")
        panel.refresh()
        filter.apply(settings)
    }

    @objc func statusClicked() {
        if NSApp.currentEvent?.type == .rightMouseUp {
            // Clic droit : allumer / éteindre directement
            settings.enabled.toggle()
            refresh()
        } else if popover.isShown {
            popover.performClose(nil)
        } else {
            showPanel()
        }
    }

    /// Ouvre le panneau sous l'icône de la barre de menus, ou dans une fenêtre si l'icône est cachée (encoche…).
    @objc func showPanel() {
        refresh()
        NSApp.activate(ignoringOtherApps: true)
        if let button = statusItem.button, let w = button.window, w.occlusionState.contains(.visible),
           NSScreen.screens.contains(where: { $0.frame.intersects(w.frame) }) {
            fallbackWindow?.close()
            fallbackWindow?.contentViewController = nil
            popover.contentViewController = panel
            popover.show(relativeTo: button.bounds, of: button, preferredEdge: .minY)
            return
        }
        popover.performClose(nil)
        let win = fallbackWindow ?? {
            let w = NSWindow(contentRect: .zero, styleMask: [.titled, .closable], backing: .buffered, defer: false)
            w.title = "Filtre Jaune"
            w.isReleasedWhenClosed = false
            fallbackWindow = w
            return w
        }()
        popover.contentViewController = nil
        win.contentViewController = panel
        let mouse = NSEvent.mouseLocation
        if let screen = NSScreen.screens.first(where: { $0.frame.contains(mouse) }) ?? NSScreen.main {
            // En haut à droite de l'écran, juste sous la barre de menus
            let v = screen.visibleFrame
            win.setFrameTopLeftPoint(NSPoint(x: v.maxX - win.frame.width - 12, y: v.maxY - 8))
        }
        win.makeKeyAndOrderFront(nil)
    }

    @objc func screensChanged() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) { [weak self] in
            guard let self else { return }
            self.filter.clear()
            self.filter.apply(self.settings)
        }
    }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.accessory)
app.run()
