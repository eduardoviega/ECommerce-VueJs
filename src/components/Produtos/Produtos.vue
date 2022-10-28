<template>
    <v-layout row wrap class="d-flex" style="justify-content: space-evenly;">
        <Produto v-for="dado in dados" :key="dado.id" :produto="dado" />
    </v-layout>
</template>

<script>
import Produto from './Produto.vue'
const axios = require('axios')
export default {
    data() {
        return {
            dados: []
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            const response = await axios.get('https://dummyjson.com/products/')
            this.dados = response.data.products
        }
    },
    components: { Produto },
}
</script>

<style>

</style>