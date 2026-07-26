<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-background/92 shadow-[0_1px_0_rgba(44,44,44,0.08)]'
        : 'bg-transparent',
    ]"
  >
    <!-- Backdrop blur -->
    <div
      class="absolute inset-0 -z-10 transition-opacity duration-500 pointer-events-none"
      :class="isScrolled ? 'opacity-100' : 'opacity-0'"
      style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);"
    />

    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5"
      aria-label="Main navigation"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        aria-label="Home — Manjila Shrestha"
        @click="closeMobileMenu"
      >
        <img
          src="/images/logo.png"
          alt="Manjila Shrestha"
          class="h-[36px] w-auto sm:h-[42px] md:h-[52px] object-contain"
        />
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="hidden items-center gap-8 lg:flex" role="list">
        <li v-for="link in routeLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="nav-link group relative font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
            :class="{ 'is-active': isActive(link.to) }"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 origin-left"
              :class="isActive(link.to) ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'"
            />
          </router-link>
        </li>
      </ul>

      <!-- CTA + Hamburger -->
      <div class="flex items-center gap-4">
        <!-- Desktop CTA -->
        <router-link
          to="/contact"
          class="hidden lg:inline-flex items-center gap-2 bg-foreground text-background font-accent text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 hover:bg-accent"
        >
          Get in Touch
        </router-link>

        <!-- Mobile Menu Button -->
        <button
          class="hamburger-btn relative z-[60] lg:hidden"
          :class="{ 'is-open': isMobileOpen }"
          :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMobileOpen"
          aria-controls="mobile-menu"
          @pointerdown.prevent="onHamburgerPointerDown"
          @click.stop
        >
          <span class="hamburger-bar top-bar" aria-hidden="true" />
          <span class="hamburger-bar mid-bar" aria-hidden="true" />
          <span class="hamburger-bar bot-bar" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      :aria-hidden="!isMobileOpen"
      class="mobile-overlay"
      :class="isMobileOpen ? 'is-open' : ''"
    >
      <!-- Tap outside to close -->
      <div
        class="absolute inset-0"
        aria-hidden="true"
        @pointerdown="closeMobileMenu"
      />

      <!-- Nav links -->
      <nav
        class="relative z-10 flex flex-col items-center gap-5 sm:gap-7 px-6"
        aria-label="Mobile navigation"
      >
        <router-link
          v-for="(link, index) in routeLinks"
          :key="link.to"
          :to="link.to"
          class="menu-item group relative font-display text-3xl sm:text-4xl font-light tracking-wide text-foreground"
          :class="{ 'is-active': isActive(link.to) }"
          :style="{ transitionDelay: isMobileOpen ? `${0.06 + index * 0.05}s` : '0s' }"
          @click="closeMobileMenu"
        >
          <span
            class="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300"
            :class="isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'"
          />
          {{ link.label }}
        </router-link>

        <!-- Mobile CTA -->
        <router-link
          to="/contact"
          class="menu-item mt-4 inline-flex items-center bg-accent text-background font-accent text-xs font-medium tracking-[0.2em] uppercase px-8 py-3"
          :style="{ transitionDelay: isMobileOpen ? `${0.06 + routeLinks.length * 0.05}s` : '0s' }"
          @click="closeMobileMenu"
        >
          Get in Touch
        </router-link>
      </nav>

      <!-- Subtle footer inside mobile menu -->
      <p class="menu-footer absolute bottom-8 font-accent text-[10px] font-medium tracking-[0.25em] uppercase text-subtle/40">
        Manjila Shrestha · Architect
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

interface RouteLink {
  label: string
  to: string
}

const routeLinks: RouteLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

const route = useRoute()
const headerRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const ENTER_SCROLL = 40
const EXIT_SCROLL  = 16

const handleScroll = () => {
  const y = window.scrollY
  if (y > ENTER_SCROLL) isScrolled.value = true
  else if (y < EXIT_SCROLL) isScrolled.value = false
}

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

let scrollY = 0

const lockScroll = () => {
  scrollY = window.scrollY
  document.body.style.position  = 'fixed'
  document.body.style.top       = `-${scrollY}px`
  document.body.style.left      = '0'
  document.body.style.right     = '0'
  document.body.style.overflow  = 'hidden'
}

const unlockScroll = () => {
  document.body.style.position = ''
  document.body.style.top      = ''
  document.body.style.left     = ''
  document.body.style.right    = ''
  document.body.style.overflow = ''
  window.scrollTo({ top: scrollY, behavior: 'instant' })
}

const openMobileMenu = () => {
  isMobileOpen.value = true
  lockScroll()
}

const closeMobileMenu = () => {
  if (!isMobileOpen.value) return
  isMobileOpen.value = false
  unlockScroll()
}

const onHamburgerPointerDown = () => {
  isMobileOpen.value ? closeMobileMenu() : openMobileMenu()
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileOpen.value) {
    closeMobileMenu()
  }
}

watch(
  () => route.path,
  () => closeMobileMenu(),
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', onKeyDown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onKeyDown)
  unlockScroll()
})
</script>

<style scoped>
/* ── Hamburger button ── */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  gap: 5px;
  border-radius: 6px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.hamburger-btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* ── Hamburger bars ── */
.hamburger-bar {
  display: block;
  height: 1.5px;
  width: 22px;
  border-radius: 1px;
  background-color: var(--color-foreground);
  transition:
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    opacity   0.22s ease,
    width     0.22s ease;
  transform-origin: center;
  will-change: transform;
}

/* ── X animation ── */
.hamburger-btn.is-open .top-bar {
  transform: translateY(6.5px) rotate(45deg);
}

.hamburger-btn.is-open .mid-bar {
  opacity: 0;
  width: 0;
}

.hamburger-btn.is-open .bot-bar {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ── Mobile overlay ── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: color-mix(in srgb, var(--color-background) 96%, transparent);
  backdrop-filter: blur(24px) saturate(1.5);
  -webkit-backdrop-filter: blur(24px) saturate(1.5);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity     0.38s cubic-bezier(0.22, 1, 0.36, 1),
    visibility  0.38s step-end;
}

.mobile-overlay.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition:
    opacity     0.38s cubic-bezier(0.22, 1, 0.36, 1),
    visibility  0.38s step-start;
}

/* ── Menu items ── */
.menu-item {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity   0.18s ease,
    transform 0.18s ease,
    color     0.25s ease;
  color: var(--color-foreground);
}

.is-open .menu-item {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity   0.42s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    color     0.25s ease;
}

.menu-item.is-active {
  color: var(--color-accent);
}

.menu-item:not(.is-active):hover {
  color: var(--color-accent);
}

/* ── Menu footer ── */
.menu-footer {
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.is-open .menu-footer {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.32s;
}

/* ── Desktop nav active state ── */
.nav-link.is-active {
  color: var(--color-foreground);
}
</style>
