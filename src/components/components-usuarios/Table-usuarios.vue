<script setup>
import { ref, onMounted } from 'vue';
import Pagination from '@/components/Pagination.vue';
import { FwbButton, FwbModal } from 'flowbite-vue'
import ModalEditUsuarios from "@/components/components-usuarios/Modal-edit-usuarios.vue";
import ModalRemoveUsuarios from "@/components/components-usuarios/Modal-remove-usuarios.vue";
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
        <div class="overflow-x-auto ">
        </div>
        <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
            <class class="filter-desktop">
            <main class="content border-solid border-2 border-gray-200 shadow-lg rounded-lg">
                <div class="overflow-x-auto">
                    <form class="filter flex flex-col lg:flex-row sm:space-x-4 max-w-sm mx-auto my-4" @submit.prevent="retrieveUsers()">
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="default-input"
                                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Apelido:</label>
                            <input type="text" id="default-input" 
                                v-model="filter.apelido"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="joao.silva">
                        </div>
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="default-input"
                                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">E-mail:</label>
                            <input type="text" id="default-input" 
                                v-model="filter.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="joao.silva">
                        </div>
                        <div class="flex flex-col w-full sm:w-1/2">
                            <label for="status" class="block text-sm font-medium text-gray-900 dark:text-white">
                                Status:
                            </label>
                            <select id="status" 
                                v-model="filter.status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <option>Selecione</option>
                                <option value="true">Ativo</option>
                                <option value="false">Inativo</option>
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
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" class="px-6 py-3">
                            E-mail
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Função
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">
                            <img class="w-12 mx-auto md:w-32 max-w-full max-h-full rounded-full"
                                :src="user.imagem ?? '/public/defaultNoImage.png'" :alt="user.nome">
                        </td>
                        <td class="px-6 py-4">
                            <div class="">
                                <div class="font-normal text-gray-900">{{ user.nome }}</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="">
                                <div class="font-normal text-gray-900">{{  user.email  }}</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="font-normal text-gray-900">{{ user.cargo }}</div>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <div class=" text-center w-20 mx-auto"
                                :class="user.status === true ? 'bg-green-100 text-gray-900 rounded-full' : 'bg-red-100 text-red-800 rounded-full'">
                                {{ user.status ? 'Ativo' : 'Inativo' }}
                            </div>
                        </td>
                        <td class="px-6 py-4 flex justify-center">
                            <!-- Modal toggle -->
                            <ModalEditUsuarios/>
                            <ModalRemoveUsuarios :id="user.id"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination />
    </main>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
    name: "users-list",
    data() {
        return {
            users: [],
            filter: {
                apelido: "",
                email: "",
                status: null
            }
        };
    },
    methods: {
        retrieveUsers() {
            UserDataService.getAll(this.filter.apelido, this.filter.email, this.filter.status)
                .then(response => {
                    this.users = response.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted() {
        this.retrieveUsers();
    }
}


</script>



<style scoped>

tr img{
    width: 50px;
    height: auto;
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