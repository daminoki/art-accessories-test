import fs from 'fs'
import path from 'path'

export default defineNuxtPlugin((nuxtApp) => {
  const filePath = path.resolve(process.cwd(), 'public/task_json.txt')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  nuxtApp.hook('app:created', () => {
    nuxtApp.provide('catalogData', useState('catalogData', () => data))
  })
})
