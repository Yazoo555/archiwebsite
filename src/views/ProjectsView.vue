<template>
  <div>
    <!-- Page Header -->
    <section class="relative px-6 md:px-10 pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <!-- Background texture -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(rgba(28, 28, 28, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 28, 28, 0.5) 1px, transparent 1px);
          background-size: 52px 52px;
        "
      />

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <p
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="section-label mb-6"
          >
            Portfolio
          </p>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 36 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
            class="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-[1.04] tracking-tight"
          >
            Selected<br />
            <em class="text-accent">Works</em>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
            class="mt-7 font-sans text-base leading-relaxed text-muted max-w-lg"
          >
            A collection of architectural projects spanning residential, cultural,
            community, and infrastructure typologies — each grounded in site-specific
            material thinking and human-centered design.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="sticky top-[68px] sm:top-[76px] z-40 bg-background/90 border-b border-line backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-6 md:px-10">
        <div class="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          <button
            v-for="cat in categories"
            :key="cat"
            class="shrink-0 font-accent text-[10px] font-medium tracking-[0.18em] uppercase px-4 py-2 transition-all duration-200 border"
            :class="activeCategory === cat
              ? 'bg-foreground text-background border-foreground'
              : 'text-muted border-transparent hover:border-line hover:text-foreground'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <section class="px-6 md:px-10 py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <!-- Count -->
        <p class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-subtle mb-10">
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'Project' : 'Projects' }}
        </p>

        <!-- Grid -->
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: (index % 3) * 100 } }"
            class="flex flex-col"
          >
            <ProjectCard :project="project" />
          </div>
        </div>

        <!-- Empty state -->
        <div
          v-if="filteredProjects.length === 0"
          class="py-24 text-center"
        >
          <p class="font-display text-2xl font-light text-muted">No projects in this category.</p>
          <button
            class="mt-6 font-accent text-[11px] tracking-[0.2em] uppercase text-accent hover:text-accent-deep"
            @click="activeCategory = 'All'"
          >
            View all projects
          </button>
        </div>
      </div>
    </section>

    <!-- Process Strip -->
    <section class="bg-surface px-6 md:px-10 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="mb-14 sm:mb-16 text-center">
          <p class="section-label mb-4">Process</p>
          <h2 class="font-display text-3xl sm:text-4xl font-light tracking-tight">
            How a project takes shape
          </h2>
        </div>

        <div class="relative">
          <!-- Connecting line (desktop only) -->
          <div class="hidden md:block absolute top-8 left-[calc(100%/8)] right-[calc(100%/8)] h-px bg-line" />

          <div class="grid gap-8 md:grid-cols-4">
            <div
              v-for="(phase, i) in processPhases"
              :key="phase.step"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 120 } }"
              class="relative text-center md:text-left"
            >
              <!-- Step number -->
              <div class="relative inline-flex h-16 w-16 items-center justify-center border border-line bg-background mb-5 mx-auto md:mx-0">
                <span class="font-accent text-xs font-bold tracking-widest text-accent">{{ phase.step }}</span>
              </div>
              <h3 class="font-display text-xl font-light mb-3">{{ phase.title }}</h3>
              <p class="font-sans text-xs leading-relaxed text-muted">{{ phase.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 md:px-10 py-24 sm:py-32 text-center">
      <div class="mx-auto max-w-xl">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="font-display text-4xl sm:text-5xl font-light leading-[1.06]"
        >
          Interested in<br />
          <em class="text-accent">working together?</em>
        </h2>
        <p class="mt-6 font-sans text-base text-muted">
          Let's discuss your site, vision, and what's possible.
        </p>
        <router-link
          to="/contact"
          class="group mt-10 inline-flex items-center gap-3 bg-foreground text-background font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300 hover:bg-accent"
        >
          Get in Touch
          <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h14M9 2l6 6-6 6" /></svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PROJECTS } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

const categories = ['All', 'Cultural', 'Residential', 'Community', 'Infrastructure', 'Commercial']
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return PROJECTS
  return PROJECTS.filter(p =>
    p.category.toLowerCase().includes(activeCategory.value.toLowerCase())
  )
})

const processPhases = [
  {
    step: '01',
    title: 'Site & Intent',
    desc: 'Site analysis, client dialogue, functional goals, and local context evaluation.',
  },
  {
    step: '02',
    title: 'Schematic Design',
    desc: 'Spatial diagrams, massing models, and material palette selections.',
  },
  {
    step: '03',
    title: 'Design Development',
    desc: 'Construction drawings, structural coordination, and technical specifications.',
  },
  {
    step: '04',
    title: 'Construction',
    desc: 'Active collaboration with builders to ensure design fidelity on site.',
  },
]
</script>
