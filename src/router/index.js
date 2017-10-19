import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from '@/layouts/Default';
import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
      ],
    },
  ],
  mode: 'history',
});
