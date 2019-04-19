import { axiosService } from './api.service';

export const USER_AUTH = "user-authentic"

export const authService = {
  login(email, password) {
    return axiosService.post('/users/login', {
      user: {
        email,
        password
      }
    })
      .then(data => {
        window.localStorage.setItem(USER_AUTH, data.user.token)
        axiosService.setHeaderFromLocalStorage()
        return data
      })
  },
  logout() {
    window.localStorage.removeItem(USER_AUTH)
  },
  register(username, email, password) {
    return axiosService.post('/users', {
      user: {
        username,
        email,
        password
      }
    })
  },
  getCurrentUser() {
    if (window.localStorage.getItem(USER_AUTH)) return axiosService.get('/user')
  },
  updateCurrentUserProfile(user) {
    return axiosService.put('/user', {
      user
    })
  }
}
