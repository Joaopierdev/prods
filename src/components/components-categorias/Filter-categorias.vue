<script setup>

</script>

<template>
    <main class="content border-solid border-2 border-gray-200 shadow-lg rounded-lg">
        <div class="overflow-x-auto">
            <form class="filter flex flex-col lg:flex-row sm:space-x-4 max-w-sm mx-auto my-4">
                <div class="flex flex-col w-full sm:w-1/2">
                    <label for="number-input"
                        class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Código:</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="12345" />
                </div>
                <div class="flex flex-col w-full sm:w-1/2">
                    <label for="default-input" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
                    <input type="text" id="default-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Nome do produto">
                </div>
                <div class="flex flex-col w-full sm:w-1/2">
                    <label for="status" class="block text-sm font-medium text-gray-900 dark:text-white">
                        Status
                    </label>
                    <select id="status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option>Ativo</option>
                        <option>Inativo</option>
                    </select>
                </div>

                
                <div class="flex flex-col sm:flex-row justify-between items-center">
                    <button
                        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Filtrar
                    </button>
                </div>
            </form>
        </div>
    </main>
</template>

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
  margin-top: 2rem;
  width: 100%;
}

button {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>