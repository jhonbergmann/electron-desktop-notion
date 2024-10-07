import {defineConfig, externalizeDepsPlugin} from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import {resolve} from 'path'

const tsconfigPaths = tsconfigPathsPlugin({
  projects: [resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: resolve('src/renderer/tailwind.config.js'),
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [tsconfigPaths, react()],
  },
})
