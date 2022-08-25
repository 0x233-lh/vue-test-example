import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 引入 antd vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
app.use(Antd)



app.mount('#app')
