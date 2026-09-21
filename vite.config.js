import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Preact production aliases: ~3× smaller runtime than React, same API surface.
    // Same proven setup as the Gewinode Raven and Rendaven projects.
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  server: {
    port: 5193,
    strictPort: true,
  },
});
