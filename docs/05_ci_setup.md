# Minimal GitHub Actions CI Setup

This guide provides a minimal workflow to lint, build, and (optionally) test your portfolio.

---

## File to Create
`.github/workflows/ci.yml`

---

## Example Workflow

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Lint code
        run: npm run lint

      - name: Build project
        run: npm run build
```

---

## Copilot Terminal Protocol

- Ask before creating or pushing workflow files.
- Explain what the workflow does.
- Log all modifications in `README.md`.

---
