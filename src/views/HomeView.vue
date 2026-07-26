<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Brief Overview -->
    <section class="px-6 md:px-10 py-20 sm:py-28 lg:py-36 bg-surface">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <!-- Left: Statement -->
          <div>
            <p
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="section-label mb-6"
            >
              Studio
            </p>
            <h2
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 150 } }"
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.06] tracking-tight"
            >
              Architecture<br />
              rooted in <em class="text-accent">place</em><br />
              and people.
            </h2>
            <p
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
              class="mt-7 font-sans text-base leading-relaxed text-muted max-w-lg"
            >
              Based in Portland with roots in Nepal, Manjila Shrestha is an architect
              two years into independent practice. Every project begins with
              listening — to the site, local traditions, and the communities
              the space will serve.
            </p>
            <div
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }"
              class="mt-10"
            >
              <router-link
                to="/about"
                class="group inline-flex items-center gap-3 font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Learn More
                <svg class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 6h10M7 2l4 4-4 4"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Right: Feature highlights -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 40 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 900, delay: 200 } }"
            class="grid grid-cols-2 gap-4"
          >
            <div
              v-for="(item, i) in highlights"
              :key="item.label"
              class="group relative bg-card border border-line p-6 transition-all duration-400 hover:border-accent/30 hover:shadow-sm"
              :class="i === 0 ? 'col-span-2' : ''"
            >
              <div class="h-px w-6 bg-accent/60 mb-5 transition-all duration-400 group-hover:w-10 group-hover:bg-accent" />
              <span class="font-display text-xl font-light text-foreground leading-snug">{{ item.label }}</span>
              <p class="mt-2 font-sans text-xs leading-relaxed text-subtle">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="px-6 md:px-10 py-20 sm:py-28 lg:py-36">
      <div class="mx-auto max-w-7xl">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <p
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="section-label mb-4"
            >
              Selected Works
            </p>
            <h2
              v-motion
              :initial="{ opacity: 0, y: 28 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 150 } }"
              class="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight"
            >
              Featured Projects
            </h2>
          </div>
          <router-link
            v-motion
            :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1, transition: { duration: 600, delay: 300 } }"
            to="/projects"
            class="group shrink-0 inline-flex items-center gap-2.5 font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-muted border border-line px-5 py-2.5 transition-all duration-300 hover:border-foreground hover:text-foreground"
          >
            View All
            <svg class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 6h10M7 2l4 4-4 4"/></svg>
          </router-link>
        </div>

        <!-- Project Grid — 2 featured, then 1 full -->
        <div class="space-y-6">
          <!-- Top row: 2 cards -->
          <div class="grid gap-6 md:grid-cols-2">
            <div
              v-for="(project, index) in featuredProjects.slice(0, 2)"
              :key="project.id"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 + index * 150 } }"
            >
              <ProjectCard :project="project" />
            </div>
          </div>
          <!-- Bottom: 1 wide card -->
          <div
            v-if="thirdProject"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
          >
            <ProjectCard :project="thirdProject" layout="wide" />
          </div>
        </div>

        <!-- CTA -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="mt-14 text-center"
        >
          <router-link
            to="/projects"
            class="group inline-flex items-center gap-3 bg-foreground text-background font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300 hover:bg-accent"
          >
            Explore All Projects
            <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h14M9 2l6 6-6 6" /></svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Services / Skills -->
    <section class="px-6 md:px-10 py-20 sm:py-28 bg-foreground text-background">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
          <!-- Left -->
          <div>
            <p
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="font-accent text-[10px] font-medium tracking-[0.3em] uppercase text-accent-soft mb-6"
            >
              Services
            </p>
            <h2
              v-motion
              :initial="{ opacity: 0, y: 28 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 150 } }"
              class="font-display text-4xl sm:text-5xl font-light leading-[1.06]"
            >
              What I offer
            </h2>
            <p
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
              class="mt-6 font-sans text-sm leading-relaxed text-background/60 max-w-sm"
            >
              From initial concept to completion — direct, focused design attention
              without layers of bureaucracy.
            </p>
            <router-link
              to="/contact"
              class="group mt-10 inline-flex items-center gap-3 border border-background/20 text-background/80 font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300 hover:border-background/60 hover:text-background"
            >
              Start a Project
              <svg class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 6h10M7 2l4 4-4 4"/></svg>
            </router-link>
          </div>

          <!-- Right: Services grid -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            class="grid gap-px bg-background/10"
            style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));"
          >
            <div
              v-for="service in services"
              :key="service.title"
              class="group bg-foreground p-7 transition-colors duration-300 hover:bg-background/[0.06]"
            >
              <div class="text-2xl mb-4">{{ service.icon }}</div>
              <h3 class="font-display text-lg font-light text-background mb-2">{{ service.title }}</h3>
              <p class="font-sans text-xs leading-relaxed text-background/50">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="px-6 md:px-10 py-24 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="section-label mb-6"
        >
          Get in Touch
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 150 } }"
          class="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.06] tracking-tight"
        >
          Have a project in mind?<br />
          <em class="text-accent">Let's talk.</em>
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="mt-6 font-sans text-base text-muted leading-relaxed"
        >
          Currently accepting select commissions for 2026/2027.
          Reach out to discuss your site, vision, and goals.
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }"
          class="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <router-link
            to="/contact"
            class="group inline-flex items-center gap-3 bg-accent text-background font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300 hover:bg-accent-deep"
          >
            Start a Conversation
            <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h14M9 2l6 6-6 6" /></svg>
          </router-link>
          <a
            href="mailto:hello@manjilashrestha.com"
            class="inline-flex items-center font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-muted border-b border-muted/30 pb-1 transition-all duration-300 hover:text-foreground hover:border-foreground"
          >
            hello@manjilashrestha.com
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { PROJECTS } from '@/types/project'

const featuredProjects = PROJECTS.slice(0, 2)
const thirdProject = PROJECTS[2]

const highlights = [
  {
    label: 'Context-Driven Design',
    desc: 'Every project begins with site, climate, and community — never an imposed style.',
  },
  {
    label: 'Material Honesty',
    desc: 'Vernacular and locally sourced materials over imported aesthetics.',
  },
  {
    label: 'Human Impact',
    desc: 'Measured by the livelihoods and daily life the building supports.',
  },
]

const services = [
  { icon: '⬛', title: 'Architectural Design', desc: 'Full-service design from concept through construction documentation.' },
  { icon: '◈', title: 'Residential', desc: 'Custom homes tailored to site, climate, and the way you live.' },
  { icon: '◉', title: 'Cultural & Community', desc: 'Community hubs, cultural centres, and civic spaces.' },
  { icon: '◫', title: 'Interior & Spatial', desc: 'Thoughtful interiors that extend the architectural intent.' },
  { icon: '◍', title: 'Sustainable Design', desc: 'Low-impact strategies integrated from the first sketch.' },
  { icon: '◎', title: 'Advisory', desc: 'Consultation, feasibility reviews, and design guidance.' },
]
</script>
