import { defineConfig } from 'vite';

export default defineConfig({
  // Pastikan ini sama persis dengan nama repo di GitHub
  base: '/VirtualTour-sandbox/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
