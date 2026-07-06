<template>
  <Teleport to="body">
    <button
      :class="[
        'fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex h-11 w-11 items-center justify-center border border-line bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500 ease-out',
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none',
      ]"
      aria-label="Back to top"
      title="Back to top"
      @click="scrollToTop"
    >
      <svg
        class="h-4 w-4 text-foreground/60 transition-colors duration-300 hover:text-accent"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 14V2M3 7l5-5 5 5" />
      </svg>
    </button>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > window.innerHeight * 0.8
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
