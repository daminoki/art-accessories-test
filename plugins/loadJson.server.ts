import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(__filename)

export default defineNuxtPlugin((nuxtApp) => {
  const filePath = path.resolve(__dirname, '../task_json.txt')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  nuxtApp.hook('app:created', () => {
    nuxtApp.provide('catalogData', useState('catalogData', () => data))
  })
})
