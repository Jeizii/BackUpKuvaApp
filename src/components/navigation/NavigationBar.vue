<script setup>
import {RouterLink} from 'vue-router'

</script>

<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/users">Käyttäjät</router-link>
    </div>



</template>

<style>

.nav {
    display: flex;
    justify-content: center;
    background-color: #b45e5e;
}
a {
    margin: 20px;
    font-size: 24px;
    float: left;
    color: #0c0c0c;
    text-align: center;
}



</style>