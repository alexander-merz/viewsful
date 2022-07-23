import { defineConfig } from 'vite'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'packages',
      formats: ['es', 'umd'],
      name,
    },
  },
})
