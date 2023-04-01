import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Category from '../views/Category.vue';
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
    name: 'products',
    component: Product 
    },
    {
      path: '/categories',
    name: 'category',
    component: Category  
    }
  

  
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default  router