// Dessine le logo de Filtre Jaune et produit AppIcon.icns (appelé par build.sh).
import AppKit

let out = CommandLine.arguments[1]  // dossier .iconset

func draw(size: CGFloat) -> NSBitmapImageRep {
    let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(size), pixelsHigh: Int(size),
                               bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
                               colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
    let s = size / 1024

    // Forme arrondie standard des icônes macOS (marge de 100 px sur 1024)
    let rect = NSRect(x: 100 * s, y: 100 * s, width: 824 * s, height: 824 * s)
    let shape = NSBezierPath(roundedRect: rect, xRadius: 185 * s, yRadius: 185 * s)

    NSGraphicsContext.saveGraphicsState()
    let shadow = NSShadow()
    shadow.shadowColor = NSColor.black.withAlphaComponent(0.3)
    shadow.shadowBlurRadius = 20 * s
    shadow.shadowOffset = NSSize(width: 0, height: -8 * s)
    shadow.set()
    NSColor.black.setFill()
    shape.fill()
    NSGraphicsContext.restoreGraphicsState()

    // Fond : ciel du soir, du bleu nuit vers l'orange
    NSGradient(colors: [
        NSColor(srgbRed: 0.16, green: 0.13, blue: 0.36, alpha: 1),
        NSColor(srgbRed: 0.85, green: 0.35, blue: 0.30, alpha: 1),
        NSColor(srgbRed: 1.00, green: 0.72, blue: 0.25, alpha: 1),
    ])!.draw(in: shape, angle: -90)

    shape.addClip()

    // Soleil avec halo
    let center = NSPoint(x: 512 * s, y: 470 * s)
    NSGradient(colors: [NSColor(srgbRed: 1, green: 0.9, blue: 0.4, alpha: 0.75),
                        NSColor(srgbRed: 1, green: 0.8, blue: 0.3, alpha: 0)])!
        .draw(fromCenter: center, radius: 0, toCenter: center, radius: 380 * s, options: [])
    let sun = NSBezierPath(ovalIn: NSRect(x: center.x - 190 * s, y: center.y - 190 * s, width: 380 * s, height: 380 * s))
    NSGradient(colors: [NSColor(srgbRed: 1, green: 0.97, blue: 0.7, alpha: 1),
                        NSColor(srgbRed: 1, green: 0.82, blue: 0.2, alpha: 1)])!.draw(in: sun, angle: -90)

    // Calque jaune transparent sur la moitié basse : l'idée du filtre
    let filterRect = NSRect(x: 100 * s, y: 100 * s, width: 824 * s, height: 300 * s)
    NSColor(srgbRed: 1, green: 0.85, blue: 0.2, alpha: 0.55).setFill()
    filterRect.fill()
    NSColor(srgbRed: 1, green: 0.95, blue: 0.7, alpha: 0.9).setFill()
    NSRect(x: 100 * s, y: 396 * s, width: 824 * s, height: 8 * s).fill()

    NSGraphicsContext.restoreGraphicsState()
    return rep
}

try? FileManager.default.createDirectory(atPath: out, withIntermediateDirectories: true)
for base in [16, 32, 128, 256, 512] {
    for scale in [1, 2] {
        let px = CGFloat(base * scale)
        let name = scale == 1 ? "icon_\(base)x\(base).png" : "icon_\(base)x\(base)@2x.png"
        try! draw(size: px).representation(using: .png, properties: [:])!
            .write(to: URL(fileURLWithPath: out).appendingPathComponent(name))
    }
}
