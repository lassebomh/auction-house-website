import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [
    svelte(),
    WindiCSS(),
  ],
  base: "/auction-house-website/"
})
