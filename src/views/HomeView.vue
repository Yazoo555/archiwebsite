<template>
  <div>
    <HeroSection />
    <ProjectsSection />
  </div>
</template>

<script setup lang="ts">
import { watch, inject, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'

const route = useRoute()
const showSite = inject('showSite', ref(false)) as Ref<boolean>

// Map route names to section IDs for smooth scrolling after navigation
const sectionMap: Record<string, string> = {
  projects: 'projects',
  about: 'about',
  contact: 'contact',
}

// When the route changes and the loading screen has completed,
// scroll to the appropriate section.
watch(
  [() => route.name, showSite],
  ([name, loaded]) => {
    if (!loaded || !name || typeof name !== 'string') return
    const sectionId = sectionMap[name]
    if (sectionId) {
      // Small delay to ensure DOM is rendered and fonts/styles are applied
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  },
)
</script>
