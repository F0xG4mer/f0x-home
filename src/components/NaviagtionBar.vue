<script setup>
</script>

<template>
    <div class="navbar-container">
        <a>Home</a>
        <a href="#projects" target="_top">Project</a>
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
    backdrop-filter: grayscale(1) blur(4px) brightness(50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.navbar-container a {
    font-size: var(--nav-font-size);
    cursor: pointer;
    transition: all 250ms;
}

.navbar-container a:hover {
    text-decoration: underline;
}

</style>