<template>
    <v-layout class="d-flex justify-content-center" 
        style="background-color: #008ad800; border-radius: 15px;">
        
        <v-layout class="comItem" v-if="produtosCarrinho.length != 0" style="display: flex; flex-wrap: wrap-reverse;">
            <div column style="flex: 9;">
                <ItemCarrinho v-for="item in produtosCarrinho" :key="item.id" :produto="item" />
            </div>

            <v-card style="display: flex; flex-direction: column; align-self: flex-end; flex: 4; 
                min-height: 190px; padding: 20px;  justify-content: space-between; border-radius: 15px; 
                background-color: #fff;" class="mx-2 my-3">
                
                <div class="infos">
                    <h3>Total do pedido:</h3>
                </div>
                <hr>
                <section style="display: flex; flex-direction: column;">
                    <div class="infos">
                        <span>Valor sem descontos:</span>
                        <span style="font-size: 12px;">{{ totalSem | formataTotal }}</span>
                    </div>
                    <div class="infos" v-if="totalCom > 1000">
                        <span>10% de desconto:</span>
                        <span style="font-size: 12px;">- {{Math.round(totalCom/10) | formataTotal }}</span>
                    </div>
                    <hr>
                    <div class="infos">
                        <strong style="font-size: 16px;">Valor final:</strong>
                        <strong style="font-size: 16px;">{{ totalCom >= 1000 ? Math.round(totalCom-totalCom/10) : totalCom
                        | formataTotal }}</strong>
                    </div>
                </section>
                
                <v-btn style="border-radius: 15px; color: white; background: #008ad8;" 
                    class="botao text-capitalize" @click="remove">Limpar Carrinho</v-btn>
                
                <v-btn style="border-radius: 15px; color: white; background: #008ad8;" 
                    class="botao text-capitalize" @click="removeone">Limpar Carrinho</v-btn>

            </v-card> 
        </v-layout>
        
        <v-layout class="vazio" v-else>
            <span>
                <p><strong>Seu carrinho está vazio!</strong></p>
                <p>Adicione algum produto para poder comprar!</p>
            </span>
            <router-link to="/" style="text-decoration: none;">
                <v-btn class="btn-bluegreen px-4">Voltar à loja</v-btn>
            </router-link>
        </v-layout>
    </v-layout>
</template>

<script>
import ItemCarrinho from './ItemCarrinho.vue'
const axios = require('axios')
export default {
    data() {
        return {
            produtosCarrinho: [],
            totalCom: 0,
            totalSem: 0,
        }
    },
    mounted() {
        this.getUsers()
    },
    filters: {
        formataTotal(valor){
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
		},
    },
    methods: {
        totalComDesconto(){
            this.totalCom = this.produtosCarrinho.map(p => p.price).reduce((total, atual) => total + atual, 0)
        },
        totalSemDesconto(){
            this.totalSem =  this.produtosCarrinho.map(p => Math.round(p.price / p.discountPercentage + p.price))
                .reduce((total, atual) => total + atual, 0)
        },
        async getUsers() {
            const response = await axios.get('https://dummyjson.com/products/')
            this.produtosCarrinho = response.data.products
            this.totalComDesconto()
            this.totalSemDesconto()
        },
        remove(){
            // this.produtosCarrinho = []
            this.produtosCarrinho.pop()
            this.totalComDesconto()
            this.totalSemDesconto()
        },
        removeone(){
            // this.produtosCarrinho = []
            this.produtosCarrinho.push(this.produtosCarrinho[0])
            this.totalComDesconto()
            this.totalSemDesconto()
        }
    },
    watch: {
        produtosCarrinho() {
            this.totalCom
        },        
    },
    components: { ItemCarrinho },
}
</script>

<style>
    .vazio {
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        text-align: center;
        background: white;
        padding: 30px 20px;
        border-radius: 10px;
    }
    .btn-bluegreen {
        background: #008ad8 !important;
        color: white !important;
        border-radius: 15px !important;
        font-weight: bold !important;
        text-transform: none !important;
    }
    .infos {
        display: flex; 
        justify-content: space-between; 
        width: 100%; 
        flex-wrap: wrap;
        margin: 5px 0;
    }
</style>