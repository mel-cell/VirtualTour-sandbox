import { defineConfig } from 'vite';

export default defineConfig({
  // Gunakan './' agar bisa jalan di sub-folder manapun di GitHub Pages
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
