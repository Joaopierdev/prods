<script setup>
</script>

<template>
    <div class="sm:ml-64 ">
        <footer class="bg-gray-900 shadow">
            <div class="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
                <span class="text-md text-white sm:text-center">© {{new Date().getFullYear()}} <a href="https://flowbite.com/" class="hover:underline">PRODS™</a>. Todos os direitos reservados.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-md font-medium text-white sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Política de privacidade</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licença</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contate-nos</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>




    <!-- <div class="p-4 sm:ml-64">
        <div class="p-4">
            <div class="flex items-center justify-center h-48 mb-4 rounded">
                <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <RouterLink to="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    PRODS
                                </span>
                            </RouterLink>
                            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <RouterLink to="#" class="hover:underline me-4 md:me-6">
                                        About
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="#" class="hover:underline me-4 md:me-6">
                                        Privacy Policy
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="#" class="hover:underline me-4 md:me-6">
                                        Licensing
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="#" class="hover:underline">
                                        Contact
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © {{ new Date().getFullYear() }} 
                            <RouterLink to="https://flowbite.com/" class="hover:underline">
                                PRODS™
                            </RouterLink>
                            . Todos os direitos reservados.
                        </span> 
                    </div>
                </footer>
            </div>
        </div>
    </div> -->
</template>

<style>
    footer{
        position: relative;
    }
</style>