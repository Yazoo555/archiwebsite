<template>
  <div class="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
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

    <!-- Ambient warm glow -->
    <div
      class="pointer-events-none absolute top-20 right-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.05]"
      style="background: radial-gradient(circle, #8b7355 0%, transparent 70%)"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
      <!-- ── HERO HEADER ── -->
      <div class="max-w-3xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="mb-4 flex items-center gap-3"
        >
          <span class="font-accent text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Contact & Commissions
          </span>
          <div class="h-px w-8 bg-accent/40" />
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 150 },
          }"
          class="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
        >
          Let's build something<br />
          <span class="text-accent font-serif italic">intentional</span> together.
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 300 },
          }"
          class="mt-6 font-sans text-base leading-relaxed text-muted sm:text-lg md:text-xl font-light"
        >
          Whether you are planning a residential project, a community-focused cultural space,
          or seeking advisory on sustainable architectural design — I provide direct 1-on-1 collaboration
          from initial concept to material reality.
        </p>

        <!-- Availability Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 400 },
          }"
          class="mt-8 inline-flex items-center gap-3 rounded-full border border-line/60 bg-surface/60 px-4 py-2 backdrop-blur-sm"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span class="font-sans text-xs font-medium tracking-wide text-foreground/80">
            Currently accepting select commissions for 2026 / 2027
          </span>
        </div>
      </div>

      <!-- ── MAIN TWO-COLUMN CONTENT GRID ── -->
      <div class="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16 xl:gap-24 sm:mt-20">
        <!-- ── LEFT COLUMN: DIRECT CONTACT DETAILS & BRAND INFO ── -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
          class="flex flex-col justify-between space-y-12"
        >
          <div class="space-y-10">
            <!-- Personal Architect Statement Card -->
            <div class="group relative rounded-2xl border border-line bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30">
              <div class="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent/80 via-accent-soft to-accent/40" />
              <p class="font-accent text-[10px] font-medium tracking-[0.25em] uppercase text-accent mb-3">
                Working with an Individual Architect
              </p>
              <blockquote class="font-display text-lg font-light leading-relaxed text-foreground/90 sm:text-xl">
                &ldquo;Direct communication ensures every detail honors your vision, the site's unique climate, and honest materials without distortion.&rdquo;
              </blockquote>
              <footer class="mt-4 flex items-center gap-3">
                <div class="h-px w-6 bg-accent" />
                <span class="font-sans text-xs font-light text-subtle">
                  Manjila Shrestha · Lead Architect
                </span>
              </footer>
            </div>

            <!-- Direct Contact Info Cards -->
            <div class="space-y-6">
              <h2 class="font-accent text-xs font-medium tracking-[0.3em] uppercase text-subtle">
                Direct Contact Channels
              </h2>

              <!-- Email block with Copy-to-Clipboard -->
              <div class="group relative overflow-hidden rounded-xl border border-line bg-card p-5 transition-colors duration-300 hover:border-accent/40">
                <div class="flex items-start justify-between gap-4">
                  <div class="space-y-1">
                    <span class="font-sans text-xs font-light text-subtle">Email</span>
                    <a
                      href="mailto:hello@manjilashrestha.com"
                      class="block font-sans text-base font-normal text-foreground transition-colors duration-200 hover:text-accent sm:text-lg break-all"
                    >
                      hello@manjilashrestha.com
                    </a>
                  </div>
                  <button
                    type="button"
                    class="mt-1 flex shrink-0 items-center gap-1.5 rounded-md border border-line/60 bg-surface px-3 py-1.5 font-accent text-[11px] font-medium tracking-wider uppercase text-muted transition-all duration-200 hover:border-accent hover:text-foreground active:scale-95"
                    @click="copyEmail"
                  >
                    <svg
                      v-if="!copied"
                      class="h-3.5 w-3.5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <svg
                      v-else
                      class="h-3.5 w-3.5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ copied ? 'Copied' : 'Copy' }}</span>
                  </button>
                </div>
              </div>

              <!-- Phone block -->
              <div class="rounded-xl border border-line bg-card p-5 transition-colors duration-300 hover:border-accent/40">
                <div class="space-y-1">
                  <span class="font-sans text-xs font-light text-subtle">Direct Line</span>
                  <a
                    href="tel:+15035550142"
                    class="block font-sans text-base font-normal text-foreground transition-colors duration-200 hover:text-accent sm:text-lg"
                  >
                    +1 (503) 555-0142
                  </a>
                </div>
              </div>

              <!-- Studio Practice & Coordinates -->
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-xl border border-line bg-card p-5">
                  <span class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                    Primary Studio
                  </span>
                  <p class="mt-2 font-sans text-sm font-medium text-foreground">Portland, Oregon</p>
                  <p class="font-sans text-xs font-light text-muted">120 NW 10th Ave</p>
                  <p class="mt-3 font-accent text-[10px] tracking-wider text-subtle/80">45.5231° N, 122.6765° W</p>
                </div>

                <div class="rounded-xl border border-line bg-card p-5">
                  <span class="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                    Cultural / Thesis Base
                  </span>
                  <p class="mt-2 font-sans text-sm font-medium text-foreground">Kathmandu / Ramechhap</p>
                  <p class="font-sans text-xs font-light text-muted">Nepal Practice</p>
                  <p class="mt-3 font-accent text-[10px] tracking-wider text-subtle/80">27.4833° N, 86.0667° E</p>
                </div>
              </div>
            </div>

            <!-- Social Connections -->
            <div>
              <h2 class="font-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase text-subtle">
                Connect & Follow
              </h2>
              <div class="flex flex-wrap gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 font-sans text-xs font-medium text-muted transition-all duration-300 hover:border-accent hover:text-foreground hover:shadow-sm"
                >
                  {{ social.label }}
                  <svg
                    class="h-3 w-3 text-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.2"
                  >
                    <path d="M3 9l6-6M5 3h4v4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Timezone & Response Note -->
          <div class="rounded-xl border border-line/70 bg-surface/50 p-5 backdrop-blur-sm">
            <div class="flex items-center gap-3">
              <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="font-sans text-xs font-medium text-foreground">Studio Hours & Response Time</p>
                <p class="font-sans text-xs font-light text-muted">
                  Monday &ndash; Friday · Pacific Time (UTC-7) &amp; NPT (UTC+5:45). Inquiries are acknowledged within 24&ndash;48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ── RIGHT COLUMN: INTERACTIVE INQUIRY FORM ── -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 350 },
          }"
          class="relative rounded-2xl border border-line bg-card p-6 sm:p-10 shadow-lg"
        >
          <!-- Accent Corner Line -->
          <div class="pointer-events-none absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
            <div class="absolute top-0 right-0 h-px w-16 bg-accent/60" />
            <div class="absolute top-0 right-0 h-16 w-px bg-accent/60" />
          </div>

          <!-- SUCCESS STATE OVERLAY -->
          <div
            v-if="formSubmitted"
            class="flex flex-col items-center justify-center py-12 text-center"
          >
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Message Received
            </h2>
            <p class="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted sm:text-base">
              Thank you, <span class="font-medium text-foreground">{{ formData.name }}</span>.
              Your inquiry regarding your <span class="font-medium text-foreground">{{ formData.projectType }}</span> project has been sent directly to Manjila Shrestha.
            </p>
            <p class="mt-2 font-sans text-xs font-light text-subtle">
              A copy of your message details has been logged. Expect a response shortly.
            </p>
            <button
              type="button"
              class="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-sans text-xs font-medium tracking-wide text-background transition-colors duration-300 hover:bg-accent"
              @click="resetForm"
            >
              Send Another Inquiry
            </button>
          </div>

          <!-- FORM STATE -->
          <form v-else class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <p class="font-accent text-xs font-medium tracking-[0.3em] uppercase text-accent mb-1">
                Initiate a Project
              </p>
              <h2 class="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Project Inquiry Form
              </h2>
              <p class="mt-1 font-sans text-xs font-light text-muted">
                Please share brief details about your vision, site location, or consultation needs.
              </p>
            </div>

            <!-- Name and Email Row -->
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="space-y-1.5">
                <label for="name" class="block font-sans text-xs font-medium text-foreground">
                  Your Name <span class="text-accent">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  class="w-full rounded-lg border border-line bg-background/50 px-4 py-3 font-sans text-sm text-foreground transition-all duration-200 placeholder:text-subtle/50 focus:border-accent focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent"
                  :class="{ 'border-red-400': errors.name }"
                />
                <p v-if="errors.name" class="font-sans text-[11px] text-red-500">{{ errors.name }}</p>
              </div>

              <div class="space-y-1.5">
                <label for="email" class="block font-sans text-xs font-medium text-foreground">
                  Email Address <span class="text-accent">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="e.g. maya@example.com"
                  class="w-full rounded-lg border border-line bg-background/50 px-4 py-3 font-sans text-sm text-foreground transition-all duration-200 placeholder:text-subtle/50 focus:border-accent focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent"
                  :class="{ 'border-red-400': errors.email }"
                />
                <p v-if="errors.email" class="font-sans text-[11px] text-red-500">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Project Type Selection (Interactive Pills) -->
            <div class="space-y-2">
              <label class="block font-sans text-xs font-medium text-foreground">
                Project Category <span class="text-accent">*</span>
              </label>
              <div class="flex flex-wrap gap-2 pt-1">
                <button
                  v-for="typeOption in projectTypes"
                  :key="typeOption"
                  type="button"
                  class="rounded-full px-3.5 py-1.5 font-sans text-xs transition-all duration-200 border"
                  :class="[
                    formData.projectType === typeOption
                      ? 'border-accent bg-accent text-white font-medium shadow-xs'
                      : 'border-line bg-surface/50 text-muted hover:border-accent/40 hover:text-foreground'
                  ]"
                  @click="formData.projectType = typeOption"
                >
                  {{ typeOption }}
                </button>
              </div>
            </div>

            <!-- Location & Timeline Row -->
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="space-y-1.5">
                <label for="location" class="block font-sans text-xs font-medium text-foreground">
                  Site / Location
                </label>
                <input
                  id="location"
                  v-model="formData.location"
                  type="text"
                  placeholder="e.g. Portland, OR / International"
                  class="w-full rounded-lg border border-line bg-background/50 px-4 py-3 font-sans text-sm text-foreground transition-all duration-200 placeholder:text-subtle/50 focus:border-accent focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div class="space-y-1.5">
                <label for="timeline" class="block font-sans text-xs font-medium text-foreground">
                  Target Timeline
                </label>
                <select
                  id="timeline"
                  v-model="formData.timeline"
                  class="w-full rounded-lg border border-line bg-background/50 px-4 py-3 font-sans text-sm text-foreground transition-all duration-200 focus:border-accent focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="Immediate (< 3 months)">Immediate (&lt; 3 months)</option>
                  <option value="3 - 6 months">3 &ndash; 6 months</option>
                  <option value="6 - 12 months">6 &ndash; 12 months</option>
                  <option value="Flexible / Early Planning">Flexible / Early Planning</option>
                </select>
              </div>
            </div>

            <!-- Budget Scope -->
            <div class="space-y-2">
              <label class="block font-sans text-xs font-medium text-foreground">
                Estimated Budget Range (Optional)
              </label>
              <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <button
                  v-for="budget in budgetOptions"
                  :key="budget"
                  type="button"
                  class="rounded-lg border px-3 py-2 text-center font-sans text-xs transition-all duration-200"
                  :class="[
                    formData.budget === budget
                      ? 'border-accent bg-accent/10 text-accent font-medium'
                      : 'border-line bg-surface/30 text-muted hover:border-line hover:text-foreground'
                  ]"
                  @click="formData.budget = budget"
                >
                  {{ budget }}
                </button>
              </div>
            </div>

            <!-- Message Textarea -->
            <div class="space-y-1.5">
              <label for="message" class="block font-sans text-xs font-medium text-foreground">
                Project Overview &amp; Vision <span class="text-accent">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="4"
                placeholder="Describe your site, functional goals, architectural preferences, or any specific questions..."
                class="w-full resize-y rounded-lg border border-line bg-background/50 px-4 py-3 font-sans text-sm text-foreground transition-all duration-200 placeholder:text-subtle/50 focus:border-accent focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent"
                :class="{ 'border-red-400': errors.message }"
              />
              <p v-if="errors.message" class="font-sans text-[11px] text-red-500">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-foreground px-8 py-4 font-sans text-sm font-medium tracking-wide text-background transition-all duration-300 hover:bg-accent disabled:opacity-70 cursor-pointer"
            >
              <span v-if="!isSubmitting" class="inline-flex items-center gap-2">
                Send Inquiry
                <svg
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span v-else class="inline-flex items-center gap-2">
                <svg class="h-4 w-4 animate-spin text-background" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing Inquiry...
              </span>
            </button>
          </form>
        </div>
      </div>

      <!-- ── SECTION DIVIDER ── -->
      <div class="my-20 sm:my-28">
        <div class="h-px w-full bg-line" />
      </div>

      <!-- ── COLLABORATION PROCESS & FAQS ── -->
      <div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="mb-12 max-w-2xl"
        >
          <p class="font-accent mb-2 text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Working Together
          </p>
          <h2 class="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Architectural Journey
          </h2>
          <p class="mt-3 font-sans text-base font-light text-muted">
            From initial dialogue to physical realization, every project progresses through structured, collaborative phases.
          </p>
        </div>

        <!-- 4-Phase Grid -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(phase, index) in processPhases"
            :key="phase.step"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: index * 120 },
            }"
            class="group relative rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
          >
            <div class="font-accent text-xs font-bold tracking-widest text-accent mb-4">
              {{ phase.step }}
            </div>
            <h3 class="font-display text-xl font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
              {{ phase.title }}
            </h3>
            <p class="mt-3 font-sans text-xs leading-relaxed font-light text-muted">
              {{ phase.description }}
            </p>
          </div>
        </div>

        <!-- Frequently Asked Questions Accordion -->
        <div class="mt-16 sm:mt-20">
          <h3 class="font-accent mb-8 text-xs font-medium tracking-[0.3em] uppercase text-subtle">
            Frequently Asked Questions
          </h3>

          <div class="space-y-4 max-w-4xl">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="overflow-hidden rounded-xl border border-line bg-card transition-colors duration-200"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-medium text-foreground sm:text-lg cursor-pointer"
                @click="toggleFaq(index)"
              >
                <span>{{ faq.question }}</span>
                <span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-transform duration-300"
                  :class="{ 'rotate-180 bg-accent text-white border-accent': activeFaq === index }"
                >
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                v-show="activeFaq === index"
                class="border-t border-line/60 bg-surface/30 px-5 py-4 font-sans text-sm leading-relaxed font-light text-muted"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const copied = ref(false)
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const activeFaq = ref<number | null>(0)

