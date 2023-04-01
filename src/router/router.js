import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';
import Manage from '../views/Manage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/products',
    name: 'manage',
    component: Manage 
    }
  

  
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default  router