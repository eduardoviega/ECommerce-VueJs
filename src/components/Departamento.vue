<template>
    <v-layout row wrap class="d-flex" style="justify-content: space-evenly;">
        <Produto v-for="dado in dados" :key="dado.id" :produto="dado" />
    </v-layout>    
</template>

<script>
import Produto from './Produtos/Produto.vue'
const axios = require('axios')
export default {
    props: [ 'nome'],
    data() {
        return {
            dados: []
        }
    },
    mounted() {
        this.getUsers()
    },
    watch: {
        $route(){
            this.getUsers()
        }
    },
    methods: {
        async getUsers() {
            const response = await axios.get(`https://dummyjson.com/products/category/${this.nome}`)
            response.data.products.map(p => p.amount = 1)
            this.dados = response.data.products
        }
    },
    components: { Produto },
}
</script>

<style>

</style>