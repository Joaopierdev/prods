<script setup>
import { onMounted, ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue'

import ListaCategorias from "@/components/components-categorias/Listar-Categorias.vue";


const isShowModalEdit = ref(false)

function closeModalEdit() {
    window.location.reload();
    isShowModalEdit.value = false
    
}
function showModalEdit() {
    isShowModalEdit.value = true
}

defineProps({
    product: Object
})


</script>

<template>
    <RouterLink to="#" class="flex font-medium w text-blue-600 dark:text-blue-500 hover:underline h-36">
        <fwb-button @click="showModalEdit" class="bg-transparent hover:bg-transparent focus:ring-0 ">
            <svg class="w-6 h-6  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
            </svg>
        </fwb-button>
        <fwb-modal persistent class="custom-modal" v-if="isShowModalEdit" @close="closeModalEdit">
            <template #header>
                <div class="flex items-center text-lg">
                    Editar produto
                </div>
            </template>

            <template #body class="">
                <div>
                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nome</label>
                    <input type="text" id="nome"
                        :value="product.nome"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>

                <div class="mt-4">
                    <label for="status"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <select id="status"
                        v-model="product.status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option></option>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>
                </div>

                <div class="mt-4">
                    <label for="categoria"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <select id="categoria"
                        v-model="product.idCategoria"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Selecionar categoria</option>
                        <ListaCategorias />
                    </select>
                </div>

                <div class="mt-4">
                    <label for="preco"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                    <input type="number" id="preco" aria-describedby="helper-text-explanation"
                        v-model="product.preco"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="90210" required />
                </div>

                <div class="mt-4">
                    <label for="qtd-vendida"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estoque</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                        v-model="product.estoque"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="90210" required />
                </div>

            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModalEdit" color="alternative">
                        Cancelar
                    </fwb-button>
                    <fwb-button @click="editProduct()" color="blue">
                        Salvar
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </RouterLink>
</template>


<script>
import ProductDataService from "@/services/ProductDataService";

export default {
    name: "products-update",
    data(){
        return {
        
        }
    },
    created(){
console.log("Oi", {produto: this.product})
    },
    methods: {
        editProduct() {
        var product = {
            status: this.product.status,
            nome: this.product.nome,
            idCategoria: this.product.idCategoria,
            preco: this.product.preco,
            estoque: this.product.estoque
        }

        console.log(product)
        ProductDataService.editProduct(this.product.id, product)
        .then(response => {
            alert("Produto cadastrado com sucesso");
            window.location.href="/"
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