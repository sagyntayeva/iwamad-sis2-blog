import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: '/iwamad-sis2-blog/', // repo name for GitHub Pages
  plugins: [react()],
  build: { outDir: 'docs' },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
