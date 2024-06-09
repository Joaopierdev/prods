<script setup>
  import side from '@/components/components-sidebar/Sidebar.vue';
  import rodape from '@/components/Rodape.vue';
</script>

<template>
  <side v-if="!$route.meta.hideNavbar"/>

  
  <router-view/>

  <rodape v-if="!$route.meta.hideNavbar"/>
</template>

<style>
</style>




