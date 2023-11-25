<template>
  <div
    class="max-w-5xl w-full bg-white rounded-lg h-[560px] m-auto p-4 shadow-lg flex gap-24"
  >
    <form-stepper :tabs="tabs" />

    <component :is="getActiveTab()" class="flex h-full justify-center items-center flex-1 pr-20" />
  </div>
</template>

<script setup lang="ts">
import FormStepper from "./FormStepper.vue";
import StepOne from "./StepOne.vue";
import { ref, provide } from "vue";

const getActiveTab = () => {
  return StepOne;
};

const tabs = ref([
  {
    title: "Your Info",
    stepNumber: 1,
    isActive: true,
    id: 1,
  },
  {
    title: "Select Plan",
    stepNumber: 2,
    isActive: false,
    id: 2,
  },
  {
    title: "Add-Ons",
    stepNumber: 3,
    isActive: false,
    id: 3,
  },
  {
    title: "Summary",
    stepNumber: 4,
    isActive: false,
    id: 4,
  },
]);

provide('tabs', tabs)
</script>
