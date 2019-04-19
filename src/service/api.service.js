import axios from 'axios'
import { USER_AUTH } from './auth.service'

const HOST_URL = "https://conduit.productionready.io/api"

export const axiosService = {
  init() {
    axios.defaults.baseURL = HOST_URL
  },
  setHeaderFromLocalStorage() {
    let tokenFromLocalStorage = window.localStorage.getItem(USER_AUTH)
    if (!tokenFromLocalStorage) return
    axios.defaults.headers.common["Authorization"] = `Token ${tokenFromLocalStorage}`
  },
  get(url, params) {
    return axios.get(url, { params: { ...params } })
      .then(response => response.data)
  },
  post(url, body) {
    return axios.post(url, body)
      .then(response => response.data)
  },
  put(url, body) {
    return axios.put(url, body)
      .then(response => response.data)
  },
  delete(url) {
    return axios.delete(url)
      .then(reponse => reponse.data)
  }
}
