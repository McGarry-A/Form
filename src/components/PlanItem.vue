<template>
    <div class="rounded-lg w-full h-[180px] items-stretch py-4 px-4 border border-1 flex flex-col cursor-pointer transition-all duration-150"
        :class="{ 'bg-very-light-grey border-purple': props.isActive, 'bg-transparent border-border-color': !props.isActive }"
        @click="handleUpdatePlan()">
        <icon-selector :icon="props.icon" :style="{ background: props.iconBg }" class="mb-auto" />
        <p class="body--lg text-denim mt-auto font-bold">{{ props.label }}</p>
        <p class="body--md text-grey">{{ price }}</p>
        <p class="body--sm text-denim">{{ props.freeMonths }} months free</p>
    </div>
</template>

<script setup lang="ts">
import IconSelector from "./IconSelector.vue";
import { PlanInterface } from "../types/plan.interface"
import { computed } from "@vue/reactivity";

type EmitType = (e: "updatePlan", id: string) => void

interface Props extends PlanInterface {
    isMonthly: boolean;
}

const props = defineProps<Props>()
const emits = defineEmits<EmitType>()

const handleUpdatePlan = () => {
    emits("updatePlan", props.id)
}

const price = computed(() => {
    return props.isMonthly ? `$${props.monthlyPrice}p/m` : `$${props.yearlyPrice}p/a`
})
</script>