const projectTypes = [
  'Residential Architecture',
  'Cultural & Community',
  'Interior & Spatial',
  'Thesis / Advisory',
  'General Inquiry',
]

const budgetOptions = ['< $150k', '$150k - $500k', '$500k+', 'Undetermined']

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
]

const processPhases = [
  {
    step: '01',
    title: 'Site & Intent',
    description: 'Initial site analysis, dialogue on functional goals, local context, and feasibility evaluation.',
  },
  {
    step: '02',
    title: 'Schematic Design',
    description: 'Translating concepts into spatial diagrams, massing models, and vernacular material selections.',
  },
  {
    step: '03',
    title: 'Detailing & Craft',
    description: 'Developing construction drawings, structural coordination, and precise technical specifications.',
  },
  {
    step: '04',
    title: 'On-Site Oversight',
    description: 'Active collaboration with local builders and craftspeople to ensure design fidelity during construction.',
  },
]

const faqs = [
  {
    question: 'How does working with an individual architect differ from a large firm?',
    answer:
      'Working with an individual architect guarantees direct, single-point communication throughout every stage. You receive bespoke design attention tailored to your project without your work being handed down through layers of junior staff.',
  },
  {
    question: 'Do you take on international or remote projects outside of Oregon?',
    answer:
      'Yes. My thesis and practice combine work in Portland, Oregon with international projects in Nepal and beyond. For remote sites, I combine digital 3D modeling with targeted site visits and local builder collaborations.',
  },
  {
    question: 'What types of projects do you accept?',
    answer:
      'I specialize in custom residential homes, community-centered cultural facilities (drawing from thesis work like YakScape), interior transformations, and architectural design consultations.',
  },
  {
    question: 'How early should I reach out before starting construction?',
    answer:
      'Ideally 3 to 6 months prior to your intended construction start date. This allows thorough site analysis, iterative design development, and proper local permitting.',
  },
]

const formData = reactive({
  name: '',
  email: '',
  projectType: 'Residential Architecture',
  location: '',
  timeline: '3 - 6 months',
  budget: '$150k - $500k',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('hello@manjilashrestha.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (e) {
    // fallback if clipboard API is blocked
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  }
}

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const validate = () => {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!formData.name.trim()) {
    errors.name = 'Please enter your name'
    valid = false
  }

  if (!formData.email.trim() || !formData.email.includes('@')) {
    errors.email = 'Please enter a valid email address'
    valid = false
  }

  if (!formData.message.trim() || formData.message.length < 10) {
    errors.message = 'Please provide a short description (at least 10 characters)'
    valid = false
  }

  return valid
}

const handleSubmit = () => {
  if (!validate()) return

  isSubmitting.value = true

  // Simulate network request for form submission
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 1000)
}

const resetForm = () => {
  formSubmitted.value = false
  formData.name = ''
  formData.email = ''
  formData.projectType = 'Residential Architecture'
  formData.location = ''
  formData.message = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
}
</script>
