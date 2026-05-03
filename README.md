# CES — Computer Engineering Society

Cankaya University Computer Engineering Society website, built with React, TypeScript and Vite.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- Vanilla CSS

## Pages

- **Ana Sayfa** — Hero section, features, CTA
- **Hakkimizda** — About, stats, mission/vision
- **Haberler** — News and announcements
- **Iletisim** — Contact info and social media links

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5173/`.

## Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Deployment

Configured for Azure Static Web Apps. SPA routing is handled via `staticwebapp.config.json`.

Azure settings:
- App location: `/`
- Output location: `dist`
