import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from '../src/store/index';
import router from './router/router';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
