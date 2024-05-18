<script setup>
</script>

<template>
    <div class="p-8 sm:ml-64">
        <h1 class="text-4xl font-bold mb-4 mt-10 sm:mb-1">Cadastro de usuários</h1>
        <div class="table-desktop">
            <form>
                <div>
                    <div class="usuario-status">
                        <label class="usuario-status inline-flex mt-10 text-md font-bold items-center cursor-pointer">
                            <input type="checkbox" name="usuario-status" value="" class="sr-only peer" checked>
                            <div
                                class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Usuário ativo</span>
                        </label>
                    </div>
                    <div class="usuario-nome">
                        <label for="usuario-nome" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">Nome do
                            usuário</label>
                        <input type="text" name="usuario-nome" id="usuario-nome"
                            class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="João da Silva" required />
                    </div>
                    <div class="flex flex-col w-64">
                        <label for="usuario-nome" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">Imagem do avatar</label>
                        <label for="dropzone-file" class="flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clique para adicionar uma imagem</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                    <div class="usuario-apelido mb-6">
                        <label for="usuario-apelido" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Apelido do
                            usuário</label>
                        <input type="text" id="usuario-apelido" name="usuario-apelido"
                            class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="joao.analista" required />
                    </div>
                    <div class="usuario-cargo mb-6">
                        <label for="usuario-cargo" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Cargo
                        </label>
                        <input type="text" id="usuario-cargo" name="usuario-cargo"
                            class="usuario-email bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Analista de Suporte Técnico" required />
                    </div>
                    <div class="usuario-email mb-6">
                        <label for="usuario-email" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            E-mail
                        </label>
                        <input type="text" id="usuario-email" name="usuario-email"
                            class="usuario-email bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="joaodasilva@gmail.com" required />
                    </div>
                    <div class="usuario-senha mb-6">
                        <label for="usuario-senha" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Senha
                        </label>
                        <input type="password" id="usuario-senha" name="usuario-senha"
                            class="usuario-senha bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="*********" required />
                    </div>
                    <div class="botoes">
                        <button type="submit" class="salva-produto text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Salvar categoria</button>
                        <button type="submit" class="cancela-produto text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Cancelar inclusão</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="table-mobile">
        </div>

    </div>
</template>

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