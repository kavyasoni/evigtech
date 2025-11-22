# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/consulting website for a technical consultant specializing in startup product development. Built as a single-page application (SPA) using React + TypeScript + Vite with Tailwind CSS for styling.

## Technology Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+
- **Styling**: Tailwind CSS 3.4+ with PostCSS and Autoprefixer
- **Icons**: Lucide React
- **Backend**: Supabase (client library included, though not currently used in main app)
- **Linting**: ESLint 9+ with TypeScript ESLint

## Development Commands

**Important:** All development commands must be run from the `/code` directory.

```bash
cd code  # Navigate to source code directory

# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production (outputs to parent directory ../ for GitHub Pages)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Type check without emitting files
npm run typecheck
```

## Architecture

### Application Structure

The application is a simple single-file React component architecture:

- `src/main.tsx` - Application entry point, renders App component with StrictMode
- `src/App.tsx` - Main component containing the entire single-page website
- `src/index.css` - Tailwind CSS imports only
- `index.html` - HTML entry point

### App Component Architecture

The `App.tsx` file (src/App.tsx:1) contains the entire application in a single component with the following sections:

1. **Skip Link** (src/App.tsx:15-17) - Accessibility skip-to-content link
2. **Navigation** (src/App.tsx:18-54) - Fixed top navigation with mobile menu toggle
3. **Hero Section** (src/App.tsx:56-76) - Main landing area with CTA
4. **About Section** (src/App.tsx:78-114) - Biography and statistics grid
5. **Expertise Section** (src/App.tsx:116-191) - Six expertise cards (development, full-stack, backend, frontend, data science, AI/ML)
6. **Approach Section** (src/App.tsx:193-242) - Four-step process visualization
7. **Contact Section** (src/App.tsx:244-288) - Contact CTA with email and social links
8. **Footer** (src/App.tsx:290-294) - Copyright notice

The component uses:
- `useState` for mobile menu toggle state
- `scrollToSection` function for smooth scrolling navigation
- Lucide React icons throughout (Menu, X, Mail, Linkedin, Github, ArrowRight, Code, Database, Brain, Layers, Server, Monitor)

### TypeScript Configuration

The project uses strict TypeScript settings (tsconfig.app.json:1):
- Target: ES2020
- Module: ESNext with bundler resolution
- Strict mode enabled
- noUnusedLocals and noUnusedParameters enabled
- JSX: react-jsx (automatic runtime)

### Build Configuration

Vite configuration (vite.config.ts:1):
- Base path set to `./` for flexible deployment
- **Output directory:** `../` (parent directory) for GitHub Pages
- **emptyOutDir:** `false` to preserve `.git`, `code/`, etc. in parent directory
- Lucide-react excluded from optimization (to prevent bundling issues)

### Repository Structure

This repository is organized for GitHub Pages deployment:

```
/repo-root/                  # GitHub Pages serves from here
├── index.html              # Built HTML (DO NOT edit directly)
├── assets/                 # Built JS/CSS (generated)
├── favicon.svg             # Built favicon
├── robots.txt              # Built robots.txt
├── README.md               # Repository overview
└── code/                   # SOURCE CODE DIRECTORY
    ├── src/                # React application source
    ├── public/             # Static assets (copied to root on build)
    ├── CLAUDE.md           # This file
    ├── DEPLOYMENT.md       # Deployment guide
    └── vite.config.ts      # Configured to build to ../
```

**Important:**
- All source code edits happen in `/code` directory
- `npm run build` outputs to parent directory (`../`)
- Root files are built artifacts for GitHub Pages
- Never edit `index.html` or `assets/` in root directly

## Styling Approach

This project uses Tailwind CSS utility classes exclusively. The design system follows:

- **Color Palette**: Slate (50-900) for grays, white backgrounds
- **Spacing**: Consistent use of Tailwind spacing scale
- **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints
- **Effects**: Gradients, backdrop blur, hover transitions, shadows
- **Components**: Card-based layouts with rounded borders and subtle shadows

Key design patterns:
- Gradient text using `bg-gradient-to-r bg-clip-text text-transparent`
- Glass-morphism navigation with `backdrop-blur-md`
- Hover scale effects on icons and cards
- Consistent padding and spacing rhythm

## Notes for Development

### Adding New Sections

When adding new sections to the website:
1. Add section with unique `id` attribute for scroll navigation
2. Update navigation buttons to include the new section
3. Maintain consistent section structure: outer section with padding, inner max-w-7xl container
4. Follow existing color scheme (slate palette, white/gradient backgrounds)

### Component Extraction

If the application grows, consider extracting sections from App.tsx into separate components:
- Navigation → `components/Navigation.tsx`
- Hero → `components/Hero.tsx`
- Expertise cards → `components/ExpertiseCard.tsx` (with data-driven approach)
- Approach steps → `components/ApproachStep.tsx`
- Contact → `components/Contact.tsx`

### Supabase Integration

The Supabase client is installed but not currently integrated. If adding backend features (contact form, analytics, CMS), initialize Supabase client in a separate file (e.g., `src/lib/supabase.ts`).

### Deployment

**GitHub Pages Setup:**

The build outputs to parent directory (`../`) with relative paths (`base: './'`), configured specifically for GitHub Pages:

1. Source code is in `/code` directory
2. Run `cd code && npm run build` to build to root
3. Built files go to repository root (index.html, assets/, etc.)
4. GitHub Pages serves from repository root
5. Commit both source code AND built files

**Build Process:**
```bash
cd code
npm run build        # Outputs to ../
npm run preview      # Test at http://localhost:4173
cd ..
git add .            # Add both source and built files
git commit -m "..."
git push
```

**Alternative Hosting:**
The built files can also be deployed to:
- Netlify (drag & drop root directory)
- Vercel (configure build: `cd code && npm run build`, output: `./`)
- Any static hosting

See `DEPLOYMENT.md` for comprehensive deployment instructions and pre-deployment checklist.

## Production Readiness

The codebase includes several production-ready features:

### SEO & Meta Tags (index.html:1)
- Comprehensive meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card tags
- Proper page title and description

### Accessibility
- Skip-to-content link for keyboard navigation (src/App.tsx:16)
- Semantic HTML with proper ARIA labels and roles
- Mobile menu has aria-expanded and aria-label attributes (src/App.tsx:32-33)
- All interactive icons have aria-labels (src/App.tsx:279)
- Proper heading hierarchy (h1, h2, h3)
- Main landmark wraps primary content (src/App.tsx:55)

### Performance
- Optimized build size: ~54KB gzipped total
- Code splitting enabled
- Tailwind CSS purged of unused styles
- Vite optimizations applied

### Files to Update Before Production
1. **Contact Information** (src/App.tsx:256): Update email from contact@kavyasoni.com
2. **Social Links** (src/App.tsx:263, 275): Verify LinkedIn and GitHub URLs
3. **Meta Tags** (index.html:16): Update og:url with actual domain
4. **Favicon** (public/favicon.svg): Replace with professional logo/icon (basic SVG provided)
5. **OG Images**: Add og:image and twitter:image URLs after creating social media preview images

### Security
- All external links use `rel="noopener noreferrer"`
- No sensitive data in client-side code
- Environment variables template provided (.env.example)
- Note: 2 moderate dev-only vulnerabilities remain in esbuild (see DEPLOYMENT.md)
