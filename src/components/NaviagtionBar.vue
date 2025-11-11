<script setup>
import { ref, onMounted } from "vue"
import { delay, motion, useScroll, useTransform } from "motion-v"

const activeTab = ref("Home")

const tabs = ["Home", "Projects", "3D Gallery", "Contact"]

const setActive = (tab) => {
  activeTab.value = tab
}

const { scrollY } = useScroll()

const y = useTransform(scrollY, [0, 750, 1500], [0, 0, -750])

const animation = ref({})

// Animate sequentially on mount
onMounted(async () => {
  // Step 1: Scale circle in
  animation.value = {
    scale: 1,
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    left: 'calc(50% - 28px)',
    transition: {
      delay: 2.25,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  }

  // Wait a bit before next phase
  await new Promise(resolve => setTimeout(resolve, 2850))

  // Step 2: Morph to bar
  animation.value = {
    scale: 1,
    borderRadius: '20px',
    width: '700px',
    height: '56px',
    left: 'calc(50% - 350px)',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  }
})

</script>

<template>
  <motion.div class="navbar-container" :style="{ y }"
    :initial="{ scale: 0, borderRadius: '50%', width: '56px', height: '56px', left: 'calc(50% - 28px)' }" :animate="animation"
    transition="spring">
    <a 
    v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="setActive(tab)">
      {{ tab }}
    </a>
  </motion.div>
</template>

<style>
.navbar-container {
  z-index: 10;
  position: fixed;
  width: 700px;
  height: 56px;
  top: 48px;
  /* left: calc(50% - 350px); */
  border-radius: 20px;
  backdrop-filter: grayscale(1) blur(4px) brightness(50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
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
}

/* hover styling */
.navbar-container a:hover {
  background-color: var(--text-hover);
  border-radius: 8px;
}

/* active tab styling */
.navbar-container a.active {
  background-color: var(--text-active);
}
</style>
