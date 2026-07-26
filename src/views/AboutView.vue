<template>
  <div>
    <!-- ─── PAGE HERO ─── -->
    <section class="relative px-6 md:px-10 pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <!-- Subtle grid -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(rgba(28,28,28,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,28,28,0.5) 1px, transparent 1px);
          background-size: 52px 52px;
        "
      />

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="grid gap-14 lg:grid-cols-[3fr_2fr] lg:gap-24 items-center">
          <!-- Left: Text -->
          <div>
            <p
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="section-label mb-6"
            >
              About
            </p>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
              class="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-[1.03] tracking-tight"
            >
              Architecture<br />
              rooted in<br />
              <em class="text-accent">place</em> and people.
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 24 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }"
              class="mt-8 font-sans text-base leading-relaxed text-muted max-w-lg"
            >
              My approach centers on context — climate, culture, and material
              honesty — before form. Rather than imposing a signature style,
              I begin each project by listening to the site, the local building
              traditions, and the people the space will serve.
            </p>

            <!-- Quote -->
            <blockquote
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
              class="relative mt-10 border-l-2 border-accent/40 pl-6"
            >
              <p class="font-display text-xl font-light italic leading-relaxed text-foreground/80">
                &ldquo;Good architecture should quietly improve everyday life.&rdquo;
              </p>
              <footer class="mt-3 font-sans text-xs font-light text-subtle">
                &mdash; Manjila Shrestha, Architect
              </footer>
            </blockquote>
          </div>

          <!-- Right: Portrait -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200 } }"
            class="relative"
          >
            <div class="relative overflow-hidden">
              <div class="aspect-[3/4] w-full max-h-[480px] sm:max-h-none bg-surface">
                <ImageLoader
                  src="/images/card.png"
                  alt="Manjila Shrestha — Architect"
                />
              </div>
              <!-- Geometric accent frame -->
              <div class="pointer-events-none absolute top-5 right-5 h-20 w-20 border border-accent/20" />
              <div class="pointer-events-none absolute bottom-5 left-5 h-20 w-20 border border-accent/20" />
            </div>
            <!-- Caption -->
            <p class="mt-4 font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-subtle text-center">
              Manjila Shrestha · Portland / Nepal
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STATS ─── -->
    <section class="bg-foreground px-6 md:px-10 py-14 sm:py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-background/10">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }"
            class="flex flex-col items-center py-6 px-4 text-center"
          >
            <span class="font-display text-3xl sm:text-4xl font-light text-background/95">{{ stat.value }}</span>
            <span class="mt-2 font-accent text-[9px] font-medium tracking-[0.2em] uppercase text-background/40">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SECTION DIVIDER ─── -->
    <div class="mx-auto max-w-7xl px-6 md:px-10">
      <div class="section-divider" />
    </div>

    <!-- ─── EDUCATION & EXPERIENCE TIMELINE ─── -->
    <section class="px-6 md:px-10 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <!-- Education -->
          <div>
            <p class="section-label mb-8">Education</p>
            <div class="space-y-0">
              <div
                v-for="(item, i) in education"
                :key="item.title"
                v-motion
                :initial="{ opacity: 0, x: -24 }"
                :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: i * 120 } }"
                class="relative pl-8 pb-10 border-l border-line last:border-transparent last:pb-0"
              >
                <!-- Timeline dot -->
                <div class="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-accent" />
                <span class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-accent">{{ item.year }}</span>
                <h3 class="font-display text-xl font-light mt-1.5 mb-1">{{ item.title }}</h3>
                <p class="font-sans text-sm text-subtle">{{ item.institution }}</p>
                <p v-if="item.note" class="mt-2 font-sans text-xs leading-relaxed text-muted">{{ item.note }}</p>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div>
            <p class="section-label mb-8">Experience</p>
            <div class="space-y-0">
              <div
                v-for="(item, i) in experience"
                :key="item.role"
                v-motion
                :initial="{ opacity: 0, x: 24 }"
                :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: i * 120 } }"
                class="relative pl-8 pb-10 border-l border-line last:border-transparent last:pb-0"
              >
                <div class="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-accent/50" />
                <span class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-accent">{{ item.period }}</span>
                <h3 class="font-display text-xl font-light mt-1.5 mb-1">{{ item.role }}</h3>
                <p class="font-sans text-sm text-subtle">{{ item.company }}</p>
                <p v-if="item.note" class="mt-2 font-sans text-xs leading-relaxed text-muted">{{ item.note }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SECTION DIVIDER ─── -->
    <div class="mx-auto max-w-7xl px-6 md:px-10">
      <div class="section-divider" />
    </div>

    <!-- ─── FEATURED THESIS PROJECT ─── -->
    <section class="px-6 md:px-10 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="mb-14 sm:mb-18"
        >
          <p class="section-label mb-4">Thesis Project</p>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            YakScape
          </h2>
          <p class="mt-3 font-sans text-base font-light text-muted">
            A Sustainable Hub for Local Empowerment in Khahare, Ramechhap
          </p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-start">
          <!-- Image -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -40 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 150 } }"
          >
            <div class="relative overflow-hidden aspect-[3/4] max-h-[520px] lg:max-h-none">
              <ImageLoader
                src="/images/yakscape.jpeg"
                alt="YakScape — conceptual view"
              />
            </div>
          </div>

          <!-- Text -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 40 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 250 } }"
            class="flex flex-col justify-center"
          >
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in yakscapeTags"
                :key="tag"
                class="font-accent text-[9px] font-medium tracking-[0.15em] uppercase border border-line px-2.5 py-1 text-subtle"
              >
                {{ tag }}
              </span>
            </div>

            <div class="space-y-5">
              <p class="font-sans text-base leading-relaxed text-muted">
                Khahare is a hilltop community in Ramechhap, Nepal, situated along
                an alternative trekking route toward Everest. The area holds strong
                but underused potential in yak cheese production — a craft passed
                down through generations that could sustain local families if given
                the right infrastructure.
              </p>
              <p class="font-sans text-base leading-relaxed text-muted">
                <em>YakScape</em> responds as a multifunctional facility: a heritage
                museum, production and tasting spaces, a Sherpa cuisine restaurant,
                and visitor accommodation — creating a closed loop that preserves
                cultural heritage while generating stable income for the community.
              </p>
              <p class="font-sans text-base leading-relaxed text-muted">
                The design draws from vernacular stone and timber, with sloped roofs
                responding to heavy seasonal snow. Four principles — Living,
                Interaction, Production, and Experience Sharing — guided the
                spatial organisation.
              </p>
            </div>

            <!-- Metadata -->
            <div class="mt-10 grid grid-cols-2 gap-4">
              <div
                v-for="meta in yakscapeMeta"
                :key="meta.label"
                class="border border-line p-4"
              >
                <span class="font-accent text-[9px] font-medium tracking-[0.2em] uppercase text-subtle">{{ meta.label }}</span>
                <p class="mt-2 font-sans text-sm font-medium text-foreground">{{ meta.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SECTION DIVIDER ─── -->
    <div class="mx-auto max-w-7xl px-6 md:px-10">
      <div class="section-divider" />
    </div>

    <!-- ─── PRINCIPLES ─── -->
    <section class="px-6 md:px-10 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mb-14 sm:mb-16">
          <p class="section-label mb-4">Principles</p>
          <h2 class="font-display text-3xl sm:text-4xl font-light tracking-tight">
            What guides my work
          </h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 + i * 120 } }"
            class="group relative border border-line bg-card p-8 transition-all duration-500 hover:border-accent/25 hover:shadow-sm"
          >
            <!-- Top accent line on hover -->
            <div class="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent/50 transition-transform duration-500 group-hover:scale-x-100" />
            <!-- Number -->
            <span class="font-accent text-xs font-bold tracking-widest text-accent/40 mb-6 block">{{ String(i + 1).padStart(2, '0') }}</span>
            <!-- Short bar -->
            <div class="mb-6 h-px w-8 bg-accent/60 transition-all duration-400 group-hover:w-14 group-hover:bg-accent" />
            <h3 class="font-display text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-accent">
              {{ value.title }}
            </h3>
            <p class="mt-4 font-sans text-sm leading-relaxed text-muted">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section class="bg-surface px-6 md:px-10 py-20 sm:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 class="font-display text-3xl sm:text-4xl font-light">
              Interested in collaborating?
            </h2>
            <p class="mt-4 font-sans text-base text-muted max-w-md">
              Let's discuss your project — residential, cultural, or community-focused.
            </p>
          </div>
          <div class="flex flex-wrap gap-4 shrink-0">
            <router-link
              to="/projects"
              class="inline-flex items-center gap-2 border border-foreground text-foreground font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              View Projects
            </router-link>
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 bg-accent text-background font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-300 hover:bg-accent-deep"
            >
              Get in Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ImageLoader from '@/components/ImageLoader.vue'

