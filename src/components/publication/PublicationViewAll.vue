<script setup>


import PublicationView from './PublicationView.vue';
import PublicationCreate from './PublicationCreate.vue';
import { publicationService } from '../../services/publicationService';

const {data, error, isFinished} = publicationService.useGetAll()

</script>

<template>
    <div v-if="error">Valitettavasti postauksia ei ollut juuri nyt saatavilla</div>
    <div v-if="!isFinished">Ladataan...</div>
    <div v-else class="container">
        <PublicationCreate></PublicationCreate>

        <div class="item" v-for="publication in data.publications">
            <PublicationView :publication="publication"></PublicationView>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(231, 231, 231);
    margin: 20px;
}

img {
    width: 400px;
    margin: 20px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>