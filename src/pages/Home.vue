<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <article-list :articles="articles" />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <tag-list :tags="tags" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import TagList from '../components/TagList.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    ArticleList,
    TagList
  },
  data: () => ({
    currentTab: ''
  }),
  computed: {
    ...mapState('article', ['articles']),
    ...mapState('tag', ['tags'])
  },
  methods: {
    ...mapActions('article', ['fetchArticles'])
  },
  mounted() {
    this.fetchArticles();
  },
  beforeRouteUpdate(to) {
    this.fetchArticles(to.params);
  }
};
</script>
