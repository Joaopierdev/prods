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
    user: Object
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
                    Editar usuário
                </div>
            </template>

            <template #body class="mt-4">
                <div class="mt-4">
                    <label for="funcao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Imagem</label>
                    <input type="text" id="funcao"
                        v-model="user.imagem"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <div class="mt-4">
                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nome</label>
                    <input type="text" id="nome"
                        v-model="user.nome"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>

                <div class="mt-4">
                    <label for="status"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <select id="status"
                        v-model="user.status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option :value="null" selected>Selecionar status</option>
                        <option :value="true">Ativo</option>
                        <option :value="false">Inativo</option>
                    </select>
                </div>

                <div class="mt-4">
                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Apelido</label>
                    <input type="text" id="nome"
                        v-model="user.apelido"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>

                <div class="mt-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email</label>
                    <input type="text" id="email"
                        v-model="user.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                
                <div class="mt-4">
                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Senha</label>
                    <input type="password" id="nome"
                        v-model="user.senha"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>

                <div class="mt-4">
                    <label for="funcao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Função</label>
                    <input type="text" id="funcao"
                        v-model="user.cargo"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModalEdit" color="alternative">
                        Cancelar
                    </fwb-button>
                    <fwb-button @click="editUsers()" color="blue">
                        Salvar
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </RouterLink>
</template>


<script>
import UserDataService from "@/services/UserDataService";

export default {
    name: "users-update",
    methods: {
        editUsers() {
        var user = {
            status: this.user.status,
            nome: this.user.nome,
            cargo: this.user.cargo,
            apelido: this.user.apelido,
            email: this.user.email,
            senha: this.user.senha,
            imagem: this.user.imagem
        }

        console.log(user)
        UserDataService.editUser(this.user.id, user)
        .then(response => {
            alert("Usuário editado com sucesso");
            window.location.href="/usuarios"
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
        }
    }
    
}
</script>


<style scoped>
</style>