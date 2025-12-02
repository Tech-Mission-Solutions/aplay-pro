# Windows Build Without Code Signing Certificate

## ✅ Yes, You Can Build for Windows Without a Certificate

There are **3 viable options** to get Windows builds without Microsoft certification or code signing.

---

## Option 1: Unsigned Portable Executable (RECOMMENDED FOR TESTING/BETA)

**What:** Single `.exe` file with no installation required, unsigned but fully functional.

**Pros:**

- No certificate needed
- Single file distribution
- Users can run immediately
- Good for beta/testing phases

**Cons:**

- Windows Defender SmartScreen warning on first run (users see "unrecognized app" warning, but can click "Run anyway")
- Not suitable for official releases to enterprise users
- Will trigger antivirus warnings initially

**Build Configuration:**

```yaml
# config/building/electron-builder-unsigned.yaml
appId: com.joinamazing.aplay-pro
productName: APlayPro
artifactName: APlay-Pro-${version}-${arch}.${ext}

files:
  - build/electron/**
  - build/types/**
  - public/**
  - "!node_modules/@napi-rs"

extraResources:
  - from: node_modules/slideshow/
    to: slideshow
    filter:
      - connector-*

win:
  target:
    - portable # Single .exe file, no installation
    - nsis # Optional: traditional installer (also unsigned)
  icon: build/public/icon.png
  # NO signing configuration = unsigned build
```

**How to Build:**

```bash
npm run build
npx electron-builder --config config/building/electron-builder-unsigned.yaml --win portable
```

**Result:** `APlay-Pro-1.0.0-x64.exe` (portable, ~200MB, no installation needed)

---

## Option 2: NSIS Installer Without Signing (TRADITIONAL INSTALLER)

**What:** Traditional Windows installer (`.exe` installer that installs the app), unsigned.

**Pros:**

- More professional than portable
- Creates Start Menu shortcuts
- Standard Windows installation experience
- Still works fine without certificate

**Cons:**

- Same SmartScreen warning as Option 1
- Requires installation (though quick)

**Build Configuration:**

```yaml
# config/building/electron-builder-unsigned.yaml (add to 'win' section)
win:
  target:
    - nsis
  icon: build/public/icon.png
  # NO signing configuration

nsis:
  oneClick: false
  allowToChangeInstallationDirectory: true
  createDesktopShortcut: true
  createStartMenuShortcut: true
  shortcutName: APlayPro
  # installerIcon: build/public/icon.ico
  # uninstallerIcon: build/public/icon.ico
  # installerHeaderIcon: build/public/icon.ico
```

**How to Build:**

```bash
npm run build
npx electron-builder --config config/building/electron-builder-unsigned.yaml --win nsis
```

**Result:** `APlay-Pro-1.0.0.exe` (installer, ~250MB)

---

## Option 3: Windows Store App (NO CERTIFICATE NEEDED, BUT REQUIRES APPROVAL)

**What:** Publish as a Windows Packaged App (AppX/MSIX) through Microsoft Store.

**Pros:**

- No SmartScreen warnings
- Automatic updates through Store
- Professional distribution channel
- Free to publish (only revenue share on paid apps)

**Cons:**

- Must pass Microsoft Store certification (different from Windows security)
- Store certification can reject for policy reasons (not just code signing)
- Takes 24-48 hours per submission
- Requires Microsoft Developer Account ($19 one-time)

**Note:** This is certification, but not _code signing_ - they're different processes.

---

## Option 4: Self-Signed Certificate (ADVANCED - NOT RECOMMENDED)

**What:** Create your own certificate to sign the executable.

**Pros:**

- No SmartScreen warning (users trust self-signed certs)
- Executable is signed
- Better than unsigned

**Cons:**

- SmartScreen still shows warning initially (different from commercial cert)
- Only effective if users add your cert to their trust store
- Complex to set up
- Not suitable for public distribution

**Not recommended for your use case.**

---

## Quick Comparison Table

