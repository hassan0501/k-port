import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from external networks
    port: 5173, // Make sure this matches your actual port
    strictPort: true,
    allowedHosts: ['.ngrok-free.app'], // Allow ngrok subdomains
  },
  plugins: [
    react(),
    tailwindcss()

  ],
});
