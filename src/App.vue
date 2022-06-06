<script setup>
import NavigationBar from './components/navigation/NavigationBar.vue';
import PublicationViewAll from './components/publication/PublicationViewAll.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  
<nav>

<navigation-bar></navigation-bar>

</nav>
  
  <navigation-bar></navigation-bar>
  <router-view></router-view>
  <publication-view-all></publication-view-all>
  
</template>

<style>

</style>