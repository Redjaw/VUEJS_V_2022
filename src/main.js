import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/bootstrap.min.css'
import { createPinia } from 'pinia'
import store from '@/App.store.js'

const pinia = createPinia()

createApp(App)
	.use(pinia)
	.use(store)
	.mount('#app')
