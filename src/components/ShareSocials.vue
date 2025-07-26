<script setup>
import { ref } from 'vue';
import { motion } from 'motion-v';
import X from './icons/X.vue';
import Discord from './icons/Discord.vue';
import Youtube from './icons/Youtube.vue';
import Share from './icons/Share.vue';

const copied = ref(false);

function openLink(link) {
    window.open(link, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText("https://f0xg4mer.com")
        .then(() => {
            copied.value = true;
            console.log("Copied!!");
            console.log(this.copied);

            setTimeout(() => {
                copied.value = false;
            }, 2000);
        })
        .catch(err => {
            console.error("Copy failed", err);
        });
}
</script>

<template>
    <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }"
        :transition="{ duration: 0.5, easing: 'ease-in-out' }"
        class="absolute top-1/2 end-1/2 bg-socials p-3 rounded-2xl" v-if="copied">
        <p class="text-3xl text-white">Copied!</p>
    </motion.div>

    <div class="absolute bottom-0 m-5 bg-socials p-4 rounded-full">
        <div class="flex justify-content-center gap-10">
            <Share @click="copyLink()" />
            <X @click="openLink('https://x.com/f0xg4mer')" />
            <Youtube @click="openLink('https://www.youtube.com/c/F0xG4mer')" />
            <Discord @click="openLink('https://discord.gg/x7SEszpqRN')" />
        </div>
    </div>
</template>
