import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use repository subpath for GitHub Pages
  base: '/Samastham-Website/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 5173,
  },
});
