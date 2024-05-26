<script setup>
  import { useLoader } from '@/store/loader.store.ts' 
  const loader = useLoader()

  onMounted(() => {
    loader.value = false
  })
</script>

<template>
  <div class="content flex-1" v-if="loader.value == false">
    <Header/>
    <Model />
    <div class="container content__container mt-5 flex flex-column">
      <slot />
    </div>
    <Footer />
  </div>
  <div v-else class='flex place-items-center justify-center h-full'>
    <Loader />
  </div>
</template>

<style lang="scss" scoped>
  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    &__container{
      flex: 1 0 auto
    }
  }
</style>
