<template>
  <div
    class="max-w-5xl w-full bg-white rounded-lg h-[560px] m-auto p-4 shadow-lg flex gap-24"
  >
    <form-stepper :tabs="tabs" />

<<<<<<< Updated upstream
    <component :is="getActiveTab()" class="flex h-full justify-center items-center flex-1 pr-20" />
=======
    <transition name="fade" mode="out-in">
        <component :is="getActiveTab(index)"  :key="index" class="flex h-full justify-center items-center flex-1 pr-20 py-8"
          @handleNextStep="handleNextStep()" @handleGoBack="handleGoBack()"/>
    </transition>
>>>>>>> Stashed changes
  </div>
</template>

<script setup lang="ts">
import FormStepper from "./FormStepper.vue";
import StepOne from "./StepOne.vue";
<<<<<<< Updated upstream
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
=======
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";

type MapKeys = keyof typeof map

const index = ref<MapKeys>(0)

const map = {
  0: StepOne,
  1: StepTwo,
  2: StepThree
}

const updateStepper = () => {
  const newTabs = tabs.value.map((tab, idx) => {
    if (idx === index.value) {
      return {...tab, isActive: true }
    }

    return { ...tab, isActive: false }
  })

  tabs.value = newTabs
}

const getActiveTab = (index: MapKeys) => {
  return map[index]
};

const handleNextStep = () => {
  if (index.value >= Object.keys(map).length - 1) {
    index.value = 0
  } else {
    index.value += 1
  }
  updateStepper()
}
>>>>>>> Stashed changes

provide('tabs', tabs)
</script>
