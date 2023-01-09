import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    };
  }
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    return { path: '/' };
  }
});

export default router;
