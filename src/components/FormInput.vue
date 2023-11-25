<template>
    <div class="flex flex-col gap-1">
        <p class="body--md">{{ props.label }}</p>
        <input v-bind="$attrs" class="border border-1 border-border-color py-3 px-4 rounded-lg w-full" />
    </div>
</template>

<script setup lang="ts">
    import { InputInterface } from '../types/input.interface';
    import { defineOptions } from 'vue'

    defineOptions({
        inheritAttrs: false
    })

    const props = defineProps<InputInterface>()
</script>