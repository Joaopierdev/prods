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
                            <input type="checkbox" name="usuario-status" v-model="user.status" class="sr-only peer" checked>
                            <div
                                class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Usuário ativo</span>
                        </label>
                    </div>
                    <div class="usuario-nome">
                        <label for="usuario-nome" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">Nome do
                            usuário</label>
                        <input type="text" name="usuario-nome" v-model="user.nome" id="usuario-nome"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="João da Silva" required />
                    </div>
                    <div class="usuario-imagem">
                        <label for="usuario-imagem" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">Imagem do avatar</label>
                        <input type="text" name="usuario-imagem" v-model="user.imagem" id="usuario-imagem"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEOHapiwNsbqcfFVWp4AC39SLAzW5arXCvg&s"/>
                    </div> 
                    <div class="usuario-apelido">
                        <label for="usuario-apelido" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Apelido do
                            usuário</label>
                        <input type="text" id="usuario-apelido" name="usuario-apelido"
                            v-model="user.apelido"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="joao.analista" required />
                    </div>
                    <div class="usuario-cargo">
                        <label for="usuario-cargo" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Cargo
                        </label>
                        <input type="text" id="usuario-cargo" name="usuario-cargo"
                            v-model="user.cargo"
                            class="usuario-email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Analista de Suporte Técnico" required />
                    </div>
                    <div class="usuario-email">
                        <label for="usuario-email" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            E-mail
                        </label>
                        <input type="text" id="usuario-email" name="usuario-email"
                            v-model="user.email"
                            class="usuario-email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="joaodasilva@gmail.com" required />
                    </div>
                    <div class="usuario-senha">
                        <label for="usuario-senha" class="block mb-2 mt-10 text-md font-bold text-gray-900 dark:text-white">
                            Senha
                        </label>
                        <input type="password" id="usuario-senha" name="usuario-senha"
                            v-model="user.senha"
                            class="usuario-senha bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="*********" required />
                    </div>
                    <div class="botoes">
                        <button type="button" @click="saveUser()" class="salva-produto text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Salvar usuário</button>
                        <RouterLink to="/usuarios"><button type="button"  class="cancela-produto text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-900 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center">Cancelar inclusão</button></RouterLink>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserDataService from "@/services/UserDataService"

export default {
  name: "new-user",
  data(){
    return {
      user: {
        status: false,
        nome: null,
        cargo: null,
        apelido: "",
        email: "",
        senha: "",
        imagem: null
      },
    }
  },
  methods: {
    saveUser() {
      var data = {
        status: this.user.status,
        nome: this.user.nome,
        cargo: this.user.cargo,
        apelido: this.user.apelido,
        email: this.user.email,
        senha: this.user.senha,
        imagem: this.user.imagem
      }

      console.log(data);
      UserDataService.create(data)
      .then(response => {
        this.user.id = response.data.id;
        alert("Usuário salvo com sucesso");
        window.location.href="/usuarios";
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
}

.table-mobile {
    display: none;
}
</style>