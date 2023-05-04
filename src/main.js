import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'
import store from './store'

//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css'

//core
import 'primevue/resources/primevue.min.css'

//icons
import 'primeicons/primeicons.css'

//flex
import 'primeflex/primeflex.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.mount('#app')
