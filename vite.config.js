import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  base:"/psychic-couscous/",
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true
  }
})
