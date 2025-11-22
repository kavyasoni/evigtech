# Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, ensure you have:

1. **Updated Personal Information**:
   - [ ] Email address in `src/App.tsx` (currently: contact@kavyasoni.com)
   - [ ] LinkedIn URL in `src/App.tsx` (currently: https://linkedin.com/in/kavyasoni)
   - [ ] GitHub URL in `src/App.tsx` (currently: https://github.com/kavyasoni)
   - [ ] Website URL in `index.html` Open Graph tags (currently: https://kavyasoni.com)

2. **SEO & Meta Tags**:
   - [ ] Add Open Graph image (`og:image` meta tag in `index.html`)
   - [ ] Add Twitter card image (`twitter:image` meta tag in `index.html`)
   - [ ] Create and upload favicon to `/public/favicon.svg` (basic one provided)
   - [ ] Update sitemap URL in `/public/robots.txt` if needed

3. **Testing**:
   - [ ] Run `npm run typecheck` (passes)
   - [ ] Run `npm run lint` (passes)
   - [ ] Run `npm run build` (successful)
   - [ ] Test production build with `npm run preview`
   - [ ] Test on mobile devices and different browsers

## Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project root
3. Follow prompts to deploy

Or connect your GitHub repository to Vercel for automatic deployments.

### Option 2: Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy --prod`
3. Point to the `dist` directory when prompted

Or drag and drop the `dist` folder to Netlify's web interface.

### Option 3: GitHub Pages

1. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
2. Install: `npm i -D gh-pages`
3. Update `vite.config.ts` base path to your repo name
4. Run: `npm run deploy`

### Option 4: Traditional Hosting

Upload the contents of the `dist/` directory to your web server.

## Environment Variables

If you need environment variables (e.g., for Supabase, analytics):

1. Copy `.env.example` to `.env`
2. Fill in your values
3. Ensure `.env` is in `.gitignore` (already configured)
4. Add environment variables to your hosting platform

## Post-Deployment

1. **Test the live site**: Verify all links, navigation, and responsive design
2. **Submit to search engines**: Submit sitemap to Google Search Console
3. **Monitor performance**: Use Lighthouse or PageSpeed Insights
4. **Analytics** (optional): Add Google Analytics or Plausible tracking

## Performance Optimization

The build is already optimized with:
- Code splitting
- Minification
- Tree shaking
- CSS optimization with Tailwind CSS purge

Current build size (gzipped):
- HTML: ~0.64 KB
- CSS: ~3.31 KB
- JS: ~50.47 KB
- **Total**: ~54 KB (excellent for initial load)

## Security Notes

- No sensitive data in client-side code
- All external links use `rel="noopener noreferrer"`
- HTTPS recommended for deployment (provided by most hosting platforms)
- No backend secrets exposed (Supabase keys should be environment variables if used)

## Remaining Security Vulnerabilities

The project has 2 moderate severity vulnerabilities in development dependencies (esbuild/vite):
- These affect only the development server, not production builds
- The vulnerability allows requests to the dev server (not applicable in production)
- To address, upgrade to Vite 7+ (breaking changes may apply)

## Support

For issues or questions about deployment, consult:
- Vite documentation: https://vitejs.dev/guide/static-deploy.html
- Your hosting provider's documentation
