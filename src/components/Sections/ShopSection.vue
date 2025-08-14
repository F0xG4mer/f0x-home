<script setup>
import { ref } from 'vue'
import storeItems from '../../data/storeitems.json'
import KoFi from '../icons/KoFi.vue'
import Gumroad from '../icons/Gumroad.vue'

const storeList = ref(storeItems)
</script>


<template>
    <div class="shop-container">
        <h1 class="title">&#8968;Purchasable Content&#8971;</h1>
        <div class="shop-list-container">
            <div v-for="item in storeList" :key="item.id" class="shop-item">
                <img :src="item.cover"></img>
                <div class="item-overlay">
                    <span class="overlay-bg">&#8364; {{ item.price }}</span>
                </div>
                <div class="item-shop-links">
                    <KoFi class="overlay-bg" :href="item.kofi"/>
                    <Gumroad class="overlay-bg" :href="item.gumroad"/>
                </div>
                <div class="item-title">
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.shop-container {
    margin: 128px auto;
    width: 100vw;
    font-size: 20px;

}

.shop-list-container {
    margin:auto;
    width: 1200px;
    border-radius: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1.25rem;
}

.shop-item {
    position: relative;
    width: 300px;
    transition: all 250ms;



}
/* .shop-item:hover {
    transform: rotate(1deg) scale(104%) translateY(-10px);

} */
.shop-item img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: 20px;

}

.item-overlay {
    cursor: pointer;

    position: absolute;
    top: 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    
    font-weight: bold;

}

.item-shop-links {
    position: absolute;
    width: 100%;
    aspect-ratio: 1 / 1;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    border-radius: 20px;
    opacity: 0;
    transition: all 250ms;
    
}

.item-shop-links > * {
    border-radius: 20px;
    transition: all 250ms;
    cursor: pointer;
    z-index: 25;
}



.item-shop-links > *:hover {
    scale: 1.1;
}


.item-shop-links:hover {
    opacity: 1;
    backdrop-filter: blur(5px) grayscale(1);
}


.item-overlay span {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 8px;
    transition: all 250ms;

}

.item-title {
    background-color: var(--sub-background);
    padding: 12px;
    border-radius: 16px;
    margin-top: 5px;

    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
    border: 2px solid var(--sub-background-shadow);
}

</style>