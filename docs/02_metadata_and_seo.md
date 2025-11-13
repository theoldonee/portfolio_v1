# Metadata and SEO Setup

This file contains instructions for adding default SEO metadata, Open Graph, and structured data to your Next.js portfolio.

---

## Tasks

1. Create a central metadata configuration (`src/lib/metadata.ts`).
2. Ensure every page imports and uses it.
3. Add Open Graph and Twitter tags for better sharing previews.
4. Include JSON-LD structured data (Person and Project schema).

---

## Example Implementation

```ts
// src/lib/metadata.ts
export const siteMetadata = {
  title: "Your Name — Portfolio",
  description: "Developer Portfolio built with Next.js and Framer Motion.",
  url: "https://yourdomain.com",
  image: "/og-image.png",
  author: "Your Name",
  twitter: "@yourhandle",
};
```

Add this in `layout.tsx` or individual pages using Next.js Metadata API.

---

## Copilot Terminal Protocol

- Before adding or modifying files, Copilot must explain *what metadata files are being created* and *why*.
- Always ask permission before executing file or Git commands.
- Document all changes in `README.md` with timestamps.

---
