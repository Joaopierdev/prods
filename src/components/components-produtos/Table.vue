<script setup>
import { ref, onMounted } from 'vue';
import produtosJson from '@/assets/data/produtos.json';
import Filter from "@/components/components-produtos/Filter.vue";
import FilterMobile from "@/components/components-produtos/Filter-mobile.vue";
import ModalEdit from "@/components/components-produtos/Modal-edit-produtos.vue";
import ModalRemove from "@/components/components-produtos/Modal-remove-produtos.vue";
import Pagination from "@/components/Pagination.vue";
import { FwbButton, FwbModal } from 'flowbite-vue'


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

</script>

<template>
    <main class="content">
        <class class="filter-desktop">
            <main class="content border-solid border-2 border-gray-200 shadow-lg rounded-lg">
                <div class="overflow-x-auto">
                    <form class="filter flex flex-col lg:flex-row sm:space-x-4 max-w-sm mx-auto my-4">
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="number-input"
                                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Código:</label>
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="12345" />
                        </div>
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="default-input" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
                            <input type="text" id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Nome do produto">
                        </div>
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="status" class="block text-sm font-medium text-gray-900 dark:text-white">
                                Status
                            </label>
                            <select id="status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <option>Ativo</option>
                                <option>Inativo</option>
                            </select>
                        </div>

                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="status" class="block text-sm font-medium text-gray-900 dark:text-white">
                                Categoria
                            </label>
                            <select id="status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <option selected>Selecione</option>
                                <ListaCategorias />
                            </select>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-between items-center">
                            <button
                            
                                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Filtrar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </class>
        <class class="filter-mobile">
            <FilterMobile />
        </class>
        <div class="overflow-x-auto ">
        </div>
        <div class="relative overflow-x-auto border-solid border-2 border-indigo-600 sm:rounded-lg shadow-lg mt-6">
            <table class="table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-3"></th>
                        <th scope="col" class="px-6 py-3">Código</th>
                        <th scope="col" class="px-6 py-3">Nome</th>
                        <th scope="col" class="px-6 py-3">Status</th>
                        <th scope="col" class="px-6 py-3">Categoria</th>
                        <th scope="col" class="px-6 py-3">Preço</th>
                        <th scope="col" class="px-6 py-3">Quantidade</th>
                        <th scope="col" class="px-6 py-3">Ações</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr v-for="(product, index) in products" :key="index"
                        class="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">


                        <td class="px-6 py-4">
                            <img class="w-12 mx-auto md:w-32 max-w-full max-h-full"
                                :src="product.image ?? '/public/defaultNoImage.png'" :alt="product.nome">
                        </td>

                        <td class=" font-medium text-gray-900 dark:text-white">{{ product.id }}</td>
                        <td class=" font-medium text-gray-900 dark:text-white">{{ product.nome }}</td>
                        <td class="mx-6 my-4">
                            <div style="" class="mx-4"
                                :class="product.status === true ? 'bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 rounded-full dark:bg-red-900 dark:text-red-300'">
                                {{ product.status }}
                            </div>
                        </td>
                        <td class="">{{ product.categoria.nome }}</td>
                        <td class="">R${{ product.preco }}</td>
                        <td class="">{{ product.estoque }}</td>
                        <td class="acoes">
                            <ModalEdit />
                            <ModalRemove :id="product.id"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination />
    </main>
</template>

<script>

import ProductDataService from "@/services/ProductDataService";

export default {
    name: "products-list",
    data() {
        return {
            products: []
        };
    },
    methods: {
        retrieveProducts() {
            ProductDataService.getAll()
                .then(response => {
                    this.products = response.data.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted() {
        this.retrieveProducts();
    }
}

</script>

<style scoped>


.acoes {
    margin-top: 3.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

img {
    width: 7rem;
}

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


.filter-desktop {
    display: block;
    /* inline, inline-block */
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
        /* ou inline, inline-block */
    }
}
</style>