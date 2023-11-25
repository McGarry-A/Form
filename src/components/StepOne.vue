<template>
    <div class="">
        <div class="w-full">
            <div class="flex flex-col gap-1">
                <h1 class="heading">Personal Info</h1>
                
                <p class="body--lg text-grey">Please provide your name, email address and phone number.</p>
            </div>
            
            <div class="pt-8 flex flex-col gap-4">
                <form-input label="Name" placeholder="Ahmed McGarry" />
                <form-input label="E-mail Address" placeholder="ahmedmcgarry@hotmail.com" />
                <form-input label="Phone Number" placeholder="07907733824" />
            </div>

            <div class="flex justify-end mt-14">
                <button-selector type="secondary" @click="handleNextStep()">Next Step</button-selector>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue';
import ButtonSelector from './ButtonSelector.vue';

const handleNextStep = () => {
    console.log("Next")
}
</script>