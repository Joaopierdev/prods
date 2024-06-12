<script setup>

import { ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue'


const isShowModalEdit = ref(false)

function closeModalEdit() {
    isShowModalEdit.value = false
}
function showModalEdit() {
    isShowModalEdit.value = true
}

defineProps({
    category: Object
})


</script>

<template>
    <RouterLink to="#" class="font-medium w text-blue-600 dark:text-blue-500 hover:underline">
        <fwb-button @click="showModalEdit" class="bg-transparent hover:bg-transparent focus:ring-0">
            <svg class="w-6 h-6  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
            </svg>
        </fwb-button>
        <fwb-modal persistent class="custom-modal" v-if="isShowModalEdit" @close="closeModalEdit">
            <template #header>
                <div class="flex items-center text-lg">
                    Editar categoria
                </div>
            </template>

            <template #body class="">
                <div>
                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nome</label>
                    <input type="text" id="nome"
                        v-model="category.nome"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>

                <div class="mt-4">
                    <label for="status"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <select id="status"
                        v-model="category.status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Selecionar status</option>
                        <option :value="true">Ativo</option>
                        <option :value="false">Inativo</option>
                    </select>
                </div>

                <div class="mt-4">
                    <label for="descricao"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <textarea id="descricao" rows="4"
                        v-model="category.descricao"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."></textarea>
                </div>

            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModalEdit" color="alternative">
                        Cancelar
                    </fwb-button>
                    <fwb-button @click="editCategories()" color="blue">
                        Salvar
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </RouterLink>
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService";

export default {
    name: "categories-update",
    methods: {
        editCategories() {
        var category = {
            status: this.category.status,
            nome: this.category.nome,
            descricao: this.category.descricao,
        }

        console.log(category)
        CategoryDataService.editCategory(this.category.id, category)
        .then(response => {
            alert("Categoria editada com sucesso");
            window.location.href="/categorias"
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
        }
    }
}
</script>



<style scoped></style>