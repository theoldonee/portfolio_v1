# Contact Form Backend Setup

This guide outlines how to securely handle contact form submissions in your Next.js app.

---

## Objective

Add a backend to process contact form data securely (email sending, spam protection).

---

## Steps

1. Create a Next.js API route `/api/contact`.
2. Validate inputs on both client and server.
3. Integrate reCAPTCHA or a honeypot field to prevent spam.
4. Use a mail provider like SendGrid, Resend, or SMTP.

---

## Example

```ts
// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Example: Use Resend, SendGrid, or nodemailer
  try {
    // await sendMail({ from: email, subject: `New message from ${name}`, text: message });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
}
```

---

## Copilot Terminal Protocol

- Ask for permission before installing dependencies or modifying environment files.
- Log all changes in `README.md`.

---
