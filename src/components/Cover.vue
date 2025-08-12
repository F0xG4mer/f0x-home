<script setup>
import ContactSummary from './ContactsSummary.vue';
import ArrowDown from './icons/ArrowDown.vue';
</script>

<template>
    <div class="image-cover">
        <img src="../assets/images/f0x-home-top-cover.webp" draggable="false" class="no-select">
    </div>
    <div class="info">
        <ContactSummary />
        <div>
            <p class="copyright-info">Copyright &#169; 2025 F0xG4mer &#8226; All Rights Reserved</p>
        </div>
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

.info {
    position: absolute;
    bottom: 48px;

    z-index: 10;
    width: calc(100vw - 5rem);
    margin-left: 2.5rem;


    display: flex;
    justify-content: space-between;

    color: var(--copyright-text);
}

</style>