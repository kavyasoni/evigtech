import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Build output goes to parent directory (../) for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../',
    emptyOutDir: false, // Don't empty parent dir (keeps .git, code/, etc)
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
