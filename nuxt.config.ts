import fs from 'fs'
import path from 'path'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: vuetify plugin type issue
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  plugins: ['~/plugins/loadJson.server.ts'],
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-04-03',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    'build:before': () => {
      const filePath = path.resolve(process.cwd(), 'task_json.txt')
      const jsonData = fs.readFileSync(filePath, 'utf-8')
      fs.writeFileSync(path.resolve(process.cwd(), 'static/data.json'), jsonData)
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: false,
        indent: 2,
        quotes: 'single',
      },
    },
  },
})
