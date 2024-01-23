<script setup>
  import { useThemeStore } from '@/store/theme.store' 
  import { useLanguageStore } from'@/store/language.store'  
  import { getData, setData } from 'nuxt-storage/local-storage';
  import { initTheme } from '@/functions/initTheme'
  
  const languageStore = useLanguageStore()
  const themeStore = useThemeStore()
  
</script>


<template>
  <div :class="{'dark-theme': themeStore.value == 'dark', 'full': true}">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
  .full{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    @apply h-screen;
  }
</style>
