# Portfolio Repository Improvement Instructions

**Date:** 2025-11-13 10:12:13

This collection of markdown files provides structured, Copilot-friendly instructions for improving and maintaining your portfolio repository.

Each file focuses on a specific area (CI setup, SEO, accessibility, etc.) and includes placeholders where you can add project-specific values.

---

### Files Overview

- `01_general_instructions.md` — Naming, structure, and file hygiene rules.
- `02_metadata_and_seo.md` — SEO, Open Graph, and JSON-LD metadata setup.
- `03_contact_backend.md` — Secure backend instructions for handling contact forms.
- `04_error_and_analytics.md` — Integrate analytics (e.g., Plausible/GA4) and error tracking (Sentry).
- `05_ci_setup.md` — Minimal GitHub Actions workflow for lint, build, and test.
- `README.md` — This file.

Each file is designed for GitHub Copilot use — it asks permission before executing terminal commands, explains changes, and logs all updates in this README.

---

### Logging Changes

Whenever an instruction file is executed:
1. Copilot must explain the command and its purpose.
2. Ask **permission** before running any terminal command.
3. After successful execution, append a log entry here:

```markdown
## Change Log

- [ ] YYYY-MM-DD HH:MM — Description of change
```
