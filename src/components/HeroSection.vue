<template>
  <section
    class="relative flex min-h-dvh items-center overflow-hidden px-6 md:px-12"
  >
    <!-- Subtle background grid pattern -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="
        background-image:
          linear-gradient(rgba(26, 26, 26, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 26, 26, 0.3) 1px, transparent 1px);
        background-size: 48px 48px;
      "
    />

    <!-- Warm ambient glow -->
    <div
      class="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.06]"
      style="background: radial-gradient(circle, #8b7355 0%, transparent 70%)"
    />

    <div
      class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:gap-20 pt-20 sm:pt-24 lg:pt-0"
    >
      <!-- Left Column — Text Content -->
      <div
        class="flex-1 lg:max-w-[55%]"
      >
        <h1
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 },
          }"
          class="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          <span class="block">Designing the</span>
          <span class="block text-accent">built environment</span>
          <span class="block font-normal">with precision</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
          class="mt-6 sm:mt-8 max-w-lg font-sans text-base leading-relaxed text-muted sm:text-lg"
        >
          An architecture and engineering practice committed to structural
          clarity, material honesty, and spaces that serve both people and
          planet.
        </p>

        <!-- CTA -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 600 },
          }"
          class="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <router-link
            to="/projects"
            class="group inline-flex min-h-[44px] items-center gap-3 bg-foreground px-6 sm:px-8 py-2.5 sm:py-3.5 font-sans text-sm font-medium tracking-wide text-background transition-all duration-300 hover:bg-accent"
          >
            View Our Work
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 8h14M9 2l6 6-6 6" />
            </svg>
          </router-link>

          <router-link
            to="/contact"
            class="group inline-block min-h-[44px] py-2.5 font-sans text-sm font-light text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            Get in touch
            <span class="block h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </router-link>
        </div>

        <!-- Stats — centered, 50% larger -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 800 },
          }"
          class="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 border-t border-line pt-8 sm:pt-10"
        >
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
            <span class="font-accent text-2xl sm:text-3xl md:text-4xl font-medium text-foreground">{{ stat.value }}</span>
            <span class="font-sans text-xs sm:text-sm md:text-base font-light text-subtle mt-1.5 sm:mt-2 whitespace-nowrap">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right Column — loader.png image -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 60 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { duration: 1000, delay: 300 },
        }"
        class="relative flex w-full items-center justify-center lg:flex-1"
      >
        <img
          src="/images/loader.png"
          alt="Architectural project"
          class="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] h-auto object-contain drop-shadow-xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '12', label: 'Design Awards' },
]
</script>
