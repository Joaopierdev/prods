<script setup>
    import Rodape from '@/components/Rodape.vue';
    import Produtos from '@/components/components-sidebar/Produtos.vue';
    import Categorias from '@/components/components-sidebar/Categorias.vue';
    import Usuarios from '@/components/components-sidebar/Usuarios.vue';
    import userInfo from '@/components/components-sidebar/User-info.vue';
    import Content from "@/components/components-produtos/Content.vue";
</script>

<template>
    <nav class="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <!-- LOGO -->
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-white-500 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">
                            Open sidebar
                        </span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <RouterLink to="/" class="flex ms-2 md:me-24 text-white">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                            PRODS
                        </span>
                    </RouterLink>
                </div>
                <!-- Fim da logo -->
                <!-- Dados do usuário (Canto superior direito) -->
                <div class="flex items-center">
                    <userInfo/>
                </div> 
            </div>
        </div>
    </nav>
  <!-- Final navbar -->
  <!-- Sidebar -->
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-900 border-r border-gray-800 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <Produtos/>
                <Categorias/>
                <Usuarios/>
            </ul>
        </div>
    </aside>
    <!-- <div class="content">
        <Content/>
    </div>
    
    <div class="rodape">
        <Rodape/>
    </div> -->
</template>


<style>

</style>