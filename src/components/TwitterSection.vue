<script setup>
import Tweet from "vue-tweet";
import highlightData from '@/data/tweet.json'

const tweet = highlightData;

</script>

<template>
    <div class="text-white text-8xl font-semibold flex justify-center space-x-1 noselect">
        <p class="drop-shadow-2xl drop-shadow-black"> Highlight</p>
    </div>
    <div class="w-dvw flex flex-row items-center justify-center gap-12 mt-25">
      <Tweet class="w-lg"
        :tweet-url="tweet.highlight"
        theme="dark"
        conversation="none"
      />
    </div>

  </template>