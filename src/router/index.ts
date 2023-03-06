import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import UserCompare from '@/components/user-compare/user-compare.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    'path': '/',
    'name': 'UserCompare',
    'component': UserCompare,
  },
];

const router = new VueRouter({
  'mode': 'history',
  'base': process.env.BASE_URL,
  'routes': routes
});

export default router;
