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
    component: AppLoginView
    },
    {
      path: '/signup',
    
      component: AppSignupView
    },
    {
      path: '/dashboard',
      component: AppDashboardView,
      
    }
  ]
})


/**beforeEach checks before every route that store.restored data is come or not 
 * local forage take time to restore data store.restored tells us that data is restored
*/

router.beforeEach(async (to, from, next) => {
  // Ensure store has finished restoring before checking authentication status
  await store.restored;

  /** this line calls the checkAuth action from vuex auth.js module
   * checkAuth action checks if any user is authenticated and updates the isAuthenticated state accordingly.
   */
  store.dispatch('checkAuth')
  /**
   * Declares a constant variable isAuthenticated and assigns it the value from the getter.
   */
  const isAuthenticated = store.getters.isAuthenticated;
  /**
   * this if statement checks if user navigating to dashboard and 
   * user is not authenticated then it redirect to signup page
   * else if user is registered then it redirect to dashboard
   */
  if(to.path === '/dashboard' && !isAuthenticated){
    next()
  }else{
  next();
  }
});

export default router
