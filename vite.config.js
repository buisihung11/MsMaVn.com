import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'SVN-Gotham',
            local: 'SVN-Gotham',
            src: './src/assets/fonts/*.otf',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'build',
  },
})
