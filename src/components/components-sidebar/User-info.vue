<script setup>
</script>

<template>
    <div class="flex items-center ms-3">
        <div>
            <!-- Botão para exibir opções -->
            <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">
                    Open user menu
                </span>
                <!-- Imagem usuário -->
                <img class="w-8 h-8 rounded-full" id="user-image" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
            <!--  -->
            </button>
        </div>
        <!--  -->
        <!-- Dashboard -->
        <div class="z-50 hidden my-4 text-base list-none bg-gray-900 divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
            <!-- Dados do usuário -->
            <div class="px-4 py-3" role="none">
                <!-- Nome do usuário -->
                <p class="text-sm text-white dark:text-white" id="user-name" role="none">
                    Neil Sims
                </p>
                <!--  -->
                <!-- E-mail do usuário -->
                <p class="text-sm font-medium text-white truncate dark:text-gray-300" id="user-email" role="none">
                    neil.sims@flowbite.com
                </p>
                <!-- -->
            </div>
            <!--  -->
            <!-- Opções da dashbord do usuário -->
            <ul class="py-1" role="none">
                <li>
                    <RouterLink to="/" class="block px-4 py-2 text-sm text-white hover:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/login" class="block px-4 py-2 text-sm text-white hover:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Sign out
                    </RouterLink>
                </li>
            </ul>
            <!--  -->
        </div>
        <!-- Final da dashboard -->
    </div> 
</template>

<style>
</style>