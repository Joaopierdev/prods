<script setup>
import Filter from '@/components/components-categorias/Filter-Categorias.vue';
import Pagination from '@/components/Pagination.vue';
import { ref, onMounted } from 'vue';
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

                        <th scope="col" class="px-6 py-3">Código</th>
                        <th scope="col" class="px-6 py-3">Nome</th>
                        <th scope="col" class="px-6 py-3">Status</th>
                        <th scope="col" class="px-6 py-3">Ações</th>
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
                                {{ category.status }}
                            </div>
                        </td>
                        <td class="flex items-center justify-center px-6 py-4">
                            <RouterLink to="#" class="font-medium  dark:text-blue-500 hover:underline">
                                <fwb-button @click="showModalDescription"
                                    class="bg-transparent hover:bg-transparent focus:ring-0">
                                    <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                        <path stroke="currentColor" stroke-width="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>


                                </fwb-button>
                                <fwb-modal persistent class="custom-modal" v-if="isShowModalDescription"
                                    @close="closeModalDescription">
                                    <template #header>
                                        <div class="flex items-center text-lg text-gray-900">
                                            Descrição
                                        </div>
                                    </template>

                                    <template #body>
                                        <div
                                            class="flex items-center text-xl justify-center align-center text-gray-900">
                                            <h1 class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero explicabo odit possimus ratione molestiae hic sed minus tempore ipsa tempora, enim perspiciatis cupiditate impedit error similique temporibus iusto laboriosam!</h1>
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
                            <RouterLink to="#" class="font-medium w text-blue-600 dark:text-blue-500 hover:underline">
                                <fwb-button @click="showModalEdit"
                                    class="bg-transparent hover:bg-transparent focus:ring-0">
                                    <svg class="w-6 h-6  text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                                    </svg>
                                </fwb-button>
                                <fwb-modal persistent class="custom-modal" v-if="isShowModalEdit"
                                    @close="closeModalEdit">
                                    <template #header>
                                        <div class="flex items-center text-lg">
                                            Editar categoria
                                        </div>
                                    </template>

                                    <template #body class="">
                                        <div>
                                            <label for="nome"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Nome</label>
                                            <input type="text" id="nome"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Iphone" required />
                                        </div>

                                        <div class="mt-4">
                                            <label for="status"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                            <select id="status"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Selecionar status</option>
                                                <option>Ativo</option>
                                                <option>Inativo</option>
                                            </select>
                                        </div>

                                        <div class="mt-4">
                                            <label for="descricao"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                                            <textarea id="descricao" rows="4"
                                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write your thoughts here..."></textarea>
                                        </div>

                                    </template>
                                    <template #footer>
                                        <div class="flex justify-between">
                                            <fwb-button @click="closeModalEdit" color="alternative">
                                                Cancelar
                                            </fwb-button>
                                            <fwb-button @click="closeModalEdit" color="blue">
                                                Salvar
                                            </fwb-button>
                                        </div>
                                    </template>
                                </fwb-modal>
                            </RouterLink>
                            <RouterLink to="#" class="font-medium  dark:text-blue-500 hover:underline">
                                <fwb-button @click="showModalRemove"
                                    class="bg-transparent hover:bg-transparent focus:ring-0">
                                    <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                    </svg>

                                </fwb-button>
                                <fwb-modal persistent class="custom-modal" v-if="isShowModalRemove"
                                    @close="closeModalRemove">
                                    <template #header>
                                        <div class="flex items-center text-lg text-red-600">
                                            Remover categoria
                                        </div>
                                    </template>

                                    <template #body>
                                        <div
                                            class="flex items-center text-2xl justify-center align-center text-gray-900">
                                            <h1 class="m-0">Tem certeza que deseja remover essa categoria?</h1>
                                        </div>

                                    </template>
                                    <template #footer>
                                        <div class="flex justify-between">
                                            <fwb-button @click="closeModalRemove" color="alternative">
                                                Cancelar
                                            </fwb-button>
                                            <fwb-button @click="closeModalRemove" color="red">
                                                Sim, remover!
                                            </fwb-button>
                                        </div>
                                    </template>
                                </fwb-modal>
                                <ModalRemove :id="category.id" />
                            </RouterLink>
                            
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