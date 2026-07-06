<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-out"
      :class="showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <div class="flex flex-col items-center gap-8">
        <!-- Logo image with fade-up animation -->
        <img
          src="/images/logo.png"
          alt="Studio"
          class="h-32 w-auto sm:h-48 md:h-60 object-contain logo-image"
        />

        <!-- Thin accent line that draws across -->
        <div class="h-px w-24 overflow-hidden bg-line/50">
          <div class="h-full w-full bg-accent logo-line" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showContent = ref(false)

const emit = defineEmits<{
  complete: []
}>()

onMounted(() => {
  // Delay to let the intro animation play out, then fade and notify parent
  setTimeout(() => {
    showContent.value = true
    setTimeout(() => {
      emit('complete')
    }, 800) // Wait for fade-out transition before removing from DOM
  }, 1800)
})
</script>

<style scoped>
.logo-image {
  opacity: 0;
  animation: fadeUp 0.6s ease-out 0.4s forwards;
}

.logo-line {
  transform: scaleX(0);
  transform-origin: left;
  animation: scaleIn 0.6s ease-out 1.0s forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
