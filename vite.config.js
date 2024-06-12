import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Customize the output directory
    rollupOptions: {
      // Customize Rollup options if needed
    }
  }
})
