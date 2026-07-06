<template>
  <div class="relative h-full w-full overflow-hidden bg-foreground/5">
    <!-- Shimmer skeleton -->
    <div
      v-if="!loaded"
      class="absolute inset-0"
    >
      <div class="shimmer h-full w-full" />
    </div>

    <!-- Fallback placeholder on error -->
    <div
      v-if="hasError"
      class="absolute inset-0 flex items-center justify-center bg-foreground/5"
    >
      <div class="flex flex-col items-center gap-2">
        <svg
          class="h-8 w-8 text-foreground/15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="font-sans text-[10px] font-light tracking-wider uppercase text-foreground/20">
          Image unavailable
        </span>
      </div>
    </div>

    <!-- Actual image — fades in once loaded -->
    <img
      v-show="!hasError"
      :src="src"
      :alt="alt"
      :class="[
        'h-full w-full object-cover transition-all duration-700 ease-out',
        loaded && !hasError ? 'opacity-100' : 'opacity-0',
      ]"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt: string
}>()

const emit = defineEmits<{
  loaded: []
}>()

const loaded = ref(false)
const hasError = ref(false)

const onLoad = () => {
  loaded.value = true
  emit('loaded')
}

const onError = () => {
  hasError.value = true
  // Even on error, show something — mark as "loaded" so the skeleton disappears
  loaded.value = true
}
</script>

<style scoped>
.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(168, 139, 114, 0.08) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.8s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
