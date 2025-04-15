<script setup lang="ts">
import Introduction from '@/components/Introduction.vue';
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';


const target = ref<HTMLElement>()

const { variant } = useMotion(target, {
  initial: {
    scale: 1,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      // This will go to `custom` when enter is complete.
      onComplete: () => (variant.value = 'custom'),
    },
  },
  custom: {
    scale: 2,
    transition: {
      type: 'spring',
      damping: 100,
    },
  },
})
</script>

<template>
    <div class="w-screen h-screen m-auto img-cover">
        test
    </div>
    <div class="mt-50 h-100">
      <Introduction />
    </div>
    <div class="h-100"></div>
    <div class="h-100"></div>
    <div class="h-100"></div>

</template>