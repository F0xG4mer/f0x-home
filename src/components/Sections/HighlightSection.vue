<script setup>
import { ref } from 'vue'
import tweets from '../../data/tweets.json'
import TwitterItem from '../TwitterItem.vue';



</script>

<template>
    <div class="highlights-container">
        <h1 class="title">&#8968;Highlights&#8971;</h1>
        <div class="tweets-list">
            <div v-for="tweet in tweets" :key="tweet.id" class="tweets-list">
                <TwitterItem :tweet="tweet.id" />
            </div>
        </div>

    </div>
</template>

<style>
.highlights-container {
    margin: 256px auto;
    width: 100vw;
}

.tweets-list {
    display: flex;
    justify-content: center;
    gap: 5rem;
}
.tweets-list >* {
    flex-shrink: 0;
    width: 400px;
}
</style>



<!-- <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">I modeled and rigged Springtrap back in December. Before the model has been quite
                simple so I&#39;ve decided to rework it a bit. <br>The new version has Bevels, Bulging and my favorite
                Part - BumpMaps.<br>It&#39;s also the first time in years I&#39;ve actually worked with Arnold and
                it&#39;s great! <a href="https://t.co/aKRVKNIf1W">pic.twitter.com/aKRVKNIf1W</a></p>&mdash; F0x
            (@F0xG4mer) <a href="https://twitter.com/F0xG4mer/status/1906025252938821950?ref_src=twsrc%5Etfw">March 29,
                2025</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->