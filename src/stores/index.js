import Vue from 'vue'
import Vuex from 'vuex'
import coreStore from "./modules/coreStore"

Vue.use(Vuex)

// production 배포시는 strict모드를 사용하지 않기위해 적용합니다.
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    core: coreStore
  },
  strict: debug
})