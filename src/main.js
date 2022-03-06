import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import store from './store/vuexIndex'


let app = createApp(App)
app.component("v-select", vSelect)
app.use(store)
app.mount('#app')
