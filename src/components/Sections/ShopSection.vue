<script>
import storeItems from '../../data/storeitems.json'

export default {
    data() {
        return {
            storeList: storeItems,
            lang: 'en'
        }
    },
    computed: {
        t() {
            return this.$texts[this.lang]
        }
    }
}
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
                <div class="item-overlay-hover">
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
.shop-item:hover {
    transform: rotate(1deg) scale(104%) translateY(-10px);

}
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
    z-index: 25;
    transition: all 250ms;

}

.item-overlay:hover {
    backdrop-filter:  blur(5px) grayscale(1);
    border-radius: 20px;
}
.item-overlay:hover span {
    opacity: 0;
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
    padding: 1rem;
    border-radius: 16px;
    margin-top: 5px;

    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
}

</style>