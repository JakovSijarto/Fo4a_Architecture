import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { useAccordion } from "vue3-rich-accordion";

createApp(App).use(router).use(useAccordion).mount('#app')
