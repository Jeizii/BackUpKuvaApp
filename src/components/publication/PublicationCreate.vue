<script setup>
import { reactive } from 'vue';
import { computed } from '@vue/reactivity';
const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, // tarkoittaa julkista postausta
    tags: []
})

const isDataValid = computed(()=>{

    const urlValidation = publicationData.url.includes('https://')
    const descriptionValidation = publicationData.description.length < 1000
    const titleValidation = publicationData.title.length > 2

    return {
        urlValidation: urlValidation ? 'OK' : 'Vain https osoitteet sallittu',
        descriptionValidation: descriptionValidation ? 'OK' : 'Kuvauksen teksti on liian pitkä',
        titleValidation: titleValidation ? 'OK' : 'Otsikon täytyy olla ainakin kolme merkkiä pitkä',
        isAllValid: urlValidation && descriptionValidation && titleValidation


    }
    
    
    
    
    
    //return !!(publicationData.title && publicationData.description && publicationData.url)
})

const createNewPublication = ()=>{
    if(!isDataValid.value.isAllValid) return

        publicationData.title = ''
        publicationData.description = ''
        publicationData.url = ''
    
        console.log('created!')

}

</script>

<template>

    <div class="publication-form">
        <label>Otsikko</label>
        <small> {{  isDataValid.titleValidation }}</small>
        <input v-model="publicationData.title" type="text">
        
        <label>Kuvaus</label>
        <small> {{  isDataValid.descriptionValidation }}</small>
        <input v-model="publicationData.description" type="text">
        
        <label>URL</label>
        <small> {{  isDataValid.urlValidation }}</small>
        <input v-model="publicationData.url" type="text">

        <button :disabled="isDataValid.isAllValid" @click='createNewPublication'>Lähetä</button>

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