const stats = [
  { value: '2+', label: 'Years Practice' },
  { value: 'B.Arch', label: 'Degree' },
  { value: '6+', label: 'Projects' },
  { value: '2', label: 'Countries' },
]

const education = [
  {
    year: '2022',
    title: 'Bachelor of Architecture',
    institution: 'Tribhuvan University, Kathmandu',
    note: 'Thesis: YakScape — A Sustainable Hub for Local Empowerment',
  },
  {
    year: '2017',
    title: 'Higher Secondary',
    institution: 'Kathmandu, Nepal',
    note: 'Science stream with distinction.',
  },
]

const experience = [
  {
    period: '2023 – Present',
    role: 'Independent Practice',
    company: 'Portland, Oregon & Nepal',
    note: 'Residential, cultural, and community-focused projects across two countries.',
  },
  {
    period: '2022 – 2023',
    role: 'Junior Architect',
    company: 'Studio Practice, Kathmandu',
    note: 'Contributed to residential and mixed-use projects through design development and site documentation.',
  },
]

const yakscapeTags = ['Nepal', 'Cultural', 'Thesis 2024', 'Stone & Timber', 'Sustainable', 'Community']

const yakscapeMeta = [
  { label: 'Location', value: 'Khahare, Ramechhap, Nepal' },
  { label: 'Type', value: 'Cultural / Community' },
  { label: 'Status', value: 'Thesis Project' },
  { label: 'Year', value: '2024' },
]

const values = [
  {
    title: 'Context-First',
    description:
      'Every project begins with the site, climate, and community it serves. Understanding place precedes every design decision.',
  },
  {
    title: 'Material Honesty',
    description:
      'Vernacular and locally sourced materials over imported aesthetics. The building should belong to the land it stands on.',
  },
  {
    title: 'Human Impact',
    description:
      'Design measured by the livelihoods and daily life it supports, not just form. Architecture that serves people first.',
  },
]
</script>
