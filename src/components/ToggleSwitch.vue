<template>
    <label class="relative flex items-center cursor-pointer justify-center">
        <input type="checkbox" value="" class="sr-only peer" @change="$event => handleToggled($event)">
        <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
    </label>
</template>

<script setup lang="ts">
    type EmitType = (e: "toggled", val: boolean) => void
    const emits = defineEmits<EmitType>()

    const handleToggled = (event: Event) => {
        const target = event.target as HTMLInputElement
        emits("toggled", target.checked)
    }
</script>