# Project Structure

Last Updated: 2025-11-13

This document outlines the current file structure of the portfolio project. Large folders like `node_modules`, `.next`, and detailed `src/components/ui` contents are excluded.

## Directory Tree

```
portfolio/
├── docs/
│   ├── 00_execution_order.md          (Step-by-step guide for improvements)
│   ├── 01_general_instructions.md     (General hygiene & naming conventions)
│   ├── 02_metadata_and_seo.md         (SEO & metadata setup)
│   ├── 03_contact_backend.md          (Contact form backend)
│   ├── 04_error_and_analytics.md      (Error tracking & analytics)
│   ├── 05_ci_setup.md                 (CI/CD workflow setup)
│   └── README.md                      (Docs overview)
│
├── public/
│   ├── contact/
│   │   └── mail-heart.svg
│   ├── experience/
│   ├── hero-bg.jpg
│   ├── resume-backdrop.jpg
│   └── CV_v2.pdf
│
├── src/
│   ├── app/
│   │   ├── globals.css                (Global styles)
│   │   ├── layout.tsx                 (Root layout)
│   │   ├── (home)/
│   │   │   ├── layout.tsx             (Home layout)
│   │   │   └── page.tsx               (Main home page)
│   │   └── projects/
│   │       └── [lang]/                (Language-based dynamic routes)
│   │
│   ├── components/
│   │   └── ui/                        (Radix UI + shadcn components)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/
│   │   └── use-mobile.ts              (Mobile device detection)
│   │
│   ├── lib/
│   │   └── utils.ts                   (Utility functions, class merging)
│   │
│   └── modules/
│       ├── general/                   (General layout & shared components)
│       │   └── ui/
│       │       ├── components/
│       │       │   ├── contact.tsx                   (Contact section)
│       │       │   ├── resume.tsx                    (Resume/CV section)
│       │       │   ├── experience-section/
│       │       │   │   ├── index.tsx                 (Main experience section)
│       │       │   │   └── technologies.tsx          (Tech stack display)
│       │       │   ├── footer/
│       │       │   │   ├── footer.tsx                (Main footer)
│       │       │   │   └── social-media.tsx          (Social links)
│       │       │   └── navbar/
│       │       │       └── index.tsx                 (Navigation bar)
│       │       │
│       │       └── layout/
│       │           └── general-layout.tsx            (General layout wrapper)
│       │
│       ├── home/                      (Home page specific modules)
│       │   └── ui/
│       │       ├── components/
│       │       │   └── hero/
│       │       │       ├── animated-self-carousel.tsx (Hero carousel)
│       │       │       └── index.tsx                  (Hero main component)
│       │       │
│       │       └── layout/
│       │           └── home-layout.tsx                (Home layout wrapper)
│       │
│       └── projects/                  (Projects page modules - empty)
│
├── .github/                           (GitHub configuration - to be added)
│   └── workflows/                     (CI/CD workflows - to be added)
│
├── components.json                    (shadcn/ui configuration)
├── eslint.config.mjs                  (ESLint configuration)
├── next-env.d.ts                      (Next.js type definitions)
├── next.config.ts                     (Next.js configuration)
├── package.json                       (Project dependencies & scripts)
├── package-lock.json                  (Dependency lock file)
├── postcss.config.mjs                 (PostCSS configuration)
├── README.md                          (Project README with changelog)
├── REPO_REVIEW.md                     (Repository review & recommendations)
├── tsconfig.json                      (TypeScript configuration)
├── .env.example                       (Environment variables template - to be added)
├── .gitignore
└── node_modules/                      (Dependencies - excluded from tree)
.next/                                 (Build output - excluded from tree)
```

## Key Notes

### Completed (Step 1)
- ✅ Directory renamed: `genreral/` → `general/`
- ✅ All imports updated to reference `/modules/general`
- ✅ ESLint errors fixed

### To Do (Future Steps)
- Step 2: Contact backend API route at `/api/contact`
- Step 3: Metadata & SEO setup in `src/lib/metadata.ts`
- Step 4: Analytics & error tracking integration
- Step 5: GitHub Actions CI workflow in `.github/workflows/ci.yml`
- Add `.env.example` file for environment configuration

### Module Organization

**`src/modules/general/`**
- Shared UI components used across pages
- Layout wrapper for consistent structure
- Contact form, resume section, experience, footer, navbar

**`src/modules/home/`**
- Home page specific components
- Hero section with animated carousel
- Home layout wrapper

**`src/modules/projects/`**
- Projects page modules (currently empty)
- Ready for project listing/filtering components

### Component Libraries
- **Radix UI**: 40+ accessible component primitives
- **shadcn/ui**: Pre-built components on top of Radix UI
- **Next.js**: App router, image optimization, font optimization
- **Framer Motion**: Animations & micro-interactions
- **Recharts**: Data visualization
- **Tailwind CSS**: Utility-first styling
