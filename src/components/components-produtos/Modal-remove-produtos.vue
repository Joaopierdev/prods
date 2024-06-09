<script setup>
import { FwbButton, FwbModal } from 'flowbite-vue'
import { ref } from 'vue';

const isShowModalRemove = ref(false)

function closeModalRemove() {
    isShowModalRemove.value = false
}
function showModalRemove() {
    isShowModalRemove.value = true
}

const idProduct = defineProps(["id"])
const id = idProduct.id

</script>

<template>
    <RouterLink to="#" class="font-medium  dark:text-blue-500 hover:underline">
        <fwb-button @click="showModalRemove" class="bg-transparent hover:bg-transparent focus:ring-0">
            <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>

        </fwb-button>
        <fwb-modal persistent class="custom-modal" v-if="isShowModalRemove" @close="closeModalRemove">
            <template #header>
                <div class="flex items-center text-lg text-red-600">
                    Remover produto
                </div>
            </template>

            <template #body>
                <div class="flex items-center text-2xl justify-center align-center text-gray-900">
                    <h1 class="m-0">Tem certeza que deseja remover esse produto?</h1>
                </div>

            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModalRemove" color="alternative">
                        Cancelar
                    </fwb-button>
                    <fwb-button @click="removeProduct(id)" color="red">
                        Sim, remover!
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">

        </button>
        
    </RouterLink>

</template>

<script>
import ProductDataService from "@/services/ProductDataService";

export default {
  name: "products-delete",
  methods: {
    removeProduct(id){
        ProductDataService.deleteProduct(id)
        .then(response => {
            alert("Produto removido com sucesso")
            window.location.reload();
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        })
    }
  }
}

</script>