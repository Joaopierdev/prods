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
            <div
                class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search-users"
                        class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for users">
                </div>
            </div>
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
                            <ModalRemoveUsuarios/>
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
            users: []
        };
    },
    methods: {
        retrieveUsers() {
            UserDataService.getAll()
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