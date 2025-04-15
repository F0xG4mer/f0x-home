import './assets/main.css'
import './assets/images.css'

import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'



const app = createApp(App)


app.use(router)
app.use(MotionPlugin)

app.mount('#app')