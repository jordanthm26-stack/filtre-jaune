#!/bin/zsh
# Compile Filtre Jaune, l'installe (~/Applications + Bureau) et crée les fichiers à partager (zip + dmg).
set -e
cd "$(dirname "$0")"

NAME="Filtre Jaune"
VERSION="1.0"
APP="build/$NAME.app"
rm -rf build
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

# Logo
swiftc -O -o build/make_icon make_icon.swift
build/make_icon build/AppIcon.iconset
iconutil -c icns build/AppIcon.iconset -o "$APP/Contents/Resources/AppIcon.icns"

# Binaire universel : Mac Apple Silicon et Intel
swiftc -O -swift-version 5 -target arm64-apple-macos13 -o build/FiltreJaune-arm64 main.swift
swiftc -O -swift-version 5 -target x86_64-apple-macos13 -o build/FiltreJaune-x86_64 main.swift
lipo -create build/FiltreJaune-arm64 build/FiltreJaune-x86_64 -output "$APP/Contents/MacOS/FiltreJaune"

cat > "$APP/Contents/Info.plist" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key><string>$NAME</string>
  <key>CFBundleDisplayName</key><string>$NAME</string>
  <key>CFBundleIdentifier</key><string>com.jordanthomas.filtrejaune</string>
  <key>CFBundleExecutable</key><string>FiltreJaune</string>
  <key>CFBundleIconFile</key><string>AppIcon</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleShortVersionString</key><string>$VERSION</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>CFBundleDevelopmentRegion</key><string>fr</string>
  <key>LSApplicationCategoryType</key><string>public.app-category.utilities</string>
  <key>LSMinimumSystemVersion</key><string>13.0</string>
  <key>LSUIElement</key><true/>
  <key>NSHighResolutionCapable</key><true/>
  <key>NSHumanReadableCopyright</key><string>© 2026 Jordan Thomas</string>
</dict>
</plist>
EOF

# Signature : Developer ID si disponible (distribution publique), sinon signature locale
IDENTITY="${SIGN_IDENTITY:--}"
codesign --force --options runtime --timestamp=none --sign "$IDENTITY" "$APP"

# Installation locale
for dest in ~/Applications ~/Desktop; do
  mkdir -p "$dest"
  rm -rf "$dest/$NAME.app"
  cp -R "$APP" "$dest/"
done

# Fichiers à partager : zip et dmg (avec raccourci vers Applications pour glisser-déposer)
ditto -c -k --keepParent "$APP" "build/FiltreJaune-$VERSION.zip"
mkdir -p build/dmg
cp -R "$APP" build/dmg/
ln -s /Applications build/dmg/Applications
hdiutil create -volname "$NAME" -srcfolder build/dmg -ov -format UDZO "build/FiltreJaune-$VERSION.dmg" >/dev/null
rm -rf build/dmg build/AppIcon.iconset build/make_icon build/FiltreJaune-arm64 build/FiltreJaune-x86_64

echo "Installé : ~/Applications/$NAME.app et ~/Desktop/$NAME.app"
echo "À partager : build/FiltreJaune-$VERSION.dmg et build/FiltreJaune-$VERSION.zip"
