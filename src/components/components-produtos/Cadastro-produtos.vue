<script setup>
    import { ref, onMounted } from 'vue';
    import categoriasJson from '@/assets/data-categoria/categorias.json';

    const categorias = ref([]);

    onMounted(() => {
        categorias.value = categoriasJson.categorias;
    });
</script>

<template>
    <div class="p-8 sm:ml-64">
        <h1 class="text-4xl font-bold mb-4 sm:mb-1">Cadastro de produto</h1>
        <form>
            <div class="produto-dados md:grid-cols-2">
                <div class="produto-status ">
                    <label for="produto-status" class="block mb-2 mt-10 text-lg font-bold text-gray-900">Status</label>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="produto-status" value="" class="sr-only peer" checked>
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Produto ativo</span>
                    </label>
                </div>
                <div class="produto-nome">
                    <label for="produto-nome" class="block mb-2 mt-7 text-lg font-bold text-gray-900">Nome do produto</label>
                    <input type="text" id="produto-nome" class="bg-gray-50 border border-gray-900 text-gray-900 text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Iphone 15 Pro Max" required />
                </div>
                <div class="produto-descricao">
                    <label for="produto-descricao" class="block mb-2 mt-7 text-lg font-bold text-gray-900 dark:text-white">Descrição</label>
                    <textarea id="produto-descricao" rows="4" class="block p-2.5 w-full text-md font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insira uma descrição para o seu produto..."></textarea>
                </div>
                <div class="produto-categoria">
                    <label for="produto-categoria" class="block mb-2 mt-7 text-lg font-bold text-gray-900">Categoria</label>
                    <select id="produto-categoria" class="bg-gray-50 border border-gray-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option id="produto-opcoes" selected> Selecione </option>
                        <option id="produto-opcoes" v-for="categoria in categorias" :key="categoria.codigo" required    > {{ categoria.nome }} </option>
                    </select>
                </div>  
                <div class="produto-imagem">
                    <label for="produto-imagem" class="block mb-2 mt-7 text-lg font-bold text-gray-900">Imagem</label>
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clique para adicionar uma imagem</span> ou arraste e solte a imagem</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                <div class="produto-preco">
                    <label for="produto-preco" class="block mb-2 mt-7 text-lg font-bold text-gray-900">Preço</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>
                        </div>
                        <input type="number" id="produto-preco" class="block p-2.5 w-full z-20 ps-10 text-md font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Valor do produto" required />
                    </div>
                </div>
                <div class="produto-estoque">
                    <label for="produto-estoque" class="block mb-2 mt-7 text-lg font-bold text-gray-900">Estoque</label>
                    <div class="relative flex items-center max-w-[8rem]">
                        <button type="button" id="botao-decremento" data-input-counter-decrement="produto-estoque" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" id="produto-estoque" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5" placeholder="0" required />
                        <button type="button" id="botao-incremento" data-input-counter-increment="produto-estoque" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="botoes">
                <button type="submit" class="salva-produto text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Salvar produto</button>
                <button type="submit" class="cancela-produto text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Cancelar inclusão</button>
            </div>
        </form>
    </div>
</template>

<style>
h1{
    margin-top: 5rem;
}


.botoes{
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

</style>