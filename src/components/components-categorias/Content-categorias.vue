<script setup>
import TableCategoria from "@/components/components-categorias/Table-Categorias.vue"
import TableMobileCategoria from "@/components/components-categorias/Table-mobile-categoria.vue"
</script>

<template>
    <div class="p-8 sm:ml-64">
        <h1 class="text-4xl font-bold mb-4 sm:mb-1">Lista de Produtos</h1>
        <div class="table-desktop">
            <TableCategoria/>
        </div>
        <div class="table-mobile">
            <TableMobileCategoria/>
        </div>

    </div>
</template>

<style scoped>

h1{
    margin-top: 5rem;
}

.table-desktop {
    display: block; /* inline, inline-block */
}
.table-mobile {
    display: none;
}

@media(max-width: 676px) {
    .table-desktop {
        display: none;
    }
    .table-mobile {
        display: block; /* ou inline, inline-block */
    }
}

</style>