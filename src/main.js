import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Image, Popup } from 'vant'
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Image);
app.use(Popup);

app.mount('#app')
