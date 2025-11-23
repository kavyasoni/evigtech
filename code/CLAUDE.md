# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a company website for EvigTech, a technical consulting company specializing in startup product development. Built as a single-page application (SPA) using React + TypeScript + Vite with Tailwind CSS for styling.

## Technology Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+
- **Styling**: Tailwind CSS 3.4+ with PostCSS and Autoprefixer
- **Icons**: Lucide React
- **Backend**: Supabase (client library included, though not currently used in main app)
- **Linting**: ESLint 9+ with TypeScript ESLint

## Development Commands

**Important:** All commands run from repository root (working directory).

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to ../ for GitHub Pages)
npm run build

# Preview production build (http://localhost:4173)
npm run preview

# Lint and type checking
npm run lint         # ESLint with TypeScript rules
npm run typecheck    # TypeScript compiler check (no emit)
```

## Architecture

### Application Structure

The application is a simple single-file React component architecture:

- `src/main.tsx` - Application entry point, renders App component with StrictMode
- `src/App.tsx` - Main component containing the entire single-page website
- `src/index.css` - Tailwind CSS imports only
- `index.html` - HTML entry point

### App Component Architecture

The `App.tsx` file contains the entire application in a single component with sections:

1. **Navigation** - Fixed top nav with EvigTech logo image and mobile menu toggle
2. **Hero** - Main landing with tagline and CTA
3. **About** - Company description with statistics grid (10+ years, 50+ projects, etc.)
4. **Expertise** - Six expertise cards in grid layout
5. **Approach** - Four-step process visualization
6. **Contact** - Email CTA section
7. **Footer** - Copyright notice

Key implementation details:
- `useState` for mobile menu toggle
- `scrollToSection` function for smooth scroll navigation
- Lucide React icons (Menu, X, Mail, ArrowRight, Code, Database, Brain, Layers, Server, Monitor)
- Logo image at `/evigtech_logo.png` (120×32px) in navigation

### Build Configuration

**Critical: GitHub Pages Build Setup**

Vite is configured (vite.config.ts) to build to parent directory for GitHub Pages:
- `base: './'` - Relative paths for assets
- `outDir: '../'` - Build output to repository root
- `emptyOutDir: false` - Preserves `.git`, `code/`, etc. in parent dir
- `exclude: ['lucide-react']` - Prevents bundling issues

TypeScript: Strict mode with ES2020 target, automatic JSX runtime

### Repository Structure (GitHub Pages)

```
/repo-root/                  # GitHub Pages serves from root
├── index.html              # Built HTML (generated - DO NOT edit)
├── assets/                 # Built bundles (generated)
├── evigtech_logo.png       # Company logo
├── favicon.png             # Favicon and icons
└── code/                   # SOURCE CODE (working directory)
    ├── src/App.tsx         # Main single-file component
    ├── public/             # Static assets (copied to root)
    └── vite.config.ts      # Builds to ../
```

**Critical Rules:**
- Working directory is `/code` (repository root in development)
- Edit source files in `code/src/`, never root `index.html` or `assets/`
- `npm run build` outputs to `../` (repository root for GitHub Pages)
- Commit both source (`code/`) AND built files (root) for deployment

## Styling & Design System

Tailwind CSS utility classes exclusively. Key patterns:

**Color Palette:** Slate (50-900) grays, white backgrounds
**Breakpoints:** Mobile-first with `md:` (768px) and `lg:` (1024px)

Design patterns:
- Gradient text: `bg-gradient-to-r bg-clip-text text-transparent`
- Glass-morphism nav: `backdrop-blur-md` with opacity
- Hover effects: `hover:scale-110 transition-transform` on icons
- Container: `max-w-7xl mx-auto` for content width
- Sections: Alternating white/gradient backgrounds

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

### Deployment Workflow

**GitHub Pages deployment process:**

```bash
npm run build        # Build to ../ (repository root)
npm run preview      # Test at http://localhost:4173
git add -A           # Add source and built files
git commit -m "..."
git push             # Deploy to GitHub Pages
```

Built files (root `index.html`, `assets/`) must be committed for GitHub Pages.

See `DEPLOYMENT.md` for pre-deployment checklist and alternative hosting options.

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

### Company Branding

Current EvigTech branding assets:
- Logo: `/evigtech_logo.png` (used in navigation)
- Email: `contact@evigtech.com`
- Domain: `evigtech.com` (in meta tags)
- Favicon set: Multiple sizes in root (png, ico)
- Footer: "© 2020 EvigTech Private Limited"

Update these in `src/App.tsx` and `index.html` if branding changes.
