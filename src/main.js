import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { useAccordion } from "vue3-rich-accordion";
import i18n from "./i18n"

createApp(App).use(router).use(useAccordion).use(i18n).mount('#app')
