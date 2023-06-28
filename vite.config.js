import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", 
    port: 3000,
    strictPort: false,
  },
});