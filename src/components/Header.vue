<template>
    <v-toolbar app class="toolbar" style="background-color: #008ad8;">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <v-toolbar-items class="mr-0">
                <v-menu offset-x open-on-hover class="menu">
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
                        
                        <router-link to="/ECommerce-VueJs/mens-shirts">
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
                            <v-list-tile>Óculos Escuros</v-list-tile>
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
            
            <v-toolbar-title class="headline text-uppercase ml-3 mr-3 titulo">
                <router-link to="/ECommerce-VueJs/" style="text-decoration: none; color: white;">
                    <span>Leigado</span>
                    <span class="font-weight-light">Store</span>
                </router-link>
            </v-toolbar-title>
        </div>   
        <v-spacer></v-spacer>

        <v-toolbar-items class="headline">
            <router-link to="/ECommerce-VueJs/carrinho" class="carrinho">
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
    },
    watch: {
        qtdProdutos(){
            let carrinho = document.querySelectorAll('.carrinho')[0]
            carrinho.style.transform = "scale(1.3)"
            setTimeout(()=>{
                carrinho.style.transform = "none"
            }, 500)

        }
    },
}
</script>

<style>
    * {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .departamentos * {
        background-color: white !important;
        text-decoration: none;
        color: black;
        width: 100%;
    }
    .departamentos div:first-child {
        border-radius: 20px;
    }
    .departamentos div:first-child:hover {
        transition: all .6s;
        background-color: #008ad8 !important;
        color: white;
        transform: scale(0.97);
    }
    .departamentos {
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        padding: 0;
    }
    .carrinho {
        color: white; 
        display: flex; 
        align-items: center; 
        padding-top: 5px; 
        text-decoration: none;
        transition: all .5s;
    }
    .carrinho:hover {
        transform: scale(1.2) !important;
    }
    .menu {
        transition: all .5s;
        transform: scale(1.1);
    }
    .menu:hover {
        transform: scale(1.4);
    }
</style>