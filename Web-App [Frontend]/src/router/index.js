import Vue from 'vue'
import VueRouter from 'vue-router'
import {getAuth} from 'firebase/auth'
import {app} from "../firebase"

import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import UserProfile from '../views/UserProfile'
import AddUser from '../views/AddUser'


Vue.use(VueRouter)

const auth = getAuth(app)

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (user) {
    next();
  } else {
    next('/login');
  }
};

const routes = [
  {
    path: "/",
    name: 'HomeView',
    component: HomeView,
    beforeEnter: requireAuth,
  },
  {
    path: "/profile",
    name: 'UserProfile',
    component: UserProfile,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: 'LoginView',
    component: LoginView,
  },
  {
  path: "/addUser",
  name: 'AddUser',
  component: AddUser,
  
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
