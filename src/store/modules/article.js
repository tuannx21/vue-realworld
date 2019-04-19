import * as types from '../mutationTypes'
import { axiosService } from '../../service/api.service';

const state = {
  articles: []
};

const getters = {

};

const mutations = {
  [types.ARTICLE_LOAD](state, articles) {
    state.articles = articles
  }
};

const actions = {
  async fetchArticles({ commit }, params) {
    const data = await axiosService.get('/articles', params)
    commit(types.ARTICLE_LOAD, data.articles)
    return data.articles
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
