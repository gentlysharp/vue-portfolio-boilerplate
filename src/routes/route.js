export default [{
  path: '/',
  name: 'App',
  component: () => import( /* webpackChunkName: "App" */ '@/apps/App.vue'),
  children: [

    {
      path: '/menu1',
      name: 'Menu1',
      component: () => import(/* webpackChunkName: "Menu1" */ '@/views/Menu1.vue')
    },
    {
      path: '/menu2',
      name: 'Menu2',
      component: () => import(/* webpackChunkName: "Menu2" */ '@/views/Menu2.vue')
    },
    {
      path: '/menu3',
      name: 'Menu3',
      component: () => import(/* webpackChunkName: "Menu3" */ '@/views/Menu3.vue')
    },

  ],
},

]