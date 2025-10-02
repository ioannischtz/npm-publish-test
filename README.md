# npm-publish-workflow-test

Test repository for validating npm publish workflow with GitHub Actions trusted publishers.

## Purpose

This package is used to test the npm publish GitHub Action workflow before applying it to production packages.

## Testing Approach

- Validates all workflow steps up to (but not including) actual npm publish
- Uses `npm pack` to create tarball without publishing
- Tests OIDC authentication flow
- Validates package contents and metadata

## Not for Production Use

This is a test package only.
