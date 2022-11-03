<template>
    <v-card color="#fff" class="mx-2 my-3 px-2 py-2 d-flex item" 
        style="border-radius: 15px; height: auto; flex-wrap: wrap;">
        <v-img :src="produto.thumbnail" class="image" />
        
        <div class="px-4 py-2">
            <template class="text pl-0">
                <div style="font-size: large;"><strong>{{ produto.title }}</strong></div>
            </template>
            
            <div style="display: flex; flex-direction: column; margin: 5px 0 15px;">
                <strike style="font-size: small;">{{ withoutDiscount | formataPreco }}</strike>
                <strong style="font-size: medium;">{{ produto.price | formataPreco }}</strong>
            </div>

            <template>
                <v-text-field label="Quantidade:"
                    v-model="produto.amount" @keypress.prevent @keydown.prevent
                    hide-details append-outer-icon="add" prepend-icon="remove" 
                    @click:append-outer="increment" @click:prepend="decrement"
                ></v-text-field>
            </template>

            <template>
                <v-btn class="btn-blue mt-2" @click="remover">Remover</v-btn>
            </template> 
        </div>
    </v-card>
</template>
<script>
export default {
    props: ['produto'],
    data() {
        return {
            withoutDiscount: 0
        }
    },
    filters: {
        formataPreco(valor){
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
		}
    },
    methods: {
        remover(){
            this.$store.commit('removerDoCarrinho', this.produto.id)
        },
        increment() {
            this.produto.amount = this.produto.amount < 10 ? parseInt(this.produto.amount,10) + 1 : 10
        },
        decrement() {
            this.produto.amount = this.produto.amount > 1 ? parseInt(this.produto.amount,10) - 1 : 1
        }
    },
    mounted(){
        this.withoutDiscount = this.produto.price / this.produto.discountPercentage + this.produto.price
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
    
    i {
        border-radius: 50%;
        width: auto;
    }
    i:hover {
        color: #008ad8 !important;
        border: 2px solid #008ad8 !important;
        transform: scale(1.1);
    }
</style>