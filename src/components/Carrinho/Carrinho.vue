<template>
    <v-layout class="d-flex justify-content-center cart" 
        style="background-color: #008ad800; border-radius: 15px;">
        
        <v-layout class="comItem" v-if="produtosCarrinho.length != 0" style="display: flex; flex-wrap: wrap-reverse;">
            <ul style="margin: 0; padding: 0; flex: 9;" class="itens">
                <transition-group name="slide" mode="out-in" column>
                    <li v-for="item in produtosCarrinho" :key="item.id" 
                        style="list-style: none; margin: 0; padding: 0;">
                        <ItemCarrinho :produto="item" />
                    </li>
                </transition-group>
            </ul>

            <v-card style="display: flex; flex-direction: column; align-self: flex-end; flex: 4; 
                min-height: 190px; padding: 20px;  justify-content: space-between; border-radius: 15px; 
                background-color: #fff;" class="mx-2 my-3">
                
                <template class="infos">
                    <h3>Total do pedido:</h3>
                </template> 
                <hr>
                <template style="display: flex; flex-direction: column;">
                    <div class="infos">
                        <span>Valor sem descontos:</span>
                        <span style="font-size: 12px;">{{ valorFinal | formataTotal }}</span>
                    </div>
                    <div class="infos" v-if="valorFinal >= 1000">
                        <span>10% de desconto:</span>
                        <span style="font-size: 12px;">- {{ dezPorCento | formataTotal }}</span>
                    </div>
                    <hr>
                    <div class="infos">
                        <strong style="font-size: 16px;">Valor final:</strong>
                        <strong style="font-size: 16px;">{{ valorFinal >= 1000 ? valorFinal - dezPorCento : valorFinal | formataTotal }}</strong>
                    </div>
                </template>
                
                <v-btn style="border-radius: 15px; color: white; background: #008ad8;" 
                    class="text-capitalize" @click="limpar">Limpar Carrinho</v-btn>
            </v-card> 
        </v-layout>
        
        <v-layout class="vazio" v-else>
            <template>
                <p><strong>Seu carrinho está vazio!</strong></p>
                <p>Adicione algum produto para poder comprar!</p>
            </template>
            <router-link to="/ECommerce-VueJs/" style="text-decoration: none;">
                <v-btn class="btn-blue px-4">Voltar à loja</v-btn>
            </router-link>
        </v-layout>
    </v-layout>
</template>

<script>
import ItemCarrinho from './ItemCarrinho.vue'
export default {
    computed: {
        produtosCarrinho() { return this.$store.getters.produtosCarrinho },
        valorSemDescontos() { return this.$store.getters.valorSemDescontos },
        dezPorCento() { return this.$store.getters.dezPorCento },
        valorFinal() { return this.$store.getters.valorFinal },
    },
    methods: {
        limpar(){
            this.$store.commit('limparCarrinho')
        },
    },
    filters: {
        formataTotal(valor){
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
        },
    },
    components: { ItemCarrinho },
}
</script>

<style scoped>
    .cart *, .itens * {
        transition: all .4s !important;
    }
    .vazio {
        display: flex; 
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: white;
        padding: 30px 20px;
        border-radius: 10px;
    }
    .infos {
        display: flex; 
        justify-content: space-between; 
        width: 100%; 
        flex-wrap: wrap;
        margin: 5px 0;
    }
    @keyframes slide-in {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0px); opacity: 1; }
    }
    @keyframes slide-out {
        from { transform: translateY(0px); opacity: 1; }
        to { transform: translateY(-30px); opacity: 0; }
    }
    .slide-enter-active {
        animation: slide-in 0.4s ease;
    }
    .slide-leave-active {
        animation: slide-out 0.4s ease;
    }
    .slide-move {
        animation: all 1s;
    }
</style>