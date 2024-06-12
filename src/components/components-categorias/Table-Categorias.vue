<script setup>

import Pagination from '@/components/Pagination.vue';
import { ref, onMounted } from 'vue';
import ModalEditCategorias from "@/components/components-categorias/Modal-edit-categorias.vue";
import ModalRemoveCategorias from "@/components/components-categorias/Modal-remove-categorias.vue";
import ModalDescriptionCategorias from "@/components/components-categorias/Modal-description-categorias.vue";
import Filter from '@/components/components-categorias/Filter-Categorias.vue';

const isShowModalEdit = ref(false)

function closeModalEdit() {
    isShowModalEdit.value = false
}
function showModalEdit() {
    isShowModalEdit.value = true
}

const isShowModalRemove = ref(false)

function closeModalRemove() {
    isShowModalRemove.value = false
}
function showModalRemove() {
    isShowModalRemove.value = true
}

const isShowModalDescription = ref(false)

function closeModalDescription() {
    isShowModalDescription.value = false
}
function showModalDescription() {
    isShowModalDescription.value = true
}
</script>

<template>
    <main class="content">
        <class class="filter-desktop">
            <main class="content border-solid border-2 border-gray-200 shadow-lg rounded-lg">
                <div class="overflow-x-auto">
                    <form class="filter flex flex-col lg:flex-row sm:space-x-4 max-w-sm mx-auto my-4" @submit.prevent="retrieveCategories()">
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="default-input" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
                            <input type="text" id="default-input"
                                v-model="filter.nome"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Nome do produto">
                        </div>
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="status" class="block text-sm font-medium text-gray-900 dark:text-white">
                                Status
                            </label>
                            <select id="status"
                                v-model="filter.status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <option>Selecione</option>
                                <option>Ativo</option>
                                <option>Inativo</option>
                            </select>
                        </div>

                        
                        <div class="flex flex-col sm:flex-row justify-between items-center">
                            <button type="submit"
                                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Filtrar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </class>
        <div class="overflow-x-auto ">
        </div>
        <div class="relative overflow-x-auto border-solid border-2 border-indigo-600 sm:rounded-lg shadow-lg mt-6">
            <table class="table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3" style="width: 5%;" >Código</th>
                        <th scope="col" class="px-6 py-3" style="width: 30%;">Nome</th>
                        <th scope="col" class="px-6 py-3" style="width: 10%;">Status</th>
                        <th scope="col" class="px-6 py-3" style="width: 25%;">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category, index) in categories" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="font-medium text-gray-900 dark:text-white">{{ category.id }}</td>
                        <td class="font-medium text-gray-900 dark:text-white">{{ category.nome }}</td>
                        <td class="">
                            <div style="" class="mx-4"
                                :class="category.status === true ? 'bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800  rounded-full dark:bg-red-900 dark:text-red-300'">
                                {{ category.status  ? 'Ativo' : 'Inativo' }}
                            </div>
                        </td>
                        <td class="flex items-center justify-center px-6 py-4">
                            <ModalDescriptionCategorias/>
                            <ModalEditCategorias/>
                            <ModalRemoveCategorias :id="category.id"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination />
    </main>
</template>


<script>
import CategoriesDataService from "@/services/CategoryDataService";

export default {
    name: "categories-list",
    data() {
        return {
            categories: [],
            filter: {
                nome: "",
                status: null
            }
        };
    },
    methods: {
        retrieveCategories() {
            CategoriesDataService.getAll(this.filter.nome, this.filter.status)
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted() {
        this.retrieveCategories();
    }
}

</script>


<style scoped>
.content {
    width: 100%;
    margin: auto;
}

.max-w-sm {
    max-width: 100%;
}

.page-text {
    margin-top: 6rem;
    width: 100%;
    font-size: 2rem;
}

.filter {
    padding: 10px
}

.table {

    text-align: center;
}

button {
    justify-content: center;
    align-items: center;
    display: flex;
}


/* .filter-desktop {
    display: block;
}
.filter-mobile {
    display: none;
}

@media (max-width: 1022px) {
    .filter-desktop {
        display: none;
    }
    .filter-mobile {
        display: block;
    }
} */
</style>