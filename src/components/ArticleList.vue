<template>
  <div class="artile-list">
    <article-item
      v-for="(article, index) in articles"
      :article="article"
      :key="article.title + index"
    />
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>
