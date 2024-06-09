<script setup>
import { ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue'

const isShowModalDescription = ref(false)

function closeModalDescription() {
    isShowModalDescription.value = false
}
function showModalDescription() {
    isShowModalDescription.value = true
}
</script>

<template>
    <RouterLink to="#" class="font-medium  dark:text-blue-500 hover:underline">
        <fwb-button @click="showModalDescription" class="bg-transparent hover:bg-transparent focus:ring-0">
            <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>


        </fwb-button>
        <fwb-modal persistent class="custom-modal" v-if="isShowModalDescription" @close="closeModalDescription">
            <template #header>
                <div class="flex items-center text-lg text-gray-900">
                    Descrição
                </div>
            </template>

            <template #body>
                <div class="flex items-center text-xl justify-center align-center text-gray-900">
                    <h1 class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero explicabo odit
                        possimus ratione molestiae hic sed minus tempore ipsa tempora, enim perspiciatis cupiditate
                        impedit error similique temporibus iusto laboriosam!</h1>
                </div>

            </template>
            <template #footer>
                <div class="flex justify-between">

                    <fwb-button @click="closeModalDescription" color="blue">
                        Fechar
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </RouterLink>
</template>

<style scoped></style>