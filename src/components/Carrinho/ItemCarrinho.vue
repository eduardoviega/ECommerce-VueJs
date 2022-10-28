<template>
    <v-card color="#fff" class="mx-2 my-3 px-2 pt-2 d-flex" 
        style="border-radius: 15px; height: auto; flex-wrap: wrap;">
        <v-img :src="produto.thumbnail" class="image"></v-img>
        
        <div class="px-4 py-2">
            <div class="text">
                <div style="font-size: large;"><strong>{{ produto.title }}</strong></div>
            </div>
            
            <div style="display: flex; flex-direction: column; margin: 5px 0 15px;">
                <strike style="font-size: small;">{{ withoutDiscount | formataPreco }}</strike>
                <strong style="font-size: medium;">{{ produto.price | formataPreco }}</strong>
            </div>

            <div>
                <v-text-field type="number" min="1" max="10" label="Quantidade"
                    v-model.number="number" @keydown.prevent
                    hide-details
                    @click:append-outer="increment"  @click:prepend="decrement"
                    style="width: auto;"
                ></v-text-field>
       
            </div>

            <v-card-actions>
                <v-btn class="btn-blue">Remover</v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>
<script>
export default {
    props: ['produto'],
    data() {
        return {
            number: 1,
            withoutDiscount: 0
        }
    },
    filters: {
        formataPreco(valor){
			return `R$ ${valor},00`
		}
    },
    watch: {
        number(){
            if(this.number > 10) {
                this.number = 10
            }
        }
    },
    methods: {
        increment() {
            this.number = parseInt(this.number,10) + 1
        },
        decrement() {
            this.number = this.number != 1 ? parseInt(this.number,10) - 1 : 1
        }
    },
    mounted(){
        this.withoutDiscount = Math.round(this.produto.price / this.produto.discountPercentage + this.produto.price)
    }
}
</script>

<style>
    .image{
        align-self: flex-start;
        min-width: 25vh; 
        min-height: 15vh; 
        max-height: 25vh; 
        border-radius: 10px; 
    }
    .btn-blue {
        background: #008ad8 !important;
        color: white !important;
        border-radius: 15px !important;
        font-weight: bold !important;
        text-transform: none !important;
    }
</style>