# Quick Start: Release APlay Pro

## One-Line Release Command

```bash
git tag v1.0.0 && git push origin v1.0.0
```

Done. GitHub Actions builds everything. Wait ~40 minutes.

---

## What Happens Automatically

✅ Compiles for Windows (x64)
✅ Compiles for macOS (Intel + Apple Silicon)  
✅ Creates portable .exe + installer
✅ Creates DMG + ZIP files
✅ Uploads all to Release page
✅ Zero manual work

---

## Where to Find Builds

**GitHub → Releases → Your Tag**

```
📦 v1.0.0
├─ APlay-Pro-1.0.0-x64.exe (Windows portable)
├─ APlay-Pro-1.0.0.exe (Windows installer)
├─ APlay-Pro-1.0.0-x64.dmg (macOS Intel)
├─ APlay-Pro-1.0.0-arm64.dmg (macOS Apple Silicon)
├─ APlay-Pro-1.0.0-x64.zip (macOS Intel)
└─ APlay-Pro-1.0.0-arm64.zip (macOS Apple Silicon)
```

---

## Timing

- **Build Time**: ~40 minutes
- **Runs In Parallel**: Windows + macOS at same time
- **Automatic Upload**: No manual upload needed

---

## Test Before Release

```bash
# Test with RC (release candidate)
git tag v1.0.0-rc1
git push origin v1.0.0-rc1

# Creates pre-release on GitHub, same process
# Lower risk way to verify everything works
```

---

## Build Locally (Optional)

```bash
npm run build
npm run release:win:portable

# Output: dist/APlay-Pro-1.0.0-x64.exe
```

---

## Files Changed

- ✅ `config/building/electron-builder.yaml` - Windows enabled
- ✅ `.github/workflows/release.yml` - Windows CI/CD enabled
- ✅ `package.json` - Build scripts added

---

## Notes

- Windows builds are **unsigned** (works fine, no certificate needed)
- Users will see SmartScreen warning once (normal for new apps)
- All other platforms signed/notarized where applicable

---

## Next Step

```bash
git tag v1.0.0
git push origin v1.0.0
```

Watch: GitHub → Actions tab
