<script setup lang="ts">

const text = 'Introduction'.split('')

</script>

<template>
    <div class="text-white text-8xl font-semibold flex justify-center space-x-1 noselect">
        <p v-for="char in text" class="drop-shadow-2xl drop-shadow-black"> {{ char }} </p>
    </div>
</template>