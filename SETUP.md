# Test Repository Setup Instructions

This repository tests the npm publish workflow before applying it to production.

## Quick Start

### 1. Create GitHub Repository

Create a new repo under your personal account:
- Name: `npm-publish-test` (or any name)
- Visibility: Public
- Don't initialize with README (we already have files)

### 2. Push This Code

```bash
cd /Users/yannis.chatzianagnostou/Dev/work/projects/sdks/npm-publish-test

git init
git add .
git commit -m "Initial commit: npm publish workflow test"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/npm-publish-test.git
git push -u origin main
```

### 3. Test the Workflow

The workflow will run automatically on push to `main`. It will:

✅ Check if version exists on npm
✅ Install dependencies
✅ Build the package
✅ Run linting
✅ Create tarball with `npm pack`
✅ Create GitHub release with tarball attached
❌ Skip actual `npm publish` (commented out)

### 4. Verify Results

After the workflow runs:
- Check **Actions** tab for workflow logs
- Check **Releases** tab for created release
- Download the `.tgz` file from the release to inspect contents

### 5. Test Version Bump

To test the version check logic:

```bash
# Edit package.json, change version to 0.0.2
git add package.json
git commit -m "Bump version to 0.0.2"
git push
```

The workflow will run again and create a new release.

### 6. Test Skip Logic

To test the skip behavior:

```bash
# Don't change version, just edit README
git commit -m "Update README" --allow-empty
git push
```

The workflow should detect version already exists and skip publishing.

## What Gets Tested

- ✅ GitHub Actions workflow syntax
- ✅ Node.js and npm setup
- ✅ Dependency installation
- ✅ Build process
- ✅ Linting
- ✅ Version checking against npm registry
- ✅ Package tarball creation
- ✅ GitHub release creation
- ✅ Release artifact upload
- ❌ Actual npm publish (commented out for safety)

## Differences from Production Workflow

This test workflow is simplified compared to the production one:

1. **No pnpm** - Uses regular npm (simpler, no workspace complexity)
2. **No path filtering** - Publishes on any change to main
3. **No package directory** - Files are in repo root (not `packages/messaging/`)
4. **Commented out npm publish** - Creates tarball instead
5. **Test release notes** - Clearly marked as "TEST RELEASE"

## Next Steps - Enabling Real Publish (Optional)

If you want to test the **full flow including npm publish**:

1. Claim the package name on npm (if available): `npm-publish-workflow-test`
2. Set up npm trusted publishers:
   - Go to https://www.npmjs.com/package/npm-publish-workflow-test/access
   - Add trusted publisher: GitHub Actions
   - Organization/User: YOUR_USERNAME
   - Repository: npm-publish-test
   - Workflow: npm-publish-test.yml
   - Environment: (leave empty)

3. Uncomment the publish step in `.github/workflows/npm-publish-test.yml`:
   ```yaml
   - name: Publish to npm with trusted publishers
     run: npm publish --access public
   ```

4. Push a version bump and watch it publish!

## Clean Up

After testing is complete, you can:
- Delete the GitHub repository
- Unpublish/deprecate the npm package (if you published it)
- Or keep it as a permanent test harness for future workflow changes
