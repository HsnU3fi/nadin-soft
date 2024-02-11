import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import WeatherView from "../views/weather/WeatherView.vue";
import ProfileView from "../views/profile/ProfileView.vue";
import TodoView from "../views/todo/TodoView.vue";
import SplashView from "../views/splash/SplashView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },

  ]
})

export default router
