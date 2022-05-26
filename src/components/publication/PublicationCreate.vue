<script setup>
import { reactive } from 'vue';

const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, // tarkoittaa julkista postausta
    tags: []
})

const createNewPublication = ()=>{

    console.log('created!')

}

</script>

<template>


    <div class="publication-form">
        <label>Otsikko</label>
        <input v-model="publicationData.title" type="text">
        
        <label>Kuvaus</label>
        <input v-model="publicationData.description" type="text">
        
        <label>URL</label>
        <input v-model="publicationData.url" type="text">

        <button @click='createNewPublication'>Lähetä</button>

        {{ publicationData }}
    </div>



</template>

<style scoped>
.publication-form{
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 200px;
    justify-content: center;

}

</style>