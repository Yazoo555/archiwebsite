<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :style="{ transitionDelay: isScrolled ? '0.1s' : '0s' }"
    :class="[
      isScrolled
        ? 'bg-background/90 shadow-[0_1px_0_rgba(44,44,44,0.06)]'
        : 'bg-transparent',
    ]"
  >
    <!-- Backdrop blur — separate layer to avoid backdrop-filter creating a containing block for the fixed overlay -->
    <div
      class="absolute inset-0 -z-10 transition-opacity duration-500 pointer-events-none"
      :class="isScrolled ? 'opacity-100' : 'opacity-0'"
      style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
    />

    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
    >
      <!-- Logo -->
      <router-link to="/" class="block shrink-0">
        <img
          src="/images/logo.png"
          alt="Studio"
          class="h-[38px] w-auto sm:h-[46px] md:h-[58px] object-contain"
        />
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="hidden items-center gap-10 md:flex">
        <li v-for="link in routeLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="group relative font-sans text-sm font-light tracking-wide text-muted transition-colors duration-300 hover:text-foreground"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
            />
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="relative z-[60] flex flex-col h-11 w-11 items-center justify-center gap-[6px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileOpen"
        @click.stop="toggleMobileMenu"
      >
        <span class="hamburger-bar" :class="isMobileOpen ? 'rotate-45 translate-y-[8px]' : ''" />
        <span class="hamburger-bar" :class="isMobileOpen ? 'opacity-0' : 'opacity-100'" />
        <span class="hamburger-bar" :class="isMobileOpen ? '-rotate-45 -translate-y-[8px]' : ''" />
      </button>
    </nav>

    <!-- Mobile Menu Overlay (outside nav, inside header) -->
    <div
      class="mobile-overlay"
      :class="isMobileOpen ? 'is-open' : ''"
      @click.self="closeMobileMenu"
    >
      <!-- Nav links -->
      <nav class="relative z-10 flex flex-col items-center gap-8 sm:gap-10">
        <router-link
          v-for="(link, index) in routeLinks"
          :key="link.to"
          :to="link.to"
          class="menu-item font-display text-2xl sm:text-3xl font-light tracking-wide text-foreground hover:text-accent"
          :style="{ transitionDelay: isMobileOpen ? `${0.15 + index * 0.07}s` : '0s' }"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface RouteLink {
  label: string
  to: string
}

const routeLinks: RouteLink[] = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const headerRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const ENTER_SCROLL = 50   // px — scrolled state activates
const EXIT_SCROLL = 20    // px — scrolled state deactivates

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
  document.body.style.overflow = isMobileOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  const y = window.scrollY
  if (y > ENTER_SCROLL) {
    isScrolled.value = true
  } else if (y < EXIT_SCROLL) {
    isScrolled.value = false
  }
  // Between 20px and 50px — keep current state (hysteresis)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script><style scoped>
/* Hamburger bars */
.hamburger-bar {
  display: block;
  height: 2px;
  width: 20px;
  background-color: var(--color-foreground);
  transition: all 0.3s ease;
}

/* Mobile overlay — always in DOM, visibility toggled via class */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--color-background) 95%, transparent);
  backdrop-filter: blur(24px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              visibility 0.4s;
}

.mobile-overlay.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Menu items — quick leave (no stagger), slow enter (staggered via inline style) */
.menu-item {
  opacity: 0;
  transform: translateY(24px) scale(0.95);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.is-open .menu-item {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
