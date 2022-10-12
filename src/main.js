import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'    //core css
import 'primeicons/primeicons.css'  

import './assets/bootstrap.min.css'

import i18n from './App.i18n'

createApp(App)
    .use(i18n)
    .use(PrimeVue)
    .mount('#app')
