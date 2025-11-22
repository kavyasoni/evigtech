# Kavya Soni - Portfolio Website

Personal portfolio and consulting website for technical consulting services.

🌐 **Live Site:** [GitHub Pages URL will be here]

## Directory Structure

This repository is organized for GitHub Pages deployment:

```
/                          # GitHub Pages serves from here
├── index.html            # Built production files
├── assets/               # Built JS/CSS bundles
├── favicon.svg           # Site favicon
├── robots.txt            # SEO configuration
└── code/                 # Source code (not served)
    ├── src/              # React application source
    ├── public/           # Static assets
    ├── package.json      # Dependencies
    ├── vite.config.ts    # Build configuration
    ├── CLAUDE.md         # Development documentation
    └── DEPLOYMENT.md     # Deployment guide
```

## Development

All development happens in the `/code` directory:

```bash
cd code
npm install
npm run dev          # Start dev server on http://localhost:5173
npm run build        # Build to parent directory (root)
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

## Deployment

This site is configured for GitHub Pages:

1. Source code is in `/code`
2. Build output goes to root (`/`)
3. GitHub Pages serves the root directory
4. After building, commit both source and built files

See `/code/DEPLOYMENT.md` for detailed deployment instructions.

## Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Hosting:** GitHub Pages

## License

© 2025 Kavya Soni. All rights reserved.
