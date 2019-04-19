import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import article from './modules/article'
import tag from './modules/tag'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    article,
    auth,
    tag,
    profile
  }
});
