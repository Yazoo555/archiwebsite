<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
    :class="[
      isScrolled
        ? 'bg-background/90 shadow-[0_1px_0_rgba(44,44,44,0.06)]'
        : 'bg-transparent',
    ]"
  >
    <!-- Backdrop blur — separate layer avoids backdrop-filter creating a fixed stacking context -->
    <div
      class="absolute inset-0 -z-10 transition-opacity duration-500 pointer-events-none"
      :class="isScrolled ? 'opacity-100' : 'opacity-0'"
      style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
    />

    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
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
          class="h-[38px] w-auto sm:h-[46px] md:h-[58px] object-contain"
        />
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="hidden items-center gap-10 md:flex" role="list">
        <li v-for="link in routeLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="nav-link group relative font-sans text-sm font-light tracking-wide text-muted transition-colors duration-300 hover:text-foreground"
            :class="{ 'is-active': isActive(link.to) }"
          >
            {{ link.label }}
            <!-- Underline — full width when active, hover-triggered otherwise -->
            <span
              class="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300"
              :class="isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="hamburger-btn relative z-[60] md:hidden"
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
        class="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-6"
        aria-label="Mobile navigation"
      >
        <router-link
          v-for="(link, index) in routeLinks"
          :key="link.to"
          :to="link.to"
          class="menu-item group relative font-display text-3xl sm:text-4xl font-light tracking-wide text-foreground"
          :class="{ 'is-active': isActive(link.to) }"
          :style="{ transitionDelay: isMobileOpen ? `${0.08 + index * 0.06}s` : '0s' }"
          @click="closeMobileMenu"
        >
          <!-- Active/hover underline accent -->
          <span
            class="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300"
            :class="isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'"
          />
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Subtle footer inside the mobile menu -->
      <p class="menu-footer absolute bottom-8 font-sans text-[10px] font-light tracking-[0.2em] uppercase text-subtle/50">
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
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const route = useRoute()
const headerRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const isMobileOpen = ref(false)

// ── Scroll state ──────────────────────────────────────────────────────────────
const ENTER_SCROLL = 50
const EXIT_SCROLL  = 20

const handleScroll = () => {
  const y = window.scrollY
  if (y > ENTER_SCROLL) isScrolled.value = true
  else if (y < EXIT_SCROLL) isScrolled.value = false
}

// ── Active route ──────────────────────────────────────────────────────────────
const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

// ── iOS scroll lock ───────────────────────────────────────────────────────────
// `overflow: hidden` on body alone does not prevent scrolling on iOS Safari.
// Locking the scroll position via `position: fixed` is the bulletproof approach.
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

// ── Menu open / close ─────────────────────────────────────────────────────────
const openMobileMenu = () => {
  isMobileOpen.value = true
  lockScroll()
}

const closeMobileMenu = () => {
  if (!isMobileOpen.value) return
  isMobileOpen.value = false
  unlockScroll()
}

/**
 * Using @pointerdown instead of @click eliminates the 300ms synthetic click
 * delay that browsers fire on touchscreen taps. We call .preventDefault() to
 * also suppress the subsequent mousedown → mouseup → click sequence that would
 * otherwise fire twice.
 */
const onHamburgerPointerDown = () => {
  isMobileOpen.value ? closeMobileMenu() : openMobileMenu()
}

// ── Keyboard accessibility ────────────────────────────────────────────────────
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileOpen.value) {
    closeMobileMenu()
  }
}

// ── Close on route change ─────────────────────────────────────────────────────
// Handles clicking a link that's already the current route (router won't
// emit a navigation event in that case, but the @click handler on the link
// fires, which calls closeMobileMenu directly — this watcher is a safety net).
watch(
  () => route.path,
  () => closeMobileMenu(),
)

// ── Lifecycle ─────────────────────────────────────────────────────────────────
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
/* ── Hamburger button ────────────────────────────────────────────────────── */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Explicit hit area — 44×44 px minimum per WCAG 2.5.5 */
  width: 44px;
  height: 44px;
  gap: 5px;
  border-radius: 6px;
  /* Prevent browser from treating this as a double-tap zoom target */
  touch-action: manipulation;
  /* No flash on tap */
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.hamburger-btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* ── Hamburger bars ──────────────────────────────────────────────────────── */
.hamburger-bar {
  display: block;
  height: 1.5px;
  width: 22px;
  border-radius: 1px;
  background-color: var(--color-foreground);
  /* Use individual properties instead of `all` for better GPU compositing */
  transition:
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    opacity   0.22s ease,
    width     0.22s ease;
  transform-origin: center;
  will-change: transform;
}

/* ── X animation — open state ─────────────────────────────────────────── */
/* Gap is 5px. Bar height is 1.5px. Centre-to-centre distance = 5 + 1.5 = 6.5px.
   Translating by 6.5px aligns bars perfectly before rotating 45°. */
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

/* ── Mobile overlay ──────────────────────────────────────────────────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Safe area padding for notched / Dynamic Island devices */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: color-mix(in srgb, var(--color-background) 97%, transparent);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  /* Hidden state */
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

/* ── Menu items ─────────────────────────────────────────────────────────── */
.menu-item {
  opacity: 0;
  transform: translateY(20px);
  /* Fast exit — no stagger */
  transition:
    opacity   0.18s ease,
    transform 0.18s ease,
    color     0.25s ease;
  color: var(--color-foreground);
}

.is-open .menu-item {
  opacity: 1;
  transform: translateY(0);
  /* Slow staggered entry — delay set via inline :style */
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

/* ── Menu footer ────────────────────────────────────────────────────────── */
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

/* ── Desktop nav active state ───────────────────────────────────────────── */
.nav-link.is-active {
  color: var(--color-foreground);
}
</style>
