import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/bootstrap.min.css'
import store from '@/App.store.js'

createApp(App)
	.use(store)
	.mount('#app')
