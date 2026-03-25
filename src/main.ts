import './style.css'
import 'primeicons/primeicons.css';
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from "primevue/config"
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { router } from './router';
import { Button, Divider, Message, Panel, Popover, ToggleSwitch } from 'primevue'

createApp(App)
.use(router)
.use(createPinia())
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
.component('Popover', Popover)
.component('ToggleSwitch', ToggleSwitch)
.mount('#app')
