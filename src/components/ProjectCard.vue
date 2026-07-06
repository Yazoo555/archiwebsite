<template>
  <div
    ref="cardRef"
    class="group relative cursor-pointer overflow-hidden bg-card border border-line"
    @mouseenter="isHovered = true"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Image with loading skeleton + parallax -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <!-- Parallax wrapper -->
      <div
        class="h-full w-full transition-transform duration-[400ms] ease-out will-change-transform"
        :style="parallaxStyle"
      >
        <ImageLoader
          :src="project.image"
          :alt="project.title"
          @loaded="imageLoaded = true"
        />
      </div>

      <!-- Hover overlay with description -->
      <div
        class="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent p-4 sm:p-6 transition-all duration-500"
        :class="[isHovered && imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
        aria-hidden="true"
      >
        <p
          class="font-sans text-sm font-light leading-relaxed text-background/90"
        >
          {{ project.description }}
        </p>
      </div>
    </div>

    <!-- Metadata -->
    <div class="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
      <div class="mb-1 flex items-center justify-between">
        <span
          class="font-accent text-[10px] font-medium tracking-[0.25em] uppercase text-accent"
        >
          {{ project.category }}
        </span>
        <span class="font-sans text-xs font-light text-subtle">
          {{ project.year }}
        </span>
      </div>
      <h3
        class="font-display text-lg sm:text-xl font-light tracking-tight transition-colors duration-300 group-hover:text-accent"
      >
        {{ project.title }}
      </h3>
      <div class="mt-2 flex items-center gap-1.5">
        <svg
          class="h-3 w-3 text-subtle"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
        >
          <path
            d="M6 1C3.79 1 2 2.79 2 5c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zM6 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          />
        </svg>
        <span class="font-sans text-xs font-light text-subtle">
          {{ project.location }}
        </span>
      </div>
    </div>

    <!-- Subtle border accent on hover -->
    <div
      class="absolute bottom-0 left-0 h-px bg-accent transition-all duration-500 ease-out"
      :class="isHovered ? 'w-full' : 'w-0'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'
import ImageLoader from './ImageLoader.vue'

defineProps<{
  project: Project
}>()

const cardRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const imageLoaded = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const isOnCard = ref(false)

const PARALLAX_FACTOR = 8 // max px offset

const onMouseMove = (e: MouseEvent) => {
  const card = cardRef.value
  if (!card) return

  isOnCard.value = true
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // Normalize to [-1, 1] range
  mouseX.value = (x / rect.width - 0.5) * 2
  mouseY.value = (y / rect.height - 0.5) * 2
}

const onMouseLeave = () => {
  isOnCard.value = false
  isHovered.value = false
  mouseX.value = 0
  mouseY.value = 0
}

const parallaxStyle = computed(() => {
  if (!isOnCard.value) return {}
  return {
    transform: `translate(${mouseX.value * PARALLAX_FACTOR}px, ${mouseY.value * PARALLAX_FACTOR}px) scale(1.05)`,
  }
})
</script>
