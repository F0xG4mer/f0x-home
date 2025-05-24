<script setup>
import {motion} from 'motion-v';
import NavElement from './NavElement.vue';
</script>

<template>
    <motion.div
        :animate="{
            opacity: [0,1]
        }"
        :transition="{
            duration: 0.75,
            delay: 3.375,
        }"
    
    class=" flex flex-row justify-around navbar-container rounded-full m-auto">
        <NavElement title="Home" delay="3.625"/>
        <NavElement title="Projects" delay="3.75" />
        <NavElement title="3D Gallery" delay="3.875" />
        <NavElement title="Contact" delay="4.0"/>

    </motion.div>
</template>