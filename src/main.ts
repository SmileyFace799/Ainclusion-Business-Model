import { createApp } from 'vue'
import { router } from './router';
import { Button, Divider, Message, Panel } from 'primevue'
import './style.css'
import 'primeicons/primeicons.css';
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from "primevue/config"

createApp(App)
.use(router)
.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
            cssLayer: false
        }
    }
})
.component('Button', Button)
.component('Divider', Divider)
.component('Message', Message)
.component('Panel', Panel)
.mount('#app')
