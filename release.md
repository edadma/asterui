# Release Checklist

Follow these steps in order when creating a new release.

## Pre-release Checks

- [ ] Ensure you're on the `main` branch
- [ ] Pull latest changes: `git pull`
- [ ] Ensure working directory is clean: `git status`

## Release Steps

### 1. Bump Version

Edit `packages/asterui/package.json` and increment the patch version (e.g., `0.12.88` → `0.12.89`).

### 2. Update Changelog

Edit `packages/asterui/CHANGELOG.md` and add an entry for the new version with a summary of changes.

### 3. Update Docs (if components or APIs changed)

Update relevant docs in `packages/docs/src/content/docs/` (English + localized versions in es/, fr/, pt/, zh/).

If components were added/removed:

**README.md** (root):
- Update component counts ("100+ components", "101 components")

**packages/docs/public/llms.txt**:
- Update component count in the Overview section
- Add/remove components from the appropriate category list

### 4. Sync and Build

```bash
npx pnpm run sync-prefixed       # Syncs source + version, builds prefixed package
npx pnpm run sync-icons-prefixed  # Only if icons changed
```

Then verify all packages build clean:

```bash
cd packages/asterui && npx vite build     # Main package
cd packages/docs && npx pnpm run build    # Docs site (also syncs changelog)
```

### 5. Commit and Push

```bash
git add -A
git commit -m "v0.12.89: summary of changes"
git push
```

### 6. Create GitHub Release

```bash
gh release create vX.Y.Z --title "vX.Y.Z" --notes "Release notes here"
```

Or create via GitHub web UI at https://github.com/edadma/asterui/releases/new

### 7. Publish to npm

```bash
npx pnpm --filter asterui publish --access public
npx pnpm --filter @aster-ui/prefixed publish --access public
```

Only publish packages with source changes. If only asterui changed, skip prefixed (unless it was synced with new changes). Icons packages only need publishing if icons source changed:

```bash
npx pnpm --filter @aster-ui/icons publish --access public
npx pnpm --filter @aster-ui/icons-prefixed publish --access public
```

### 8. Deploy Docs (if docs changed)

Deploy the docs site so the version badge and changelog are up to date.

## Post-release

- [ ] Verify the release appears on GitHub
- [ ] Verify npm package version: `npm view asterui version`
- [ ] Update downstream projects (e.g., roamer): `npm update asterui`

## Common Issues

### Forgot to update changelog before tagging

If you created a release but forgot the changelog:

1. Update the changelog
2. Commit and push the change
3. Move the tag to the new commit:
   ```bash
   git tag -d vX.Y.Z
   git push origin :refs/tags/vX.Y.Z
   gh release delete vX.Y.Z --yes
   gh release create vX.Y.Z --title "vX.Y.Z" --notes "Release notes"
   ```

### Build fails after version bump

If the build fails, fix the issue before committing. Don't commit a broken build.

### Prefixed version out of sync

The `sync-prefixed` script copies the version from the main package. If you bump the version *after* syncing, re-run `npx pnpm run sync-prefixed`.

### `pnpm` not on PATH (macOS)

Use `npx pnpm` as a prefix for all pnpm commands if pnpm isn't installed globally.
