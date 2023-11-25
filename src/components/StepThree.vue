<template>
    <div class="">
        <div class="w-full h-full flex flex-col">
            <div class="flex flex-col gap-1">
                <h1 class="heading">Pick add-ons</h1>
                <p class="body--lg text-grey">Add-ons help enhance your gaming experience.</p>
            </div>

            <div class="pt-8 flex flex-col gap-2">
                <add-on-item v-for="item in addOns" :key="item.id" :title="item.title" :description="item.description"
                    :price="item.price" :isActive="item.isActive" :id="item.id"
                    @checkAddOn="(event: string) => handleCheckAddOn(event)" />
            </div>

            <div class="flex justify-between mt-auto">
                <button-selector type="label" @click="handleGoBack()">Go Back</button-selector>
                <button-selector type="secondary" @click="handleNextStep()">Next Step</button-selector>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonSelector from './ButtonSelector.vue';
import AddOnItem from './AddOnItem.vue';
import { addOns } from '../data/addOns';

interface EmitInterface {
    (e: "handleNextStep"): void,
    (e: "handleGoBack"): void
}

const emit = defineEmits<EmitInterface>()

const handleNextStep = () => {
    emit("handleNextStep")
}

const handleGoBack = () => {
    emit("handleGoBack")
}

const handleCheckAddOn = (id: string) => {
    const newAddOns = addOns.value.map((item) => {
        if (item.id === id) return { ...item, isActive: !item.isActive }
        return item
    })

    addOns.value = newAddOns

}
</script>