import vue from 'vue';
import store from '../../store/index';
import router from '../index';

router.beforeEach((to, from, next) => {
  
  next();

  // if(typeof(store.getters.isAuthenticated) === 'undefined'){
  //   store.dispatch('refreshAuthStatus');
  // }

  // const isAuthenticated = store.getters.isAuthenticated;
  
  // const requiresAuth = to.matched.some( record => record.meta.requiresAuth );
  // if(requiresAuth && !isAuthenticated){
  //   next({
  //     path:'/login',
  //     query: { redirect: to.fullPath }
  //   });
  // } else {
  //   next();
  // }
});