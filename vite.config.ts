import { defineConfig } from 'vite';

export default defineConfig({
  // Gunakan './' agar path selalu relatif terhadap index.html
  base: './', 
  build: {
    // Kita ganti ke folder 'docs' agar bisa dideploy manual via GitHub Pages settings
    outDir: 'docs',
    assetsDir: 'assets',
  },
});
