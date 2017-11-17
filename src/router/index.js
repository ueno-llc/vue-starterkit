import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from '@/layouts/Default';
import Home from '@/pages/home';
import About from '@/pages/about';
import NotFound from '@/pages/not-found';

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
        }, {
          path: '/about',
          name: 'About',
          component: About,
        },
      ],
    }, {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
  mode: 'history',
});
