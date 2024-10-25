import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VTreeview } from 'vuetify/labs/VTreeview'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VTreeview,
    },
  })
  app.vueApp.use(vuetify)
})
