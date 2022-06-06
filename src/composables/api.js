import { createFetch } from "@vueuse/core";

export const useApi = createFetch({
    baseUrl: 'https://jc-kuva-app.onrender.com/'
})