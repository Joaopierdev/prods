<script setup>
</script>

<template>
    <div class="p-8 sm:ml-64">
        <h1 class="text-4xl font-bold mb-4 sm:mb-1">Cadastro de categorias</h1>
        <div class="table-desktop">

            <form>
                <div>
                    <div class="categoria-status">
                        <label class="inline-flex mt-10 text-md font-bold items-center cursor-pointer">
                            <input type="checkbox" v-model="category.status" class="sr-only peer" checked>
                            <div
                                class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Categoria ativa</span>
                        </label>
                    </div>
                    <div class="categoria-nome">
                        <label for="categoria-nome" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">Nome da
                            categoria</label>
                        <input type="text" id="categoria-nome"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="category.nome" placeholder="Roupas e Bolsas" required />
                    </div>
                    <div class="categoria-descricao mb-6">
                        <label for="message"
                            class="block mb-2  mt-6 text-md font-bold text-gray-900 dark:text-white">Descrição
                            da categoria</label>
                        <textarea id="message" rows="4"
                            class="categoria-descricao block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="category.descricao" placeholder="Insira uma descrição para a sua categoria..."></textarea>
                    </div>
                    <div class="botoes">
                        <button type="button" class="salva-produto text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center" @click="saveCategory">Salvar categoria</button>
                        <RouterLink to="/categorias"><button type="button"  class="cancela-produto text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Cancelar inclusão</button></RouterLink>
                    </div>
                </div>
            </form>

        </div>
        <div class="table-mobile">
        </div>
    </div>
     
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService"

export default {
  name: "new-category",
  data(){
    return {
      category: {
        status: false,
        nome: "",
        descricao: ""
      },
    }
  },
  methods: {
    saveCategory() {
      var data = {
        status: this.category.status,
        nome: this.category.nome,
        descricao: this.category.descricao
      }

      console.log(data);
      CategoryDataService.create(data)
      .then(response => {
        this.category.id = response.data.id;
        alert("Categoria salva com sucesso");
        window.location.href="/categorias";
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
h1 {
    margin-top: 5rem;
}

.table-desktop {
    display: block;
    /* inline, inline-block */
}

.table-mobile {
    display: none;
}

/* @media(max-width: 676px) {
    .table-desktop {
        display: none;
    }

    .table-mobile {
        display: block;
        ou inline, inline-block
    }
} */
</style>