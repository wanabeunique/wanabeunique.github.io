<script setup>
  import { useLoader } from '@/store/loader.store.ts' 
  const loader = useLoader()

  onMounted(() => {
    loader.value = false
  })
</script>

<template>
  <div v-if="loader.value == false">
    <Header/>
    <Model />
    <div class="container">
      <slot />
    </div>
  </div>
  <div v-else class='flex place-items-center justify-center h-full'>
    <Loader />
  </div>
</template>
