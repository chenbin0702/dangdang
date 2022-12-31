import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
console.log("环境变量",import.meta.env);

createApp(App).mount('#app')
