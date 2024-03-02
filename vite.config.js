import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
///<reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.png"],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
