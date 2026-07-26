<template>
  <Teleport to="body">
    <button
      :class="[
        'fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-10 w-10 items-center justify-center bg-foreground/90 backdrop-blur-sm shadow-lg transition-all duration-400 ease-out hover:bg-accent',
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 pointer-events-none',
      ]"
      aria-label="Back to top"
      title="Back to top"
      @click="scrollToTop"
    >
      <svg
        class="h-3.5 w-3.5 text-background"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
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
  visible.value = window.scrollY > window.innerHeight * 0.6
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
