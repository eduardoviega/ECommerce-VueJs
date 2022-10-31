<template>
    <v-layout row wrap class="d-flex" style="justify-content: space-evenly;">
        <Produto v-for="dado in todosOsProdutos" :key="dado.id" :produto="dado" />
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

</style>