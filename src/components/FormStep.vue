<template>
  <div class="flex gap-4  items-center">
    <div
      class=" w-8 h-8 rounded-full border-1 border flex justify-center items-center font-bold "
      :class="{'bg-sky-blue border-sky-blue text-denim': props.isActive, 'bg-transparent text-white border-white':!props.isActive}"
      >
      {{ props.stepNumber }}
    </div>
    <div class="flex flex-col gap-1">
      <p class="body--sm uppercase text-light-blue font-extralight">Step {{ props.stepNumber }}</p>
      <p class="body--md font-bold uppercase text-white">{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { TabInterface } from "../types/tabs.interface"
    const props = defineProps<TabInterface>()
</script>
