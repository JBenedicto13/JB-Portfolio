import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        manualChunks: {
          gtm: ['react-gtm-module']
        }
      }
    },
    commonjsOptions: {
      include: [/react-gtm-module/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['react-gtm-module']
  },
  define: {
    global: 'globalThis'
  }
})
