import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for PrimeHomes Real Estate
// - React fast refresh
// - Path alias '@' -> /src for cleaner imports
// - Manual chunk splitting for better caching/performance
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          swiper: ['swiper'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
