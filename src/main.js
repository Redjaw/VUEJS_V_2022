import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/bootstrap.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import interceptor from './interceptor.js'
interceptor()

createApp(App)
	.use(VueAxios, axios)
	.mount('#app')
