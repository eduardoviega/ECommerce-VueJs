<template>
    <v-toolbar app class="toolbar" style="background-color: #008ad8;">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <v-toolbar-items class="mr-0">
                <v-menu offset-x open-on-hover>
                    <Menu slot="activator" style="color: white; display: flex;" />
                    <v-list class="departamentos">
                        <router-link to="/ECommerce-VueJs/smartphones">
                            <v-list-tile>Celulares</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/laptops">
                            <v-list-tile>Notebooks</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/fragrances">
                            <v-list-tile>Perfumes</v-list-tile>
                        </router-link>

                        <router-link to="/ECommerce-VueJs/skincare">
                            <v-list-tile>Skincare</v-list-tile>
                        </router-link>

                        <router-link to="/ECommerce-VueJs/groceries">
                            <v-list-tile>Mercado</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/home-decoration">
                            <v-list-tile>Casa & Decoração</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/furniture">
                            <v-list-tile>Móveis</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/tops">
                            <v-list-tile>Tops</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/womens-dresses">
                            <v-list-tile>Vestidos</v-list-tile>
                        </router-link>

                        <router-link to="/ECommerce-VueJs/womens-shoes">
                            <v-list-tile>Calçados Femininos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/mens-shirt">
                            <v-list-tile>Camisas Masculinas</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/mens-shoes">
                            <v-list-tile>Calçados Masculinos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/mens-watches">
                            <v-list-tile>Relógios Masculinos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/womens-watches">
                            <v-list-tile>Relógios Femininos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/womens-bags">
                            <v-list-tile>Bolsas Femininas</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/womens-jewellery">
                            <v-list-tile>Joalheria Feminina</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/sunglasses">
                            <v-list-tile>Oculos Escuros</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/automotive">
                            <v-list-tile>Automotivo</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/motorcycle">
                            <v-list-tile>Motocicleta</v-list-tile>
                        </router-link>
                        
                        <router-link to="/ECommerce-VueJs/lighting">
                            <v-list-tile>Iluminação</v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            
            <v-toolbar-title class="headline text-uppercase ml-3 mr-3">
                <router-link to="/ECommerce-VueJs/" style="text-decoration: none; color: white;">
                    <span>Leigado</span>
                    <span class="font-weight-light">Store</span>
                </router-link>
            </v-toolbar-title>
        </div>   
        <v-spacer></v-spacer>

        <v-toolbar-items class="headline text-uppercase">
            <router-link to="/ECommerce-VueJs/carrinho" style="color: white; display: flex; align-items: center; padding-top: 5px; text-decoration: none;" >
                <Cart />
                <span style="height: 100%; font-size: 16px;">{{ qtdProdutos }}</span>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import Cart from 'vue-material-design-icons/Cart.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
export default {
    components: { Cart, Menu },
    computed: {
        qtdProdutos() { return this.$store.getters.qtdProdutos },
    }
}
</script>

<style>
    * {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .botao {
        color: white !important;
    }
    .departamentos * {
        background-color: white !important;
    }
    .departamentos a {
        text-decoration: none;
        border-top: 1px solid lightgray !important;
        color: black;
        width: 100%;
    }
    .departamentos a:first-child {
        border: none !important;

    }
    .departamentos {
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        padding: 0;
    }
</style>