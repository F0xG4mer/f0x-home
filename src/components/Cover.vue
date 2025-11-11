<script setup>
import ArrowDown from './icons/ArrowDown.vue';

import { animate, motion, useScroll, useTransform } from "motion-v"

const { scrollY } = useScroll()

const y = useTransform(scrollY, value => value * 0.5)
const rotate = useTransform(scrollY, [0, 1500], [0, 10])
const scale = useTransform(scrollY, [0, 1500], [1, 1.2])

</script>

<template>
    <div class="cover-container">
        <motion.div :style="{ y, rotate, scale }" :initial="{ filter: 'blur(10px) grayscale(1)', rotate: 20, scale: 4 }"
            :animate="{ filter: ['blur(10px) grayscale(1)', 'blur(0) grayscale(0)'], rotate: 0, scale: 1 }"
            :transition="{ duration: 2, ease: 'easeOut' }">
            <img src="../assets/images/placeholder-1920x1080.png" draggable="false" class="no-select cover-image" />
        </motion.div>

    </div>


</template>

<style>
.cover-container {
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden
}

.cover-image {
    /*object-position: 0 0;*/
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>


<!--
<template>


    <div class="image-cover">
        <img src="../assets/images/f0x-home-top-cover.webp" draggable="false" class="no-select">
    </div>
    <div class="info">
        <ContactSummary />
    </div>
</template>
-->


<!--
<style>
.image-cover {
    width: calc(100vw - 2.5rem);
    height: calc(100vh - 2.5rem);
    display: flex;
    justify-content: center;
    margin: 1.25rem;
    overflow: hidden;
    border-radius: 32px;

}

.image-cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    scale: 130%;
    object-position: 190px 50px;

}

.info {
    position: absolute;
    bottom: 48px;

    z-index: 10;
    width: calc(100vw - 5rem);
    margin-left: 2.5rem;


    display: flex;
    justify-content: space-between;

    color: var(--copyright-text);
}

</style>
-->
