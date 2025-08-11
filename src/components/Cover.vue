<script setup>

</script>

<template>
    <div class="image-cover">
        <img src="../assets/images/f0x-home-top-cover.webp">
    </div>
</template>

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

</style>