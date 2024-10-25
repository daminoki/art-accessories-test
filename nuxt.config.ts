import fs from 'fs'
import path from 'path'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  plugins: ['~/plugins/loadJson.server.ts'],
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  compatibilityDate: '2024-04-03',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    'build:before': () => {
      const filePath = path.resolve(__dirname, 'task_json.txt')
      const jsonData = fs.readFileSync(filePath, 'utf-8')
      fs.writeFileSync(path.resolve(__dirname, 'static/data.json'), jsonData)
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
