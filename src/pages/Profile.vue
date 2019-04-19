<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <button
              v-if="profile.following"
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="unfollowUser(profile.username)"
            >
              <i class="ion-minus-round"></i>&nbsp; Unfollow {{ profile.username }}
            </button>
            <button
              v-else
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="followUser(profile.username)"
            >
              <i class="ion-plus-round"></i>&nbsp; Follow {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>
          <ArticleList :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ArticleList from '../components/ArticleList.vue';

export default {
  name: 'Profile',
  components: {
    ArticleList
  },
  computed: {
    ...mapState('profile', ['profile']),
    ...mapState('article', ['articles'])
  },
  methods: {
    ...mapActions('profile', ['fetchProfile', 'followUser', 'unfollowUser']),
    ...mapActions('article', ['fetchArticles'])
  },
  mounted() {
    this.fetchProfile(this.$route.params.username);
    this.fetchArticles({ author: this.$route.params.username });
  }
};
</script>
