<script setup>
import Discord from './icons/Discord.vue';
import X from './icons/X.vue';
import Youtube from './icons/Youtube.vue';
import Share from './icons/Share.vue';
import Mail from './icons/Mail.vue';

</script>

<template>
    <div class="contact-sum-container">
        <Share/>
        <X/>
        <Youtube/>
        <Discord/>
        <Mail/>
    </div>
</template>

<style>
.contact-sum-container {
    z-index: 10;
    position: relative;
    width: 360px;
    height: 56px;

    border-radius: 100px;
    backdrop-filter: grayscale(1) blur(4px) brightness(50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.contact-sum-container > * {
    transition: all 250ms;
    cursor: pointer;
}

.contact-sum-container > *:hover {
    scale: 1.25;
    rotate: 5deg;
}

</style>