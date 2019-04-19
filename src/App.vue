<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    ...mapActions('article',['fetchArticles']),
    ...mapActions('auth',['loadAuthenticedUser']),
    ...mapActions('tag',['fetchTags'])
  },
  mounted() {
    this.fetchArticles()
    this.fetchTags()
    this.loadAuthenticedUser()
  }
};
</script>

