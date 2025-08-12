<script>
import projects from '../../data/projects.json'

export default {
    data() {
        return {
            projectsList: projects
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
        }

    }
}
</script>

<template>
    <div class="projects-container" id="projects">
        <h1>&#8968;Projects &#38; Contributions &#8971;</h1>
        <div class="projects-list">
            <div v-for="project in projectsList" :key="project.id">
                <div class="project-item">
                    <img :src="getThumbnailUrl(project.id)" :alt="project.title">
                    <div class="overlay">
                        <span class="channel overlay-bg">{{ project.channel}}</span>
                        <span class="views overlay-bg">{{ formatNumber(project.views) }} views</span>
                        <span class="upload overlay-bg">{{ formatDate(project.upload) }}</span>
                        <span class="title overlay-bg">{{ project.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.projects-container {
    margin: 128px auto;
    width: calc(100vw - 2.5rem);
    height: 480px;
}

.projects-container h1 {
    color: var(--text);
    font-size: var(--header-font-size);
    text-align: center;
}

.projects-list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
    align-items: center;

    gap: calc(1.25rem);
    overflow: scroll;

    /* overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none; Firefox */
}

/* 
.projects-list::-webkit-scrollbar {
    display: none;
} 
*/

.project-item {
    position: relative;
    width: 560px;
    height: 315px;

}


.project-item img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 16px;

}

.overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    font-size: 20px;
    transition: all 350ms;

}

.overlay:hover {
    backdrop-filter: grayscale(1) blur(4px);
}

.overlay-bg {
    padding: 5px 6px 5px 6px;
    backdrop-filter: grayscale(1) blur(3px) brightness(0.25);
    border-radius: 8px;
}

.overlay > .channel {
    position: inherit;
    top: 1.25rem;
    left: 1.25rem;
}

.overlay > .upload {
    position: inherit;
    bottom: 1.25rem;
    right: 1.25rem;
}
.overlay > .views {
    position: inherit;
    bottom: 1.25rem;
    left: 1.25rem;
}

.overlay > .title {
    position: inherit;
    font-size: 24px;
    width: calc(100% - 100px);
    top: 50%;
    left: calc(50% - (460px / 2));
}



</style>