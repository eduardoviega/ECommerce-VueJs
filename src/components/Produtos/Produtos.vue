<template>
    <v-layout row wrap class="d-flex" style="justify-content: space-evenly;">
        <Produto tag="div" class="prod" v-for="dado in todosOsProdutos" :key="dado.id" :produto="dado" />
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Produto from './Produto.vue'
export default {
    computed: mapGetters(['todosOsProdutos']),
    components: { Produto },
}
</script>

<style>
    .geral {
        transition: all .5s;
    }
    .geral:hover {
        transform: scale(1.01);
    }
</style>