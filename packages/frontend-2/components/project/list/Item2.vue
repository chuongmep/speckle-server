<template>
  <!-- <div
    class="grid grid-cols-1 md:grid-cols-5 my-4 gap-4 p-6 border-2 border-foundation-2 hover:border-foundation-2 bg-foundation hover:bg-foundation-2 rounded-2xl transition"
  > -->
  <div
    class="grid grid-cols-5 my-4 gap-4 p-4 border-2 border-foundation-2 hover:bg-foundation-2 rounded-xl transition"
  >
    <div
      class="group col-span-5 md:col-span-1 flex flex-col space-y-4 content-between cursor-pointer"
    >
      <div class="text-2xl font-bold flex-grow">
        <div class="group-hover:text-primary">{{ project.name }}</div>
        <AvatarGroup :num-avatars="project.team.length" class="mt-2" />
      </div>
      <div class="flex-none text-foreground-2">
        <div class="caption flex items-center mb-2">
          <CubeIcon class="w-4 h-4 mr-2" />
          {{ numModels }} models
        </div>
        <div class="caption flex items-center mb-2">
          <ClockIcon class="w-4 h-4 mr-2" />
          {{ project.editedAt }}
        </div>
      </div>
    </div>
    <div
      class="col-span-5 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="model in project.models.slice(0, numModels)"
        :key="model.name"
        class=""
      >
        <ModelCard :model="model" />
      </div>
      <div
        v-if="numModels < 4 && numModels > 0"
        class="flex items-center justify-center rounded-xl shadow-inner text-disabled h-56"
      >
        +
      </div>
      <div
        v-if="numModels === 0"
        class="flex items-center col-span-4 justify-center rounded-xl shadow-inner text-disabled h-56"
      >
        Send or upload
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import {
  RectangleGroupIcon,
  ChevronRightIcon,
  CubeIcon,
  ClockIcon
} from '@heroicons/vue/24/solid'
import { ProjectListItemFragmentFragment } from '~~/lib/common/generated/gql/graphql'
import { graphql } from '~~/lib/common/generated/gql'

// no need to store it in a const or export it, cause you can refer to it without
// importing it in queries
graphql(`
  fragment ProjectListItemFragment3 on Project {
    id
    name
    modelCount
    role
    editedAt
    models {
      name
      versionCount
      previewUrl
    }
    team {
      id
      name
      avatar
    }
  }
`)

const props = defineProps({
  project: {
    type: Object as PropType<ProjectListItemFragmentFragment>,
    required: true
  }
})

const numModels = 4
// const numModels = Math.floor(Math.random() * 4)
// const models = computed(() => {
//   return props.project.value?.models.splice(0, numModels)
// })
</script>
