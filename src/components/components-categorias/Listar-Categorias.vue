<script>
import CategoriesDataService from "@/services/CategoryDataService";

    export default {
        name: "categories-list",
        data() {
            return {
                categories: []
            };
        },
        methods: {
            retrieveCategories() {
                CategoriesDataService.getAll()
                .then(response => {
                    this.categories = response.data;
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
    <option id="produto-opcoes" v-for="(category, index) in categories" :key="index" > {{ category.nome }} </option>
</template>

<style>
</style>