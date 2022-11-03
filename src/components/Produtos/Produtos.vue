<template>
    <v-layout row wrap class="d-flex" style="justify-content: space-evenly;">
        <Produto class="prod" v-for="dado in todosOsProdutos" :key="dado.id" :produto="dado" />
    </v-layout>
</template>

<script>
import Produto from './Produto.vue'
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['todosOsProdutos']),
    components: { Produto },
}
</script>

<style scoped>
    .geral {
        transition: all .5s;
        gap: 10px;
    }
    .geral:hover {
        transform: scale(1.01);
    }
</style>