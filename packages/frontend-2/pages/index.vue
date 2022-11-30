<template>
  <div>
    <!-- <NotificationsDashboardList /> -->
    <!-- <ModelDashboardList :num-models="Math.floor(Math.random() * 5 + 1)" /> -->
    <ProjectList :num-projects="Math.floor(Math.random() * 15 + 3)" />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Dashboard'
})
</script>
