<script setup lang="ts">
import { readonly, ref } from 'vue'

const props = defineProps(['title'])

const text = props.title.split('')

</script>

<template>
    <div class="text-white text-8xl font-semibold flex justify-center space-x-1 noselect">
        <p v-for="char in text" class="drop-shadow-2xl drop-shadow-black"> {{ char }} </p>
    </div>
</template>