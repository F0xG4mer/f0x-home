<script setup>
import { ref, computed } from "vue"
import { motion, useScroll, useTransform } from "motion-v"
import texts from "../../data/texts.json" // or wherever your translations live

const lang = ref("en")

const t = computed(() => texts[lang.value])

</script>


<template>
    <div class="introduction-container">
        <h1 class="title">&#8968;Introduction&#8971;</h1>
        <p class="section-text">{{ t.introduction }}</p>
        <div class="intro-image">
            <img src="../../assets/images/introduction-render.webp"></img>
        </div>
    </div>
</template>

<style>
.introduction-container {
    margin: 256px auto 0;
    width: calc(100vw - 2.5rem);
}

.intro-image {
    width: 100%;
    height: 100%;
}

.intro-image img {
    object-fit: cover;
    width: 100%;
    border-radius: 20px;
}

</style>