import Vue from 'vue'
import Vuex from 'vuex'

import newsong from './newsong'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    newsong
  }
})

export default store