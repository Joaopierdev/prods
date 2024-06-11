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
            <Filter />
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
            categories: []
        };
    },
    methods: {
        retrieveCategories() {
            CategoriesDataService.getAll()
                .then(response => {
                    this.categories = response.data;
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