# Execution Order for Portfolio Repository Improvements

**Date:** 2025-11-13  
**Purpose:** Guide the structured and safe implementation of all improvement markdowns while continuing feature development.

---

## ⚙️ Philosophy

You’re still actively adding features.  
Therefore:
- We **won’t interrupt** your development flow.
- We’ll apply non-breaking quality-of-life updates **first**.
- We’ll only enable automated or production-sensitive systems **after core development stabilizes**.

This order ensures each improvement builds on a stable foundation.

---

## 🧭 Step-by-Step Execution Order

### **Step 1 — General Hygiene and Structure**
📄 File: `01_general_instructions.md`

**Purpose:**  
Clean naming inconsistencies, directory structure, and project organization.

**Why first:**  
It prevents compounding structural errors as you keep adding features.

**Tasks:**  
- Correct typos (e.g., `genreral` → `general`).  
- Ensure consistent naming across modules and components.  
- Add missing `index.ts` exports for each module.

**Checkpoint:**  
✅ Run the app — no import errors or broken routes.

---

### **Step 2 — Contact Backend Setup**
📄 File: `03_contact_backend.md`

**Purpose:**  
Add a secure backend for the contact form.

**Why second:**  
This introduces a new feature (backend) without breaking the frontend.  
It’s isolated, safe, and helps test API routing early.

**Tasks:**  
- Create `/api/contact` route.  
- Add basic email handler and validation.  
- Include `.env.example` updates for API secrets.

**Checkpoint:**  
✅ Test form submission — confirm successful API response.

---

### **Step 3 — Metadata, SEO, and JSON-LD**
📄 File: `02_metadata_and_seo.md`

**Purpose:**  
Establish default SEO, Open Graph, and JSON-LD metadata.

**Why third:**  
Safe to add during feature work — doesn’t affect build logic.  
SEO updates improve discoverability for later deployment.

**Tasks:**  
- Create `src/lib/metadata.ts`.  
- Apply metadata in `app/layout.tsx`.  
- Add `og-image.png` placeholder in `/public`.

**Checkpoint:**  
✅ Run Lighthouse or Chrome inspect → confirm metadata present.

---

### **Step 4 — Error Tracking and Analytics**
📄 File: `04_error_and_analytics.md`

**Purpose:**  
Integrate analytics (e.g., GA4 or Plausible) and error tracking (Sentry).

**Why fourth:**  
Wait until major features are stable — error logs and analytics are only meaningful once traffic and interactions exist.

**Tasks:**  
- Install and configure Sentry.  
- Add Plausible or Google Analytics script.  
- Update `.env.example` for tracking IDs.

**Checkpoint:**  
✅ Confirm no console or runtime errors on build.

---

### **Step 5 — CI Setup**
📄 File: `05_ci_setup.md`

**Purpose:**  
Add a minimal GitHub Actions workflow for linting, building, and type-checking.

**Why last:**  
CI should be added **after** structure and configs stabilize — so it doesn’t break every push while you’re still in heavy development.

**Tasks:**  
- Add `.github/workflows/ci.yml`.  
- Verify the workflow triggers on PRs and pushes.  
- Ensure it runs lint + build successfully.

**Checkpoint:**  
✅ GitHub Actions → green checkmark for `main` branch.

---

## 🧩 Optional Automation Rule (Copilot Protocol)

When Copilot executes any instruction from these markdowns:
1. **Explain** what the command will do.  
2. **Ask for permission** before any terminal or Git action.  
3. **Log each approved change** in `README.md` under the “Change Log” section, including:
   - Date
   - Time
   - File modified
   - Short description of the change

Example log:
```markdown
- [x] 2025-11-13 14:22 — Added metadata.ts and applied default SEO metadata to layout.tsx
