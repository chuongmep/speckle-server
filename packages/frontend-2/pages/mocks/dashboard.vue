<template>
  <div>
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 my-8">
        <h1 class="h4 font-bold">Models</h1>
        <!-- <div
          class="rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-500 text-sm shadow hover:shadow-md transition px-4 py-1 cursor-pointer"
        >
          New +
        </div> -->
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MockModelCard v-for="model in models" :key="model.name" :model="model" />
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
      <div class="flex items-center justify-between gap-4 my-8">
        <div class="flex items-center gap-4">
          <h1 class="h4 font-bold">Projects</h1>
          <button
            class="rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-slate-800 hover:dark:bg-slate-900 text-blue-500 xxxdark:text-gray-500 text-sm shadow hover:shadow-md px-4 py-2 cursor-pointer transition"
          >
            New +
          </button>
        </div>
        <div>
          <FormTextInput placeholder="search" />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <MockProjectCard
          v-for="(project, i) in projects"
          :key="project.name + i"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const models = [
  {
    name: 'Office Building With A Really Long Name That Does Not Fit',
    previewUrl: 'https://latest.speckle.dev/preview/7d051a6449/commits/810f4e1bec',
    numVersions: 4
  },
  {
    name: 'Short',
    previewUrl: 'https://latest.speckle.dev/preview/7d051a6449/commits/270741bd70',
    numVersions: 20
  },
  {
    name: 'Import',
    previewUrl: 'https://latest.speckle.dev/preview/499056027e/commits/00f3a58cb6',
    numVersions: 10
  },
  {
    name: 'Import',
    previewUrl: 'https://latest.speckle.dev/preview/499056027e/commits/0bd399bdf8',
    numVersions: 2
  },
  {
    name: 'Sent something from Dynamo',
    previewUrl: 'https://latest.speckle.dev/preview/28dd9ad7ba/commits/8adba9f29c',
    numVersions: 2
  },
  {
    name: 'Cute Little Dragon',
    previewUrl: 'https://latest.speckle.dev/preview/28dd9ad7ba/commits/a819e40ce4',
    numVersions: 2
  },
  {
    name: 'Office Building With A Really Long Name That Does Not Fit',
    previewUrl: 'https://latest.speckle.dev/preview/7d051a6449/commits/810f4e1bec',
    numVersions: 4
  },
  {
    name: 'Short',
    previewUrl: 'https://latest.speckle.dev/preview/7d051a6449/commits/270741bd70',
    numVersions: 20
  }
]

const projects = [
  {
    name: 'My Pasta Project',
    modelCount: 3,
    role: 'contributor',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  },
  {
    name: 'HS3 School Thames on London',
    modelCount: 10,
    role: 'reviewer',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  },
  {
    name: 'Gaming assets and more',
    modelCount: 1,
    role: 'owner',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  },
  {
    name: 'My Pasta Project',
    modelCount: 4,
    role: 'contributor',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  },
  {
    name: 'Sheffield Random Boxes',
    modelCount: 20,
    role: 'owner',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  },
  {
    name: 'Super secret projects',
    modelCount: 121,
    role: 'contributor',
    editedAt: new Date().toLocaleDateString(),
    numContribs: Math.floor(Math.random() * 4) + 3
  }
]
</script>
