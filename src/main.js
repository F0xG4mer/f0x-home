import './assets/main.css'
import './assets/images.css'
import './assets/footer.css'

import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaArrowDown } from "oh-vue-icons/icons";

addIcons(FaArrowDown);

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(MotionPlugin)
app.use(router)

app.mount('#app')