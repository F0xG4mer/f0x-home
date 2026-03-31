<script setup>
import { ref, onMounted } from "vue"
import { motion, time, useScroll, useTransform } from "motion-v"

const activeTab = ref("Home")
const tabs = ["Home", "Projects", "3D Gallery", "Contact"]

const setActive = (tab) => {
  activeTab.value = tab
}

const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 750, 1500], [0, 0, -750])

const barAnimate = ref({
  width: "56px",
  borderRadius: "50%",
  opacity: 1,
})

const itemAnimations = ref(tabs.map(() => ({
  opacity: 0,
  x: -12,
  scale: 0.85,
})))

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
onMounted(async () => {
  await delay(2000)

  barAnimate.value = {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }

  await delay(400)

  barAnimate.value = {
    scale: 1,
    width: ["56px", "56px", "730px", "700px"],
    borderRadius: ["50%", "20px", "20px", "20px"],
    transition: {
      width: {
        duration: 1.25,
        ease: [0.34, 1.56, 0.64, 1],
        times: [0, 0.4, 0.85, 1],
      },
      borderRadius: {
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.4, 0.85, 1],
      },
    },
  }

  await delay(950)
  barAnimate.value = { scale: 1, width: "700px", borderRadius: "20px" }

  await delay(250)

  tabs.forEach((_, i) => {
    setTimeout(() => {
      itemAnimations.value[i] = {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        },
      }
    }, i * 80)
  })
})
</script>

<template>
  <motion.div
    class="navbar-container"
    :style="{ y, x: '-50%' }"
    :initial="{scale: 0, width: '56px', borderRadius: '50%', opacity: 1 }"
    :animate="barAnimate"
  >
    <motion.a
      v-for="(tab, i) in tabs"
      :key="tab"
      :initial="{ opacity: 0, x: -12, scale: 0.85 }"
      :animate="itemAnimations[i]"
      :class="{ active: activeTab === tab }"
      @click="setActive(tab)"
    >
      {{ tab }}
    </motion.a>
  </motion.div>
</template>

<style>
.navbar-container {
  z-index: 10;
  position: fixed;
  height: 56px;
  top: 48px;
  left: 50%;
  border-radius: 20px;
  backdrop-filter: grayscale(1) blur(4px) brightness(50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.navbar-container a {
  font-size: var(--nav-font-size);
  cursor: pointer;
  transition: all 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 8px;
  text-decoration: none;
  flex-shrink: 0;
  transition: background-color 250ms;

}

.navbar-container a:hover {
  background-color: var(--text-hover);
  border-radius: 8px;
}

.navbar-container a.active {
  background-color: var(--text-active);
}
</style>