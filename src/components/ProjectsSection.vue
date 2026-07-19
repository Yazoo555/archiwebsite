<template>
  <section
    id="projects"
    class="relative px-6 pb-16 pt-12 sm:pb-24 sm:pt-16 md:px-10 md:pb-32 md:pt-24"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="mb-10 sm:mb-16 md:mb-24">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="font-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase text-accent"
        >
          Selected Works
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }"
          class="font-display text-3xl font-light tracking-tight sm:text-4xl md:text-5xl"
        >
          Projects
        </h2>
      </div>

      <!-- Project Grid -->
      <div class="grid gap-8 md:grid-cols-2 xl:gap-10">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 60 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 200 + index * 150 },
          }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROJECTS } from '@/types/project'
import ProjectCard from './ProjectCard.vue'

const projects = PROJECTS
</script>
