<script>
import projects from '../../data/projects.json'
import texts from '../../data/texts.json'

export default {
    data() {
        return {
            projectsList: projects,
            texts,
            lang: 'en'
        }
    },
    computed: {
        t() {
            return this.texts[this.lang]
        }
    },
    methods: {
        getThumbnailUrl(videoId) {
            return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        },

        formatNumber(num) {
            if (num >= 1_000_000_000) {
                return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
            }
            if (num >= 1_000_000) {
                return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
            }
            if (num >= 1_000) {
                return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k'
            }
            return num.toString()
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"

            })
        },
        openVideo(id) {
            window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
        }

    }
}
</script>

<template>
    <div class="projects-container" id="projects">
        <h1>&#8968;Projects &#38; Contributions&#8971;</h1>
        <p class="section-info">{{ t.projects }}</p>
        <div class="projects-list">
            <div v-for="project in projectsList" :key="project.id" class="project-item" @click="openVideo(project.id)">
                <img :src="getThumbnailUrl(project.id)" :alt="project.title">

                <div class="overlay-1">
                    <span class="channel overlay-bg">{{ project.channel }}</span>
                    <span class="views overlay-bg">{{ formatNumber(project.views) }} views</span>
                    <span class="upload overlay-bg">{{ formatDate(project.upload) }}</span>
                </div>
                <div class="overlay-2">
                    <span class="title overlay-bg">{{ project.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.projects-container {
    margin: 128px auto 0;
    width: calc(100vw - 2.5rem);
    height: 560px;
    overflow: visible !important;
}

.projects-container h1 {
    color: var(--text);
    font-size: var(--header-font-size);
    text-align: center;
}

.projects-list {
    position: relative;
    width: 100%;
    height: 340px;
    gap: 1.25rem;
    background-color: red;

    display: flex;
    flex-direction: row;
    /* Stack vertically */
    align-items: center;
    overflow: visible;
}

.section-info {
    font-size: var(--section-font-size);
    margin: 2.5rem;
}

.project-item {
    flex: 0 0 auto;
    width: 560px;
    height: 315px;
    cursor: pointer;
    position: relative;
    transition: all 500ms;
    overflow: visible;
}


.project-item:hover {
    transform: rotate(1deg) scale(104%) translateY(-10px);

}

.project-item img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 16px;

}


.overlay-1 {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    font-size: 20px;
    z-index: 15;
}

.overlay-2 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    font-size: 20px;
    z-index: 20;

    transition: all 350ms;

    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

/* 
.overlay-1:hover {
    opacity: 0;
} */

.overlay-2:hover {
    opacity: 1;
    backdrop-filter: grayscale(1) blur(5px);
}

.overlay-bg {
    padding: 5px 6px 5px 6px;
    backdrop-filter: grayscale(1) blur(3px) brightness(0.25);
    border-radius: 8px;

}

.overlay-1>.channel {
    position: inherit;
    top: 1.25rem;
    left: 1.25rem;
}

.overlay-1>.upload {
    position: inherit;
    bottom: 1.25rem;
    right: 1.25rem;
}

.overlay-1>.views {
    position: inherit;
    bottom: 1.25rem;
    left: 1.25rem;
}

.overlay-2>.title {
    position: inherit;
    font-size: 24px;
    width: calc(100% - 100px);
    left: calc(50% - (460px / 2));
}
</style>