import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCSS from 'unocss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  css:{
    preprocessorOptions: {
      less: {
        // additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.less')}";`,
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
