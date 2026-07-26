<template>
  <div
    ref="cardRef"
    class="group relative cursor-pointer overflow-hidden bg-card border border-line transition-all duration-500 hover:border-accent/25 hover:shadow-lg"
    :class="layout === 'wide' ? 'grid md:grid-cols-[1.2fr_1fr]' : 'flex flex-col'"
    @mouseenter="isHovered = true"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Image -->
    <div
      class="relative overflow-hidden"
      :class="layout === 'wide' ? 'aspect-[16/9] md:aspect-auto md:min-h-[280px]' : 'aspect-[4/3]'"
    >
      <!-- Parallax wrapper -->
      <div
        class="h-full w-full transition-transform duration-[500ms] ease-out will-change-transform"
        :style="parallaxStyle"
      >
        <ImageLoader
          :src="project.image"
          :alt="project.title"
          @loaded="imageLoaded = true"
        />
      </div>

      <!-- Hover overlay -->
      <div
        class="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent p-5 sm:p-7 transition-all duration-500"
        :class="[isHovered && imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
        aria-hidden="true"
      >
        <p class="font-sans text-sm font-light leading-relaxed text-background/90">
          {{ project.description }}
        </p>
      </div>

      <!-- Category badge -->
      <div class="absolute top-4 left-4">
        <span class="font-accent text-[9px] font-medium tracking-[0.25em] uppercase bg-background/90 text-accent px-2.5 py-1 backdrop-blur-sm">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Metadata -->
    <div
      class="flex flex-col justify-between"
      :class="layout === 'wide' ? 'px-8 py-7 md:px-10 md:py-10' : 'px-5 pb-6 pt-5 sm:px-6'"
    >
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="font-sans text-xs font-light text-subtle">{{ project.year }}</span>
          <div class="flex items-center gap-1.5 text-subtle">
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M6 1C3.79 1 2 2.79 2 5c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zM6 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
            </svg>
            <span class="font-sans text-[11px] font-light">{{ project.location }}</span>
          </div>
        </div>

        <h3
          class="font-display leading-tight tracking-tight transition-colors duration-300 group-hover:text-accent"
          :class="layout === 'wide' ? 'text-2xl sm:text-3xl font-light' : 'text-xl font-light'"
        >
          {{ project.title }}
        </h3>

        <p
          v-if="layout === 'wide'"
          class="mt-4 font-sans text-sm leading-relaxed text-muted"
        >
          {{ project.description }}
        </p>
      </div>

      <!-- Technologies / Tags -->
      <div class="mt-5 flex flex-wrap gap-2" v-if="project.tags && project.tags.length">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="font-accent text-[9px] font-medium tracking-[0.15em] uppercase text-subtle border border-line px-2.5 py-1"
        >
          {{ tag }}
        </span>
      </div>

      <!-- View link (visible on wide layout) -->
      <div v-if="layout === 'wide'" class="mt-7">
        <span class="group/link inline-flex items-center gap-2 font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-accent border-b border-accent/30 pb-1 transition-all duration-300 group-hover:border-accent">
          View Project
          <svg class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 6h10M7 2l4 4-4 4"/></svg>
        </span>
      </div>
    </div>

    <!-- Bottom accent line -->
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

const props = defineProps<{
  project: Project
  layout?: 'default' | 'wide'
}>()

const cardRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const imageLoaded = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const isOnCard = ref(false)

const PARALLAX_FACTOR = 6

const onMouseMove = (e: MouseEvent) => {
  const card = cardRef.value
  if (!card) return

  isOnCard.value = true
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

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
    transform: `translate(${mouseX.value * PARALLAX_FACTOR}px, ${mouseY.value * PARALLAX_FACTOR}px) scale(1.04)`,
  }
})
</script>
