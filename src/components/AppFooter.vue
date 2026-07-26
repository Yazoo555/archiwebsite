<template>
  <footer class="bg-foreground text-background">
    <!-- Main footer content -->
    <div class="mx-auto max-w-7xl px-6 md:px-10 py-16 sm:py-20">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand column -->
        <div class="sm:col-span-2 lg:col-span-1">
          <router-link
            to="/"
            class="block mb-4"
            aria-label="Home"
          >
            <img
              src="/images/logo.png"
              alt="Manjila Shrestha"
              class="h-[44px] w-auto object-contain brightness-0 invert"
            />
          </router-link>
          <p class="font-sans text-sm font-light leading-relaxed text-background/50 max-w-xs">
            Architect based in Portland, working internationally on projects
            that seek honesty in material and clarity in space.
          </p>
          <!-- Availability badge -->
          <div class="mt-6 inline-flex items-center gap-2.5">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span class="font-accent text-[9px] font-medium tracking-[0.2em] uppercase text-background/40">
              Accepting commissions 2026/27
            </span>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-accent text-[9px] font-medium tracking-[0.3em] uppercase text-background/30 mb-6">
            Navigation
          </h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.to">
              <router-link
                :to="link.to"
                class="font-sans text-sm font-light text-background/60 transition-colors duration-300 hover:text-background"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-accent text-[9px] font-medium tracking-[0.3em] uppercase text-background/30 mb-6">
            Contact
          </h4>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:hello@manjilashrestha.com"
                class="font-sans text-sm font-light text-background/60 transition-colors duration-300 hover:text-background break-all"
              >
                hello@manjilashrestha.com
              </a>
            </li>
            <li>
              <span class="font-sans text-sm font-light text-background/40">
                Portland, Oregon
              </span>
            </li>
            <li>
              <span class="font-sans text-sm font-light text-background/40">
                Nepal Practice
              </span>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-accent text-[9px] font-medium tracking-[0.3em] uppercase text-background/30 mb-6">
            Follow
          </h4>
          <ul class="space-y-3">
            <li v-for="link in socialLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 font-sans text-sm font-light text-background/60 transition-colors duration-300 hover:text-background"
              >
                {{ link.label }}
                <svg
                  class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-background/30 group-hover:text-background"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                >
                  <path d="M3 9l6-6M5 3h4v4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="border-t border-background/10">
      <div class="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="font-sans text-[11px] font-light text-background/30">
          &copy; {{ currentYear }} Manjila Shrestha. All rights reserved.
        </p>
        <p class="font-accent text-[9px] font-medium tracking-[0.2em] uppercase text-background/20">
          Built with intention
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
]
</script>
