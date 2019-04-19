<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="{ name: 'profile', params: { username: article.author.username } }">
        <img :src="article.author.image"/>
      </router-link>
      <div class="info">
        <router-link :to="{ name: 'profile', params: { username: article.author.username } }" class="author">
          {{ article.author.username }}
        </router-link>
        <span class="date">{{ article.createdAt | date }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <TagList :tags="article.tagList"/>
    </a>
  </div>
</template>

<script>
import TagList from './TagList.vue'

export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    TagList
  }
};
</script>
