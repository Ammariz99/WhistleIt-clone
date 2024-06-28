import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import AppLoginView from '@/views/layout/AppLoginView.vue'
import AppSignupView from '@/views/layout/AppSignupView.vue'
import AppDashboardView from '@/views/layout/AppDashboardView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
    path: '/login',
    // name: 'LoginView',
    component: AppLoginView
    },
    {
      path: '/signup',
      // name: 'SignupView',
      component: AppSignupView
    },
    {
      path: '/dashboard',
      // name: 'DashboardView',
      component: AppDashboardView,
      // meta: {requiresAuth: true}
    }
  ]
})


/**beforeEach checks before every route that store.restored data is come or not 
 * local forage take time to restore data store.restored tells us that data is restored
*/

router.beforeEach(async (to, from, next) => {
  // Ensure store has finished restoring before checking authentication status
  await store.restored;
  next();

  // const isAuthenticated = store.getters['isAuthenticated'];

  // // Check if the route requires authentication and user is not authenticated
  // if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
  //   // Redirect to login page or any other route
  //   next('/login');
  // } else {
  //   // Continue to the requested route
  //   next();
  // }
});

export default router
