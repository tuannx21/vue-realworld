import * as types from '../mutationTypes'
import { axiosService } from '../../service/api.service';

const state = {
  tags: []
};

const getters = {

};

const mutations = {
  [types.TAG_LOAD](state, tags) {
    state.tags = tags
  }
};

const actions = {
  async fetchTags({ commit }) {
    const data = await axiosService.get('/tags')
    commit(types.TAG_LOAD, data.tags)
    return data.tags
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
