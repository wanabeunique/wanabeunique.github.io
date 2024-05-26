<script setup lang="ts">
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from '@/components/ui/tooltip'
  import GitHubIco from '@/public/github.svg'
</script>

<template>
  <footer class="border-t mt-10 justify-end">
    <div class="container flex justify-between items-center pt-5 pb-5">
      <p>CC BY-NC-SA 4.0</p> 
      <a href="https://github.com/wanabeunique" class="flex items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <GitHubIco src="github.svg" width="30"/>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>
