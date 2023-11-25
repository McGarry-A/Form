<template>
    <component :is="getIcon()" class="w-14 h-14 p-2 rounded-full" />
</template>

<script setup lang="ts">
import Controller from "../components/Icons/Controller.vue";
import Remote from "../components/Icons/Remote.vue";
import Profile from "../components/Icons/Profile.vue";

const icons = {
        "Controller": Controller,
        "Remote": Remote, 
        "Profile": Profile
    }

const getIcon = () => {
    return icons[props.icon]
}

interface Props {
    icon: keyof typeof icons
}

const props = defineProps<Props>()

</script>