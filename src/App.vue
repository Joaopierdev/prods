<script setup>
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">

        <!-- LOGO -->
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-white-500 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>
          <a href="https://flowbite.com" class="flex ms-2 md:me-24 text-white">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">PRODS</span>
          </a>
        </div>
        <!-- Fim da logo -->

        <!-- Dados do usuário (Canto superior direito) -->
        <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <!-- Botão para exibir opções -->
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
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
                    <Router-Link To="/" class="block px-4 py-2 text-sm text-white hover:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Home</Router-Link>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
                <!--  -->
              </div>
              <!-- Final da dashboard -->
            </div>
          </div>
          <!-- Final dos dados do usuário -->
      </div>
    </div>
  </nav>
  <!-- Final navbar -->

  <!-- Sidebar -->
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-900 border-r border-gray- sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700" aria-controls="opcoes-produtos" data-collapse-toggle="opcoes-produtos">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Produtos</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="opcoes-produtos" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700">
                      Visualizar produtos</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700">
                      Cadastrar produtos</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700" aria-controls="opcoes-categorias" data-collapse-toggle="opcoes-categorias">
              <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
              </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Categorias</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="opcoes-categorias" class="hidden py-2 space-y-2">
                  <li>
                    <a href="#" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 m-1 group hover:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700">
                      <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
                      </svg>
                      <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Visualizar Categorias</span></a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 m-1 group hover:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700">
                      <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
                      </svg>
                      <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Cadastrar Categorias</span></a>
                  </li>
            </ul>
         </li>

          
        </ul>
    </div>
  </aside>
  <!-- Final sidebar -->
</template>

<style scoped>

</style>
