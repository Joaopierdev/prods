<script setup>

</script>

<template>
    <section class="bg-gray-900 dark:bg-gray-900 flex items-center justify-center h-screen">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700 dark:bg-gray-800">
            <RouterLink to="https://flowbite.com" class="flex mt-4 text-black items-center justify-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-12 me-3" alt="FlowBite Logo" />
                <span class="self-center text-3xl font-bold  whitespace-nowrap dark:text-white">
                    PRODS
                </span>
            </RouterLink>
            <div class="p-6 space-y-4">

                <h1 class="text-xl mt-2 font-bold text-gray-900 md:text-2xl dark:text-white">
                    Login
                </h1>
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" class="input" placeholder="name@company.com"
                            required>
                    </div>
                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                        <input type="password" name="password" id="password" class="input" placeholder="••••••••"
                            required>
                    </div>
                    <div class="flex items-center justify-between">
                        <label for="remember" class="flex items-center text-sm text-gray-500 dark:text-gray-300">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required>
                            <span class="ml-2">Manter conectado</span>
                        </label>
                        <a href="#"
                            class="text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Esqueci minha senha</a>
                    </div>
                    <RouterLink to="/">
                        <button type="submit" class="btn-primary">Entrar</button>
                    </RouterLink>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Não tem uma conta? <a href="#"
                            class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Criar conta</a>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.input {
    background-color: #f7fafc;
    border-color: #e2e8f0;
    color: #1a202c;
    font-size: 0.875rem;
    padding: 0.625rem;
    border-radius: 0.375rem;
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
}

.input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    border-color: #3b82f6;
}

.btn-primary {
    background-color: #3b82f6;
    color: #ffffff;
    font-size: 0.875rem;
    padding: 0.625rem;
    border-radius: 0.375rem;
    width: 100%;
    text-align: center;
    outline: none;
}

.btn-primary:hover,
.btn-primary:focus {
    background-color: #2563eb;
}
</style>
