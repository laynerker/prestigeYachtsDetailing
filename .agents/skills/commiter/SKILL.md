---
name: commiter
description: Commits changes to the repository in a structured way
---

# Conventional Commits Guidelines

When committing changes, you must strictly follow the **Conventional Commits** specification.

## Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Rules:
1. **Title Length**: The title MUST be a maximum of 50 characters long. This includes the type, scope, and description.
2. **Type**: Must be one of the following:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `perf`: A code change that improves performance
   - `test`: Adding missing tests or correcting existing tests
   - `build`: Changes that affect the build system or external dependencies
   - `ci`: Changes to our CI configuration files and scripts
   - `chore`: Other changes that don't modify src or test files
3. **Description**: A short summary of the code changes.
4. **Body (Mandatory for this skill)**: You MUST provide a detailed body specifying exactly what changes were made, why they were made, and any context relevant to the commit. Ensure the body is separated from the title by a blank line.

### Example

```text
feat(ui): add new dark mode toggle

Implemented a new dark mode toggle switch in the main navigation bar.
Connected the toggle to the existing theme context provider.
Updated CSS variables to ensure smooth transitions between themes.
```