import type { Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: 'test-page-1',
    action: async () => {
      await import('../pages/page-1.js');
    },
  },
  {
    path: '/about',
    name: 'about',
    component: 'test-page-2',
    action: async () => {
      await import('../pages/page-2.js');
    },
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    action: async () => {
      await import('../pages/page-not-found.js');
    },
  },
];
