# General Instructions and File Hygiene

This guide helps maintain consistency, clarity, and traceability in your portfolio repository.

---

## Naming Conventions

1. Use **kebab-case** for filenames (e.g., `project-card.tsx`, `hero-section.tsx`).
2. Use **PascalCase** for React components (e.g., `ProjectCard`, `HeroSection`).
3. Avoid ambiguous directory names — prefer `modules/general` over `modules/genreral`.

---

## File Organization

- Keep UI primitives under `src/components/ui/`.
- Feature modules go under `src/modules/`.
- Shared utilities go under `src/lib/`.
- Public assets like images and icons belong in `/public`.

---

## GitHub Copilot Terminal Guidelines

When Copilot suggests terminal commands (e.g., renaming files, linting, etc.), it must:

1. **Explain** what the command will do.
2. **Ask permission** before executing.
3. After execution, log the action in `README.md` under the “Change Log” section.
4. Include code comments explaining *why* the change is being made.

Example:
```bash
# Explanation: Renaming misspelled directory for clarity
mv src/modules/genreral src/modules/general
```

---

## File Review Tasks

- Check for **naming inconsistencies** (e.g., typos like `genreral`).
- Verify all imports use relative paths or aliases (`@/components/...`).

---
