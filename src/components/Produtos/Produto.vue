<template>
    <v-card class="mx-2 my-3 geral" width="340px" max-width="340px" style="border-radius: 15px; display: flex; 
        flex-direction: column; justify-content: space-between;">

        <v-carousel :cycle="false" hide-delimiters v-model="model"
            v-if="produto.images.length != 1" 
            style="height: auto;">
            <v-flex>
                <v-carousel-item v-for="img in produto.images" :key="img" :src="img" style="max-height: 200px;">
                </v-carousel-item>
            </v-flex>
        </v-carousel>
        <v-img v-else :src="produto.thumbnail"></v-img>
    
        <div class="text">
            <strong style="font-size: large;">{{ produto.title }}</strong>
        </div>

        <div class="text" style="display: flex; flex-direction: column;">
            <div style="display: flex; float: left; align-items: center; padding-bottom: 5px;">
                <v-rating :value="produto.rating" color="amber" dense half-increments readonly size="19"></v-rating>
                <div class="grey--text" style="font-size: small;">({{ produto.rating }})</div>
            </div>
            <strike style="font-size: small;">{{ withoutDiscount | formataPreco }}</strike>
            <strong style="font-size: medium;">{{ produto.price | formataPreco }}</strong>
        </div>
        
        <div class="text">{{ produto.description }}</div>

        <v-card-actions class="justify-center my-2">
            <v-btn class="btn-blue px-4" @click="comprar">Comprar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['produto'],
    data () {
      return {
        model: 1,
        withoutDiscount: 0
      }
    },
    filters: {
        formataPreco(valor){
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
		}
    },
    mounted(){
        this.model = 0
        this.withoutDiscount = this.produto.price / this.produto.discountPercentage + this.produto.price
    },
    methods: {
        comprar(){
            this.$store.commit('adicionarCarrinho', this.produto)
        }
    }
}
</script>

<style>
    .text {
        padding: 0 15px;
    }
    .btn-blue {
        background: #008ad8 !important;
        color: white !important;
        border-radius: 15px !important;
        font-weight: bold !important;
        text-transform: none !important;
    }
    
    button:hover {
        background: white !important;
        color: #008ad8 !important;
        border: 2px solid #008ad8 !important;
        transform: scale(1.1);
    }
</style>