import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetAlert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetAlert2)
app.mount('#app')
