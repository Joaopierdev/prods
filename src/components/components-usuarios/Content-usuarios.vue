<script setup>
import Table from '@/components/components-usuarios/Table-usuarios.vue'
import TableMobile from '@/components/components-usuarios/Table-mobile.vue'
</script>

<template>
    <div class="p-8 sm:ml-64">
        <h1 class="text-4xl font-bold mb-4 sm:mb-1">Lista de Usuários</h1>
        <div class="table-desktop">
            <Table />
        </div>
        <div class="table-mobile">
            <TableMobile />
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin-top: 5rem;
}

.table-desktop {
    display: block;
    /* inline, inline-block */
}

.table-mobile {
    display: none;
}

@media(max-width: 901px) {
    .table-desktop {
        display: none;
    }

    .table-mobile {
        display: block;
        /* ou inline, inline-block */
    }
}
</style>