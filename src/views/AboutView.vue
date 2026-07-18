<template>
  <!-- ──────────────────────────────────────────── -->
  <!-- SECTION 1 — INTRO HERO                      -->
  <!-- ──────────────────────────────────────────── -->
  <section class="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 md:px-12 lg:pb-32 lg:pt-40">
    <!-- Subtle background grid (matching HeroSection) -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="
        background-image:
          linear-gradient(rgba(26, 26, 26, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 26, 26, 0.3) 1px, transparent 1px);
        background-size: 48px 48px;
      "
    />

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-20 xl:gap-28">
        <!-- ── LEFT COLUMN (40%) ── -->
        <div class="flex flex-col justify-center">
          <!-- Label -->
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="font-accent mb-5 text-xs font-medium tracking-[0.3em] uppercase text-accent"
          >
            About
          </p>

          <!-- Headline -->
          <h1
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 150 },
            }"
            class="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Architecture rooted<br />
            <span class="text-accent">in place</span> and people.
          </h1>

          <!-- Body paragraphs -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 300 },
            }"
            class="mt-9 space-y-5 sm:mt-11"
          >
            <p class="font-sans text-base leading-relaxed text-muted sm:text-lg">
              My approach centers on context — climate, culture, and material
              honesty — before form. Rather than imposing a signature style, I
              begin each project by listening: to the site, to the local building
              traditions, and to the people whose lives the space will shape.
              Good architecture emerges when the designer steps back and lets the
              place speak.
            </p>
            <p class="font-sans text-base leading-relaxed text-muted sm:text-lg">Manjila Shrestha is an architect two years into practice, carrying this
              philosophy from her graduate thesis into every design she
              undertakes. She was recognised for her thesis project — <em>YakScape</em> — which
              reimagines architecture not as an object but as a catalyst for
              local livelihoods. The project exemplifies a conviction I carry
              into every project: that the most meaningful designs are those that
              serve communities first.
            </p>
          </div>

          <!-- Pull quote -->
          <blockquote
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 700, delay: 450 },
            }"
            class="relative mt-11 border-l-2 border-accent/40 pl-6 sm:mt-14"
          >
            <p
              class="font-display text-lg font-light italic leading-relaxed text-foreground/80 sm:text-xl"
            >
              &ldquo;I believe good architecture should quietly improve everyday
              life.&rdquo;
            </p>
            <footer class="mt-4 font-sans text-sm font-light text-subtle">
              &mdash; Manjila Shrestha, Architect
            </footer>
          </blockquote>
        </div>

        <!-- ── RIGHT COLUMN (60%) ── -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 60 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 1000, delay: 200 },
          }"
          class="relative flex items-start justify-center lg:pt-8"
        >
          <div class="relative w-full">
            <div
              class="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-line/20"
            >
              <!--
                TODO: replace with a YakScape render or Manjila's portrait.
                Do not use stock / generic images here.
              -->
              <div class="aspect-[4/5] w-full bg-surface">
                <ImageLoader
                  src="/images/card.png"
                  alt="Manjila Shrestha — Architect"
                />
              </div>

              <!-- Geometric accent — thin border square -->
              <div
                class="pointer-events-none absolute top-6 right-6 hidden h-20 w-20 border border-white/20 sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SECTION DIVIDER ── -->
  <div class="mx-auto max-w-7xl px-6 md:px-12">
    <div class="h-px w-full bg-line" />
  </div>

  <!-- ──────────────────────────────────────────── -->
  <!-- SECTION 2 — FEATURED PROJECT (YakScape)     -->
  <!-- ──────────────────────────────────────────── -->
  <section class="relative px-6 py-24 sm:py-32 md:px-12 md:py-40">
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-14 sm:mb-20 md:mb-24"
      >
        <p
          class="font-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase text-accent"
        >
          Thesis Project
        </p>
        <h2
          class="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          YakScape
        </h2>
        <p
          class="mt-3 font-sans text-base font-light text-muted sm:text-lg"
        >
          A Sustainable Hub for Local Empowerment in Khahare, Ramechhap
        </p>
      </div>

      <!-- Image + text row — large image left, text right -->
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <!-- Image (left) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 150 },
          }"
          class="order-1"
        >
          <div
            class="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-line/20"
          >
            <!--
              TODO: replace with a YakScape render, site photo, or concept
              diagram. Do not use stock / generic images.
            -->
            <ImageLoader
              src="/images/card.png"
              alt="YakScape — conceptual view of the facility in Khahare, Ramechhap"
            />
          </div>
        </div>

        <!-- Text (right) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 250 },
          }"
          class="order-2 flex flex-col justify-center"
        >
          <div class="space-y-5">
            <p class="font-sans text-base leading-relaxed text-muted sm:text-lg">
              Khahare is a hilltop community in Ramechhap, Nepal, situated along
              an alternative trekking route toward Lukla and Everest Base Camp.
              The area holds strong but underused potential in yak cheese
              production — a craft passed down through generations that could
              sustain local families if given the right infrastructure.
            </p>
            <p class="font-sans text-base leading-relaxed text-muted sm:text-lg">
              <em>YakScape</em> responds as a multifunctional facility: a
              heritage museum documenting traditional cheese-making knowledge,
              production and tasting spaces, a restaurant serving Sherpa cuisine,
              and visitor accommodation. Together these programmes create a
              closed loop — preserving cultural heritage while generating stable
              income for the community.
            </p>
            <p class="font-sans text-base leading-relaxed text-muted sm:text-lg">
              The design draws from a vernacular material palette of stone and
              timber, with sloped roofs responding to heavy seasonal snow loads.
              A framework of four principles &mdash; Living, Interaction,
              Production, and Experience Sharing &mdash; guided the spatial
              organisation, while site analysis accounted for topography, wind
              exposure, and seasonal grazing patterns.
            </p>
          </div>

          <!-- Metadata tags -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400 },
            }"
            class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-7"
          >
            <span
              v-for="tag in yakscapeTags"
              :key="tag.label"
              class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-subtle"
            >
              {{ tag.label }}:&nbsp;
              <span class="text-foreground/80">{{ tag.value }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SECTION DIVIDER ── -->
  <div class="mx-auto max-w-7xl px-6 md:px-12">
    <div class="h-px w-full bg-line" />
  </div>

  <!-- ──────────────────────────────────────────── -->
  <!-- SECTION 3 — VALUES                          -->
  <!-- ──────────────────────────────────────────── -->
  <section class="relative px-6 py-24 sm:py-32 md:px-12 md:py-40">
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-14 sm:mb-20"
      >
        <p
          class="font-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase text-accent"
        >
          Principles
        </p>
        <h2
          class="font-display text-3xl font-light tracking-tight sm:text-4xl"
        >
          What guides my work
        </h2>
      </div>

      <!-- Values grid -->
      <div class="grid gap-6 md:grid-cols-3 md:gap-8">
        <div
          v-for="(value, index) in values"
          :key="value.title"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 150 + index * 150 },
          }"
          class="group relative rounded-xl border border-line bg-card px-7 py-10 transition-all duration-500 hover:border-accent/20 hover:shadow-sm"
        >
          <!-- Top accent line that grows on hover -->
          <div
            class="absolute inset-x-0 top-0 h-px origin-left scale-x-0 rounded-full bg-accent/40 transition-transform duration-500 group-hover:scale-x-100"
          />

          <!-- Accent bar -->
          <div
            class="mb-7 h-px w-8 bg-accent/60 transition-all duration-500 group-hover:w-12 group-hover:bg-accent"
          />

          <h3
            class="font-display text-2xl font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent"
          >
            {{ value.title }}
          </h3>

          <p
            class="mt-4 font-sans text-sm leading-relaxed text-muted"
          >
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageLoader from '@/components/ImageLoader.vue'

const yakscapeTags = [
  { label: 'Location', value: 'Khahare, Ramechhap, Nepal' },
  { label: 'Type', value: 'Cultural / Community' },
  { label: 'Status', value: 'Thesis Project' },
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
