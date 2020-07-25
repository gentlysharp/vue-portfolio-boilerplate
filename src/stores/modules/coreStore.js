/* 
 * core component에서 동작하는 웹페이지의 기본적인 이벤트를 담당하는 모듈
 */
const coreStore = {
  namespaced: true,

  state: {
    menus: [{
        icon: "mdi-home",
        title: "Home",
        path: "/"
      },
      {
        icon: "mdi-shape-outline",
        title: "Menu1",
        path: "/menu1"
      },
      {
        icon: "mdi-shape-outline",
        title: "Menu2",
        path: "/menu2"
      },
      {
        icon: "mdi-shape-outline",
        title: "Menu3",
        path: "/menu3"
      },

    ],
    leftDrawer: true
  },
  getters: {},
  mutations: {
    toggleLeftDrawer: (state, payload) => {
      state.leftDrawer = payload
    }
  },
  actions: {}
}

export default coreStore