import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
