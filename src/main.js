import './assets/main.css'
import './assets/variables.css'
import texts from './data/texts.json'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$texts = texts

app.mount('#app')