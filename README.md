# Personal Website (Vite + React)

This project is a Figma-generated React/Vite site, refactored for local development and Vercel deployment.

## Requirements

- Node.js 20+ (`.nvmrc` is set to `20`)
- npm

## Local development

```bash
nvm use
npm install
npm run dev
```

App runs on `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

Build output is generated in `build/`.

## Deploy to Vercel

`vercel.json` is configured for this Vite app and `build/` output.

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

If this repo is connected to Vercel via Git, just push to your production branch and Vercel will use:

- Install: `npm install`
- Build: `npm run build`
- Output directory: `build`
