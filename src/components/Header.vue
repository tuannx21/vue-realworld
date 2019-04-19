<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul v-if="isAuthentic" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">{{ currentUser.username }}</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/setting">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logOut" href="/">Log out</a>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" href="">Log in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link" href=""
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeader',
  computed: {
    ...mapState('auth', ['isAuthentic', 'currentUser'])
  },
  methods: {
    ...mapActions('auth',['logout']),
    logOut() {
      this.logout()
      this.$router.push('/')
    }
  }
};
</script>
