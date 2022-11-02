<template>
  <div class="min-h-full">
    <HeaderNavBar />
    <div class="py-14 container mx-auto">
      <slot />
    </div>
    <SingletonManagers />
  </div>
</template>
