import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import * as Components from '@/components'
import '@/index.css'

const app = createApp(App)

app.use(router)

for (const componentName in Components) {
  const component = Components[componentName]

  app.component(component.name, component)
}

router.isReady().then(app.mount('#app'))
