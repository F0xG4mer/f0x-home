<script setup>
import { defineProps } from 'vue'
import Tweet from 'vue-tweet'
const props = defineProps({
    tweet: {
        type: String,
        required: true
    }
})

</script>

<template>
  <Tweet
    :tweetId="props.tweet"
    cards="visible"
    lang="en"
    theme="dark"
    :dnt="false"
    @tweet-load-error="onTweetLoadError"
    @tweet-load-success="onTweetLoadSuccess"
  >
    <template v-slot:loading>
      <span>Loading...</span>
    </template>

    <template v-slot:error>
      <span>Sorry, that tweet doesn't exist!</span>
    </template>
  </Tweet>
</template>

<style>
</style>