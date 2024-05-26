<script setup>
  import { PROJECTS_DATA } from './projects.data.ts'
  
  function getPhotoPath(path) {return "/projects/" + path}
</script>

<template>
  <div class="w-full">
    <p class="text-4xl">{{ $t('projects')}}</p>
    <ul class="flex flex-col gap-10 mt-5">
      <li class="relative w-full h-80 flex justify-center items-center" v-for="project in PROJECTS_DATA" key="project.name">
        <a :href="project.link" class="link">
          <NuxtImg :src="getPhotoPath(project.photo)" class="img" />
          <div class="relative z-10 p-5 bg-background rounded-xl">
            <p class="font-bold text-3xl">{{ $t("projects-page-" + project.name) }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .img{
    filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
