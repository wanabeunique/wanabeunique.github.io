<template>
  <span class="loader"></span>
</template>

<style lang="scss" scoped>
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    box-sizing: border-box;
    animation: animloader 1s linear infinite alternate;
  }
  @keyframes animloader {
    0% {
      border-color: hsl(var(--foreground)) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    33% {
      border-color: hsl(var(--foreground)) hsl(var(--foreground)) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    66% {
      border-color: hsl(var(--foreground)) hsl(var(--foreground)) hsl(var(--foreground)) rgba(255, 255, 255, 0);
    }
    100% {
      border-color: hsl(var(--foreground)) hsl(var(--foreground)) hsl(var(--foreground)) hsl(var(--foreground));
    }
  } 
</style>
