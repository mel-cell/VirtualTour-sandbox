import { defineConfig } from 'vite';

export default defineConfig({
  // Vercel/Netlify biasanya pakai root path, jadi '/' lebih aman
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
