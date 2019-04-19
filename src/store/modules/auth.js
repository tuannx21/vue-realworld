import * as types from '../mutationTypes'
import { authService } from '../../service/auth.service'

const state = {
  isAuthentic: false,
  currentUser: {}
};

const getters = {
};

const mutations = {
  [types.AUTHENTIC](state, user) {
    state.isAuthentic = true
    state.currentUser = user
  },
  [types.UNAUTHENTIC](state) {
    state.isAuthentic = false
    state.currentUser = {}
  },
  [types.AUTH_UPDATE](state, user) {
    state.currentUser = user
  }
};

const actions = {
  async login({ commit }, { email, password }) {
    let { user } = await authService.login(email, password)
    commit(types.AUTHENTIC, user)
  },
  async logout({ commit }) {
    await authService.logout()
    commit(types.UNAUTHENTIC)
  },
  async register({ username, email, password }) {
    await authService.register(username, email, password)
  },
  async loadAuthenticedUser({ commit }) {
    let data = await authService.getCurrentUser()
    if(!data) commit(types.UNAUTHENTIC)
    else commit(types.AUTHENTIC, data.user)
  },
  async updateCurrentUser({ commit }, updatedUser) {
    let { user } = await authService.updateCurrentUserProfile(updatedUser)
    commit(types.AUTH_UPDATE, user)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
