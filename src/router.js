import Vue from "vue";
import VueRouter from "vue-router";
import AuthRequired from "./utils/AuthRequired";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/start',
  //   component: () => import('./views/app'),
  //   redirect: '/app/piaf',
  //   beforeEnter: AuthRequired,
  //   children: [
  //     {
  //       path: 'app/piaf',
  //       component: () => import( './views/app/piaf'),
  //       redirect: '/app/piaf/start',
  //       children: [
  //         { path: 'start', component: () => import('./views/app/piaf/Start') }
  //       ]
  //     },
  //   ]
  // },
  { path: '/error', component: () => import( './views/Error') },
  {
    path: '/user',
    component: () => import( './views/user'),
    redirect: '/user/Register',
    children: [
      { path: 'register', component: () => import( './views/user/Register') },
      // { path: 'login', component: () => import( './views/user/Login') },
      // { path: 'forgot-password', component: () => import( './views/user/ForgotPassword') }
    ]
  },
  { path: '*', component: () => import( './views/Error') }
]

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router;
