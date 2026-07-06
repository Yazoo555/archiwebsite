<template>
  <footer
    class="border-t border-line px-6 py-12 sm:py-16 md:px-10 md:py-20"
  >
    <div class="mx-auto max-w-7xl">
      <div
        class="grid gap-12 md:grid-cols-3"
      >
        <!-- Brand -->
        <div class="md:col-span-1">
          <router-link
            to="/"
            class="font-accent text-sm font-medium tracking-[0.25em] uppercase transition-colors duration-300 hover:text-accent"
          >
            Studio
          </router-link>
          <p class="mt-4 font-sans text-sm font-light leading-relaxed text-muted max-w-xs max-sm:max-w-full">
            Architecture practice based in Portland, working internationally
            on projects that seek honesty in material and clarity in space.
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h4
            class="font-accent mb-5 text-[10px] font-medium tracking-[0.3em] uppercase text-subtle"
          >
            Contact
          </h4>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:hello@studio.com"
                class="font-sans text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
              >
                hello@studio.com
              </a>
            </li>
            <li>
              <span class="font-sans text-sm font-light text-muted">
                +1 (503) 555-0142
              </span>
            </li>
            <li>
              <span class="font-sans text-sm font-light text-muted">
                120 NW 10th Ave, Portland, OR
              </span>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4
            class="font-accent mb-5 text-[10px] font-medium tracking-[0.3em] uppercase text-subtle"
          >
            Social
          </h4>
          <ul class="space-y-3">
            <li v-for="link in socialLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 font-sans text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
              >
                {{ link.label }}
                <svg
                  class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                >
                  <path
                    d="M3 9l6-6M5 3h4v4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row"
      >
        <p class="font-sans text-xs font-light text-subtle">
          &copy; {{ currentYear }} Studio. All rights reserved.
        </p>
        <p class="font-sans text-[10px] font-light text-subtle/60">
          Built with intention
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
]
</script>
