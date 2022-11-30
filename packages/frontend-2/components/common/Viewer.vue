<template>
  <div ref="rendererparent" class="absolute bg-foundation-page h-screen w-screen"></div>
</template>

<script setup lang="ts">
import { getOrInitViewer } from '@/lib/viewer/composables/viewer'

const rendererparent = ref<HTMLElement>()

onMounted(async () => {
  const { container, viewer } = await getOrInitViewer()
  rendererparent.value?.appendChild(container as HTMLElement)
  viewer.resize()
  viewer.cameraHandler.onWindowResize()
  await viewer.loadObject(
    'https://latest.speckle.dev/streams/b5cc4e967c/objects/71ee1c07d9a1140b29c3f38df3f5fd1c'
  )
})
</script>

<style>
.viewer-container {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
