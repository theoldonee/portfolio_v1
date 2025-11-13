# Error Tracking and Analytics Integration

This guide helps you add both analytics and error tracking to your portfolio.

---

## Error Tracking

Use [Sentry](https://sentry.io/) or similar.

### Steps

1. Install Sentry SDK:
   ```bash
   npm install @sentry/nextjs
   ```

2. Run setup wizard (with permission):
   ```bash
   npx @sentry/wizard@latest -i nextjs
   ```

3. Confirm `.sentryclirc`, `sentry.client.config.ts`, and `sentry.server.config.ts` exist.

---

## Analytics Integration

Options:
- **Plausible (Privacy-friendly)**:
  ```bash
  npm install next-plausible
  ```
- **Google Analytics (GA4)**:
  Add GA tag in `_app.tsx` or via Next.js Analytics.

---

## Copilot Terminal Protocol

- Ask before installing or configuring tools.
- Explain why each step is necessary.
- Update `README.md` with changes and timestamps.

---
