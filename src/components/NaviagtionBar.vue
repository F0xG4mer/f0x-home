<script setup>
</script>

<template>
    <div class="navbar-container">
        <a>Home</a>
        <a>Project</a>
        <a>3D Gallery</a>
        <a>Contact</a>
    </div>
</template>

<style>
.navbar-container {
    z-index: 10;

    position: absolute;
    width: 700px;
    height: 56px;
    top: 48px;
    left: calc(50% - 350px);

    border-radius: 100px;
    backdrop-filter: grayscale(1) brightness(50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.navbar-container a {
    color: var(--text);
    font-size: var(--nav-font-size);
}

</style>