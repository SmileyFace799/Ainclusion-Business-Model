import './style.css'
import 'primeicons/primeicons.css';
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from "primevue/config"
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { router } from './router';

// Component imports
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Panel from 'primevue/panel';
import Popover from 'primevue/popover';
import ToggleSwitch from 'primevue/toggleswitch';

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
.component('Panel', Panel)
.component('Popover', Popover)
.component('ToggleSwitch', ToggleSwitch)
.mount('#app')
