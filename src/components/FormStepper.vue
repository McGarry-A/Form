<template>
    <div class="w-64 flex flex-col gap-8 bg-denim pl-8 pt-10 rounded-lg h-full bg-stepper-bg bg-cover bg-no-repeat">
        <form-step v-for="tab in props.tabs" :key="tab.id" :title="tab.title" :stepNumber="tab.stepNumber" :isActive="tab.isActive" :id="tab.id"  />
    </div>
</template>

<script setup lang="ts">
import FormStep from './FormStep.vue';
import { TabInterface } from '../types/tabs.interface';

interface Props {
  tabs: TabInterface[]
}

const props = defineProps<Props>()
</script>