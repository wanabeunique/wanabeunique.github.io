<script setup>
  import { useThemeStore } from "@/store/theme.store"
  import { useLanguageStore } from "@/store/language.store"
  import { HEADER_DATA } from "@/components/Header/Header.data" 

  const themeStore = useThemeStore()
  const languageStore = useLanguageStore()

  const { locale } = useI18n()

  function switchLang(lang) {
    locale.value = lang  
    languageStore.value = lang
  }

</script>

<template>
  <header class="border-b">
    <div class="flex justify-between container pt-5 pb-5 bg-background">
      <NuxtLink to="/"><h1 class="text-3xl">wanabeunique</h1></NuxtLink>
      <div class="flex place-items-center gap-5">
        <nav class="flex gap-3">
          <NuxtLink v-for="link in HEADER_DATA" :key="link.name" :to="link.url">{{ $t(link.name) }}</NuxtLink>
        </nav>
        <button @click="themeStore.toggleTheme()" >
          <NuxtImg v-if="themeStore.value == 'dark'" src="moon.svg" width="30"/>
          <NuxtImg v-else src="sun.svg" width="30"/>
        </button>
        <div class="flex gap-3">
          <button @click="switchLang('ru')"><NuxtImg src="/russia.png" width="30"/></button>
          <button @click="switchLang('en')"><NuxtImg src="/usa.png" width="30"/></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scope>
</style>
