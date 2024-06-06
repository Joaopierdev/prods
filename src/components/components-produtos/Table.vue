<script setup>
import { ref, onMounted } from 'vue';
import produtosJson from '@/assets/data/produtos.json';
import Filter from "@/components/components-produtos/Filter.vue";
import FilterMobile from "@/components/components-produtos/Filter-mobile.vue";
import ModalRemove from "@/components/Modal-remove.vue";
import ModalEdit from "@/components/Modal-edit.vue";
import Pagination from "@/components/Pagination.vue";


var idSelecionado = ref();
// const produtos = ref([]);
// const preco = ref(0);

// onMounted(() => {
//     produtos.value = produtosJson.produtos;
// });

// function atualizaPreco(event) {
//     preco.value = event.target.value;
// }

</script>

<template>
    <main class="content">
        <class class="filter-desktop">
            <Filter />
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
                <tbody>
                    <tr v-for="(product, index) in products" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        

                        <td class="px-6 py-4">
                            <img class="w-12 mx-auto md:w-32 max-w-full max-h-full" :src="product.image ?? '/public/defaultNoImage.png'"
                             :alt="product.nome">
                        </td>

                        <td class=" font-medium text-gray-900 dark:text-white">{{ product.id }}</td>
                        <td class=" font-medium text-gray-900 dark:text-white">{{ product.nome }}</td>
                        <td class="mx-6 my-4">
                            <div style="" class="mx-4"
                                :class="product.status === true ? 'bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800  rounded-full dark:bg-red-900 dark:text-red-300'">
                                {{ product.status }}
                            </div>
                        </td>
                        <td class="">{{ product.categoria.nome }}</td>
                        <td class="">R${{ product.preco }}</td>
                        <td class="">{{ product.estoque }}</td>
                        <td class="justify-center flex">
                            <RouterLink to="#" class="font-medium w text-blue-600 dark:text-blue-500 hover:underline">
                                <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button">
                                    <svg class="w-6 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                                    </svg>
                                </button>
                                <ModalEdit />
                            </RouterLink>
                            <RouterLink to="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">
                                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">
                                    <svg class="w-4 h-4 text-red-100 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                    </svg>
                                </button>
                                <ModalRemove :id="product.id"/>
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

import ProductDataService from "@/services/ProductDataService";

export default {
  name: "products-list",
  data(){
    return {
      products: []
    };
  },
  methods: {
    retrieveProducts(){
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
  mounted(){
    this.retrieveProducts();
  }
}

</script>

<style scoped>

img{
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