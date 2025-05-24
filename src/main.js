import './assets/main.css'
import './assets/images.css'
import './assets/footer.css'
import './assets/logo.css'
import './assets/navigation.css'

import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaArrowDown, FaYoutube, FaDiscord, FaTwitter, FaInstagram } from "oh-vue-icons/icons";

addIcons(FaArrowDown, FaYoutube, FaDiscord, FaTwitter, FaInstagram);

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(MotionPlugin)
app.use(router)

app.mount('#app')