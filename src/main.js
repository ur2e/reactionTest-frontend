import { createApp } from 'vue'
import App from './App.vue'
//router(페이지이동)을 추가합니다
import router from './router'
import axios from 'axios'

const app = createApp(App).use(router)
axios.defaults.baseURL = "http://localhost:8080";
app.config.globalProperties.axios = axios;

app.mount('#app')
