<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="comment.author.image" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{ comment.author.username }}</a>
      <span class="date-posted">{{ comment.createdAt || date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

