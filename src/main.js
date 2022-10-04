import { createApp } from 'vue'
import App from './App.vue'
import router from '@/App.router.js'

import './assets/bootstrap.min.css'

createApp(App).use(router).mount('#app')
