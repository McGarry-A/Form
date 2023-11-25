<template>
    <div class="">
        <div class="w-full h-full flex flex-col">
            <div class="flex flex-col gap-1 w-full">
                <h1 class="heading">Select Your Plan</h1>
                <p class="body--lg text-grey">You have the option of monthly or yearly billing.</p>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-8">
                <plan-item v-for="item in plans" :label="item.label" :isActive="item.isActive"
                    :monthlyPrice="item.monthlyPrice" :yearlyPrice="item.yearlyPrice" :freeMonths="item.freeMonths"
                    :icon="item.icon" :iconBg="item.iconBg" :id="item.id" :isMonthly="monthly" @updatePlan="($event: string) => handleUpdatePlan($event)"/>
            </div>

            <div class="flex justify-center mt-8 bg-very-light-grey py-4 items-center gap-4 rounded-lg">
                <p class="body--md !font-bold" :class="{ 'text-denim': monthly, 'text-grey': !monthly }">Monthly</p>
                <toggle-switch @toggled="($event: boolean) => handleToggle($event)" />
                <p class="body--md !font-bold" :class="{ 'text-grey': monthly, 'text-denim': !monthly }">Yearly</p>
            </div>

            <div class="flex justify-between mt-auto">
                <button-selector type="label" @click="handleGoBack()">Go Back</button-selector>
                <button-selector type="secondary" @click="handleNextStep()">Next Step</button-selector>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PlanItem from "./PlanItem.vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import ButtonSelector from "./ButtonSelector.vue";
import { plans } from "../data/plans";
import { ref } from "vue";

interface EmitInterface {
    (e: "handleNextStep"): void,
    (e: "handleGoBack"): void
}

const monthly = ref<boolean>(false)
const emits = defineEmits<EmitInterface>()

const handleToggle = (event: boolean) => {
    monthly.value = !event
}

const handleUpdatePlan = (id: string) => {
    const newPlan = plans.value.map(el => {
        if (el.id === id) return { ...el, isActive: true }
        return { ...el, isActive: false }
    })

    plans.value = newPlan
}

const handleNextStep = () => {
    emits("handleNextStep")
}

const handleGoBack = () => {
    emits("handleGoBack")
}
</script>

<style scoped></style>