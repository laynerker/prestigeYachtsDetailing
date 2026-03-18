---
name: changelog
description: Generates and updates a CHANGELOG.md file with each commit made to the repository.
---

# Changelog Guidelines

This skill ensures that a `CHANGELOG.md` file is maintained and updated consistently whenever new commits are made to the codebase.

## Workflow

Every time you are going to make a commit, you **MUST** follow these steps to update the changelog:

1. **Locate or Create CHANGELOG.md**:
   Find the `CHANGELOG.md` file at the root of the project. If it does not exist, you must create it.

2. **Categorize the Change**:
   Determine the type of change based on the Conventional Commits type you are using. Map them as follows:
   - `feat` -> **Added**
   - `fix` -> **Fixed**
   - `refactor`, `perf` -> **Changed**
   - `docs`, `style`, `test`, `chore`, `ci`, `build` -> Usually not added to the user-facing changelog, but you can add them under **Other** if requested.

3. **Update the `[Unreleased]` Section**:
   Add the commit description to the appropriate category under the `[Unreleased]` heading.

### Example Format

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- ui: add new dark mode toggle

### Fixed
- contact: fix layout issue on mobile devices
```

4. **Stage and Commit**:
   Make sure to `git add CHANGELOG.md` along with the other modified files before executing the `git commit` command. This ensures the changelog is part of the commit that introduces the change.
