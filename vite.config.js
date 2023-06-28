/* local環境で使用するためコメントアウト /*
// import react from '@vitejs/plugin-react'; 
// import { defineConfig } from 'vite'
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')
// /**
//  * https://vitejs.dev/config/
//  * @type {import('vite').UserConfig}
//  */
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "dev-frontend-five.vercel.app", // dev環境ではlocalhost
//     port: 3000,
//     strictPort: false,
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})