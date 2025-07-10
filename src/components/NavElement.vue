<script setup>
import {easeInOut, motion} from 'motion-v'

const props = defineProps(['title', 'delay', 'href'])

</script>
<template>
    <motion.a
    :href="props.href"
    :animate="{
        opacity: [0, 1],
    }"
    :transition="{
        ease: 'easeInOut',
        delay: props.delay
    }"
    >{{ props.title }}</motion.a>
</template>