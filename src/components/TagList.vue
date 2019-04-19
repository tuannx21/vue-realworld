<template>
  <ul class="tag-list">
    <li v-for="(tag, index) in tags" :key="index">
      <router-link :to="{ name: 'home-with-tag', params: { tag: tag } }" class="tag-pill tag-default">
        {{ tag }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

