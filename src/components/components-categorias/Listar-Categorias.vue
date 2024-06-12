<script>
import CategoriesDataService from "@/services/CategoryDataService";

    export default {
        name: "categories-list",
        data() {
            return {
                categories: [],
                filter: {
                nome: "",
                status: null
            }
            };
        },
        methods: {
            retrieveCategories() {
                CategoriesDataService.getAll(this.filter.nome, this.filter.status)
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e);
                })
            }
        },
        mounted() {
            this.retrieveCategories();
        }
    }
</script>


<template>
    <option id="produto-opcoes" :value="category.id" v-for="(category, index) in categories" :key="index" > {{ category.nome }} </option>
</template>

<style>
</style>