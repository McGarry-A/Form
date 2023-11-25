<template>
    <button :class="classes" class="rounded-lg px-4 py-3 cursor-pointer">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ButtonInterface } from '../types/button.interface';
import { computed } from '@vue/reactivity';

const props = defineProps<ButtonInterface>()

const classes = computed(() => {
    if (props.type === "primary") return 'bg-purple text-white'
    if (props.type === "secondary") return 'bg-denim text-white hover:bg-[#164A8A]'
    if (props.type === "label") return 'bg-transparent text-grey hover:bg-denim'
})
</script>