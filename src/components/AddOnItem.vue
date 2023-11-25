<template>
    <div class="p-4 flex items-center w-full gap-5 border-2 rounded-lg cursor-pointer"
        :class="{ 'bg-very-light-grey border-purple': isActive, 'bg-transparent border-border-color': !isActive }"
        @click="checkAddOn()">
        <div class="">
            <input type="checkbox" :checked="props.isActive" class="w-4 h-4" />
        </div>

        <div class="flex flex-col gap-2 flex-grow justify-center w-full">
            <p class="border-y-very-light-grey !font-bold text-denim">{{ props.title }}</p>
            <p class="body--md text-grey">{{ props.description }}</p>
        </div>

        <div class="h-full flex items-center">
            <p class="body--lg text-purple">+${{ props.price }}/mo</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AddOnsInterface } from "../types/addOns.interface"

interface EmitInterface {
    (e: "checkAddOn", id: string): void
}

const emit = defineEmits<EmitInterface>()
const props = defineProps<AddOnsInterface>()

const checkAddOn = () => {
    emit("checkAddOn", props.id)
}
</script>