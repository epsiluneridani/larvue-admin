import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: '/app/home',
        component: () => import('../views/home.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/app/404',
        component: {
            template: "<div class='text-center'><h1>404</h1><p>Man! You came out from nowhere?</p></div>",
        }
    },
    {
        path: '/app/*',
        redirect: '/app/404'
    }
  ]
});
