This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Change Log

### Interests Page Feature (2025-11-13 15:00)

- ✅ Created interactive Interests page at `/interests`
- ✅ Built data structure with 5 interests:
  - Games 🎮 (Blue), Art 🎨 (Pink), Music 🎵 (Green), Tech 💻 (Purple), Writing ✍️ (Orange)
  - Each with icon, description, and details
- ✅ Implemented InterestWheel component:
  - Rotating wheel with Framer Motion animations
  - Click/arrow key navigation
  - Animated center circle showing current interest
  - Responsive dot indicators
- ✅ Implemented InterestSections component:
  - Full-screen sections with gradient backgrounds
  - Animated detail cards with checkmarks
  - Image gallery placeholders
  - Call-to-action "Get in Touch" button
- ✅ Main page layout with state management
- ✅ Added navigation links:
  - "More About Me" button in home page → `/interests`
  - "Interests" nav link in navbar
  - "Get in Touch" CTA in interests footer → `/#Contact`
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ **Checkpoint:** Build succeeded, all interactions working

### Step 1: General Hygiene & Structure (2025-11-13 14:25)

- ✅ Renamed `src/modules/genreral/` → `src/modules/general/` (fixed typo)
- ✅ Updated 5 import statements across:
  - `src/app/(home)/page.tsx` (4 imports)
  - `src/modules/home/ui/layout/home-layout.tsx` (1 import)
- ✅ Fixed ESLint linting errors:
  - Escaped unescaped apostrophes in contact.tsx and hero/index.tsx
  - Changed `var` to `const` in social-media.tsx
- ✅ Updated `docs/01_general_instructions.md` to remove index.ts requirement
- ✅ **Checkpoint:** Build succeeded with no import errors
