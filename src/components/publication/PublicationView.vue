<script setup>

defineProps({
    publication: Object
})

</script>

<template>
    {{ publication.title }}
    <img :src="publication.url" />

</template>

<style>

img {
    width: 400px;
    margin: 20px;
}

</style>

</style>