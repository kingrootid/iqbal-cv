# Moch Iqbal Ar Rasyid — Portfolio

Portfolio / CV website built with **Next.js 16 App Router, React 19, TypeScript, and custom CSS**. Content is based on the attached two-page CV. The original PDF is available for download from the website.

## Run locally

Requires Node.js >= 20.9 (22 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

Deploy to Vercel, a Node.js server, or another Next.js-capable host. HTTPS and a custom domain can be configured at your hosting provider.

## Customize

- Resume data and bilingual copy: `src/data/resume.ts`
- Page sections and interactions: `src/components/portfolio.tsx`
- Colors and responsive layout: `src/app/globals.css`
- SEO / social preview metadata: `src/app/layout.tsx`
- Social preview: `public/og-image.png`
- Original CV: `public/moch-iqbal-ar-rasyid-cv.pdf`

## Features

- Responsive single-page portfolio with animated decorative hero.
- English / Bahasa Indonesia toggle.
- Career timeline, grouped skill filters, education, and contact.
- Accessible navigation, mobile menu, reduced-motion support.
- Email copy action, `mailto:` link, GitHub link, original CV download.
- Basic SEO, JSON-LD Person schema, Open Graph preview.

No portfolio projects, website URLs, numerical achievement claims, or social profiles were invented beyond the information contained in the CV. Update content as desired before publishing.
