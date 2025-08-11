<script setup>
import Discord from './icons/Discord.vue';
import X from './icons/X.vue';
import Youtube from './icons/Youtube.vue';
import Share from './icons/Share.vue';

</script>

<template>
    <div class="contact-sum-container">
        <Share/>
        <X/>
        <Youtube/>
        <Discord/>
    </div>
</template>

<style>
.contact-sum-container {
    z-index: 10;
    position: relative;
    width: 320px;
    height: 56px;

    border-radius: 100px;
    backdrop-filter: grayscale(1) brightness(50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

</style>