import * as types from '../mutationTypes'
import { axiosService } from '../../service/api.service';

const state = {
  profile: {}
};

const getters = {
};

const mutations = {
  [types.PROFILE_LOAD](state, profile) {
    state.profile = profile
  }
};

const actions = {
  async fetchProfile({ commit }, username) {
    let data = await axiosService.get(`/profiles/${username}`)
    if (data.profile) commit(types.PROFILE_LOAD, data.profile)
  },
  async followUser({ commit }, username) {
    let data = await axiosService.post(`/profiles/${username}/follow`, null)
    if (data.profile) commit(types.PROFILE_LOAD, data.profile)
  },
  async unfollowUser({ commit }, username) {
    let data =await axiosService.delete(`/profiles/${username}/follow`)
    if (data.profile) commit(types.PROFILE_LOAD, data.profile)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
