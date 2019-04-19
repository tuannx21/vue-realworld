<template>
  <div class="comment-list">
    <comment v-for="(cmt, index) in comments" :comment="cmt" :key="index" />
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {
    Comment
  }
};
</script>
