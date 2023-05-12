import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
  },
});