| Option                   | Cost              | Setup  | SmartScreen | Suitable For | Time to Build       |
| ------------------------ | ----------------- | ------ | ----------- | ------------ | ------------------- |
| **Portable .exe**        | Free              | 5 min  | ⚠️ Warning  | Beta/Testing | 5 min               |
| **NSIS Installer**       | Free              | 5 min  | ⚠️ Warning  | Beta/Testing | 5 min               |
| **Windows Store**        | $19 (Dev Account) | 30 min | ❌ No       | Production   | 2-3 days (approval) |
| **Signed (Certificate)** | $300-600/year     | 1 hour | ✅ None     | Production   | 10 min              |

---

## What Users See

### Unsigned Portable EXE (SmartScreen Warning)

```
[Windows Defender SmartScreen]
"Windows protected your PC"
"Microsoft Defender SmartScreen prevented an unrecognized app from starting..."

[More info]
Publisher: Unknown Publisher

[Run anyway] [Don't run]
```

👉 Users click "Run anyway" and it works fine.

### After Certificate + Time

After running unsigned for a few months, SmartScreen learns the app is safe and stops showing the warning automatically.

---

## Recommended Path for Your Situation

### Phase 1: Now (Beta Distribution - No Certificate)

```bash
# Build portable executable
npm run build
npx electron-builder --config config/building/electron-builder-unsigned.yaml --win portable
```

- Share `APlay-Pro-1.0.0-x64.exe` with beta testers
- Users see SmartScreen warning once, click "Run anyway"
- You get real Windows testing data

### Phase 2: During Microsoft Talks (Gather Usage Data)

- Collect real Windows usage feedback
- Build confidence in the product
- Track if SmartScreen warning affects adoption

### Phase 3: Official Release (Get Certificate)

- Once Microsoft approves certification
- Get code signing certificate (~$300-600/year from DigiCert)
- Build with certificate - no more SmartScreen warnings
- Enterprise users will be satisfied

---

## Implementation: Uncomment & Modify Windows Section

Here's the updated configuration for your `electron-builder.yaml`:

### Current (Commented Out)

```yaml
# windows

# win:
#     target: NSIS
#     icon: build/public/icon.png
#     azureSignOptions:
#         publisherName: Live Church Solutions
#         endpoint: https://wus2.codesigning.azure.net/
#         certificateProfileName: FreeShow
#         codeSigningAccountName: FreeShow
```

### Updated (Unsigned, Ready to Build)

```yaml
# windows

win:
  target:
    - portable
    - nsis
  icon: build/public/icon.png
  # Removed signing options - builds unsigned
  # Once you have a certificate, add this back:
  # certificateFile: ${CERT_FILE}
  # certificatePassword: ${CERT_PASSWORD}

nsis:
  oneClick: false
  allowToChangeInstallationDirectory: true
  createDesktopShortcut: true
  createStartMenuShortcut: true
  shortcutName: APlayPro
```

---

## Build Scripts to Add to package.json

```json
{
  "scripts": {
    "release:win": "npm run build && electron-builder --config config/building/electron-builder.yaml --win",
    "release:win:portable": "npm run build && electron-builder --config config/building/electron-builder.yaml --win portable",
    "pack:win": "electron-builder --config config/building/electron-builder.yaml --win --dir"
  }
}
```

Then run:

```bash
npm run release:win:portable    # Just portable EXE
npm run release:win             # Both portable + installer
```

---

## Next Steps

### To Get Windows Build Today (5 minutes):

1. Uncomment the `win:` section in `electron-builder.yaml`
2. Remove the `azureSignOptions:` (signing config)
3. Run: `npm run build && npm run release:win:portable`
4. Find `.exe` in `dist/` folder
5. Test on Windows - click through SmartScreen warning

### For Production Release:

- Users will accept SmartScreen warning (one click)
- After ~1-3 months of downloads, Windows learns it's safe (warning reduces)
- Then get certificate when ready for enterprise users

---

## SmartScreen Warning Lifespan

```
Week 1-2:  "Windows protected your PC" + Red X
             ↓ (reputation building)
Week 3-8:  "Windows protected your PC" but no red X (softer warning)
             ↓ (more downloads)
Month 3+:  Warning disappears entirely (Windows trusts the publisher)
```

This is why even many small indie games/apps ship unsigned for the first releases.

---

## Files to Modify

1. `config/building/electron-builder.yaml` - Uncomment Windows section
2. `package.json` - Add new build scripts (optional, convenient)

That's it! Ready to build for Windows today.
