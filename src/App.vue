<template>
  <div class="min-h-dvh bg-background">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <BackToTop />

    <LoadingScreen
      v-if="!showSite"
      @complete="showSite = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

const showSite = ref(false)
provide('showSite', showSite)
</script>
