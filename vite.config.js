import { resolve } from 'path'
import { defineConfig } from 'vite'
import libCss from 'vite-plugin-libcss'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libCss()
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'VueResponsiveTable',
      fileName: 'vue-responsive-table'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
