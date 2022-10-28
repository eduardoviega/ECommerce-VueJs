<template>
    <v-card class="mx-2 my-3 geral" width="340px" max-width="340px" style="border-radius: 15px; display: flex; 
        flex-direction: column; justify-content: space-between;"
            v-show="mostrar">

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
                <v-rating :value="produto.rating" color="amber" dense half-increments readonly size="18"></v-rating>
                <div class="grey--text" style="font-size: small;">({{ produto.rating }})</div>
            </div>
            <strike style="font-size: 12px;">{{ withoutDiscount | formataPreco }}</strike>
            <strong style="font-size: 16px;">{{ produto.price | formataPreco }}</strong>
        </div>
        
        <div class="text">
            <div>{{ produto.description }}</div>
        </div>

        <v-card-actions class="justify-center my-2">
            <v-btn class="btn-bluegreen px-4">Comprar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['produto'],
    data () {
      return {
        model: 1,
        mostrar: false,
        withoutDiscount: 0
      }
    },
    filters: {
        formataPreco(valor){
			return `R$ ${valor},00`
		}
    },
    mounted(){
        this.model = 0
        this.withoutDiscount = Math.round(this.produto.price / this.produto.discountPercentage + this.produto.price)
        setTimeout(() => {
            this.mostrar = true
        },1000)
    }
}
</script>

<style scoped>
    * {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .geral {
        gap: 10px;
    }
    .text {
        padding: 0 15px;
    }
    .btn-bluegreen {
        background: #05ffd0 !important;
        border-radius: 15px !important;
        font-weight: bold !important;
        text-transform: none !important;
    }
</style>