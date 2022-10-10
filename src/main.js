import { createApp } from 'vue'
import App from './App.vue'

import './assets/bootstrap.min.css'
import Dettaglio from '@/components/Dettaglio.vue'

createApp(App)
    .component('Dettaglio', Dettaglio)
    .mount('#app')
