<template>
  <section class="relative min-h-dvh flex items-end overflow-hidden">
    <!-- Full-bleed background image with overlay -->
    <div class="absolute inset-0">
      <img
        src="/images/hero.jpg"
        alt="Architectural project"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Multi-layer gradient for readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/10" />
      <div class="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14 sm:pb-20 lg:pb-24 pt-28">
      <div class="max-w-4xl">
        <!-- Label -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="flex items-center gap-4 mb-8"
        >
          <span class="h-px w-10 bg-accent-soft" />
          <span class="font-accent text-[10px] font-medium tracking-[0.3em] uppercase text-background/70">
            Architectural Practice
          </span>
        </div>

        <!-- Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 900, delay: 300 } }"
          class="font-display text-5xl font-light leading-[1.02] tracking-tight text-background sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Designing the<br />
          <em class="not-italic text-accent-soft">built world</em><br />
          with intention.
        </h1>

        <!-- Sub -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
          class="mt-7 max-w-xl font-sans text-base leading-relaxed text-background/70 sm:text-lg font-light"
        >
          Architect committed to structural clarity, material honesty,
          and spaces that serve both people and planet.
        </p>

        <!-- CTAs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 700 } }"
          class="mt-10 flex flex-wrap items-center gap-4"
        >
          <router-link
            to="/projects"
            class="group inline-flex min-h-[48px] items-center gap-3 bg-background text-foreground font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3.5 transition-all duration-300 hover:bg-accent hover:text-background"
          >
            View Work
            <svg
              class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
            to="/about"
            class="group inline-flex min-h-[48px] items-center gap-2 border border-background/30 text-background/80 font-accent text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3.5 transition-all duration-300 hover:border-background/70 hover:text-background"
          >
            About Me
          </router-link>
        </div>
      </div>

      <!-- Stats bar -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 900 } }"
        class="mt-16 sm:mt-20 flex flex-wrap gap-x-10 gap-y-6 border-t border-background/15 pt-8"
      >
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
          <span class="font-display text-3xl sm:text-4xl font-light text-background/95">{{ stat.value }}</span>
          <span class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-background/50">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
      <span class="font-accent text-[9px] tracking-[0.3em] uppercase text-background/40 rotate-90 origin-center mb-6">Scroll</span>
      <div class="w-px h-12 bg-background/20 relative overflow-hidden">
        <div class="absolute top-0 w-full h-full bg-background/60 animate-scroll-line" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '2+', label: 'Years Practice' },
  { value: 'B.Arch', label: 'Degree' },
  { value: '8+', label: 'Projects' },
  { value: 'Nepal / US', label: 'Based' },
]
</script>

<style scoped>
@keyframes scrollLine {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

.animate-scroll-line {
  animation: scrollLine 2s ease-in-out infinite;
}
</style>
