import { createApp } from 'vue'
import App from './App.vue'
import './assets/bootstrap.min.css'
import ValidatorPlugin from '@/plugins/validatorPlugin.js'


createApp(App)
    .use(ValidatorPlugin)
    .mount('#app')
