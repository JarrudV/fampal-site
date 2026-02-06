# FamPal Marketing Site

This is the front-end marketing website for FamPal, built with React, Vite, and Tailwind CSS.

## Development

1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Build for production: `npm run build`

## Project Structure

- `client/src/pages`: Main pages (Home, Pricing, FAQ, Support, Legal)
- `client/src/components`: UI components
  - `layout.tsx`: Main layout wrapper (Header, Footer)
  - `phone-mockup.tsx`: CSS-only phone frame animation
  - `ui/`: Shared UI components (Button, Accordion, etc.)
- `client/src/index.css`: Tailwind theme and custom styles

## Deployment to Firebase Hosting

This project is a Single Page Application (SPA). When deploying to Firebase Hosting, you need to configure rewrites to serve `index.html` for all routes.

**Build Command:**
```bash
npm run build
```

**Output Directory:**
`dist/public`

**firebase.json Configuration:**
```json
{
  "hosting": {
    "public": "dist/public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
# fampal-site
