<template><div class="noise" draggable="false"></div></template>
<style>
.noise::before {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    opacity: 0.07;
    filter: brightness(0.35);
    pointer-events: none;
    background: url(/public/noise.gif);
    z-index: 50;
}
</style>