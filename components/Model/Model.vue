<script setup>
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { loadGLTFModel } from '@/functions/model'
  import * as THREE from 'three'

  const renderer = ref()
  const camera = ref()
  const target = ref(new THREE.Vector3(-0.5, 1.2, 0))
  const initialCameraPosition = ref(new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.sin(0.2 * Math.PI)
  ))
  const scene = ref(new THREE.Scene())
  const controls = ref()

  
</script>

<template>
  <div>

  </div>
</template>

<style lang="sass" scoped>

</style>
