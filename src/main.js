import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()

createApp(App).mount('#app')
