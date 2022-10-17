import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')