<template>
    <v-toolbar app class="toolbar" style="background-color: #008ad8;">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <v-toolbar-items>
                <v-menu offset-x open-on-hover>
                    <router-link to="/carrinho" slot="activator" style="color: white; display: flex;">
                        <Menu />    
                    </router-link>
                    <v-list class="departamentos">
                        <router-link to="/smartphones">
                            <v-list-tile>Celulares</v-list-tile>
                        </router-link>
                        
                        <router-link to="/laptops">
                            <v-list-tile>Notebooks</v-list-tile>
                        </router-link>
                        
                        <router-link to="/fragrances">
                            <v-list-tile>Perfumes</v-list-tile>
                        </router-link>

                        <router-link to="/skincare">
                            <v-list-tile>Skincare</v-list-tile>
                        </router-link>

                        <router-link to="/groceries">
                            <v-list-tile>Mercado</v-list-tile>
                        </router-link>
                        
                        <router-link to="/home-decoration">
                            <v-list-tile>Casa & Decoração</v-list-tile>
                        </router-link>
                        
                        <router-link to="/furniture">
                            <v-list-tile>Móveis</v-list-tile>
                        </router-link>
                        
                        <router-link to="/tops">
                            <v-list-tile>Tops</v-list-tile>
                        </router-link>
                        
                        <router-link to="/womens-dresses">
                            <v-list-tile>Vestidos</v-list-tile>
                        </router-link>

                        <router-link to="/womens-shoes">
                            <v-list-tile>Calçados Femininos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/mens-shirt">
                            <v-list-tile>Camisas Masculinas</v-list-tile>
                        </router-link>
                        
                        <router-link to="/mens-shoes">
                            <v-list-tile>Calçados Masculinos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/mens-watches">
                            <v-list-tile>Relógios Masculinos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/womens-watches">
                            <v-list-tile>Relógios Femininos</v-list-tile>
                        </router-link>
                        
                        <router-link to="/womens-bags">
                            <v-list-tile>Bolsas Femininas</v-list-tile>
                        </router-link>
                        
                        <router-link to="/womens-jewellery">
                            <v-list-tile>Joalheria Feminina</v-list-tile>
                        </router-link>
                        
                        <router-link to="/sunglasses">
                            <v-list-tile>Oculos Escuros</v-list-tile>
                        </router-link>
                        
                        <router-link to="/automotive">
                            <v-list-tile>Automotivo</v-list-tile>
                        </router-link>
                        
                        <router-link to="/motorcycle">
                            <v-list-tile>Motocicleta</v-list-tile>
                        </router-link>
                        
                        <router-link to="/lighting">
                            <v-list-tile>Iluminação</v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            
            <v-toolbar-title class="headline text-uppercase mr-4">
                <router-link to="/" style="text-decoration: none; color: white;">
                    <span>Leigado</span>
                    <span class="font-weight-light">Store</span>
                </router-link>
            </v-toolbar-title>
        </div>   
        <v-spacer></v-spacer>

        <v-toolbar-items class="headline text-uppercase">
            <router-link to="/carrinho" style="color: white; display: flex; align-items: center; padding-top: 5px;" >
                <Cart />
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import Cart from 'vue-material-design-icons/Cart.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
export default {
    components: { Cart, Menu }
}
</script>

<style>
    .botao {
        color: white !important;
    }
    .departamentos a {
        text-decoration: none;
        color: black;
        width: 100%;
    }
    .departamentos * {
        background-color: white !important;
    }
    .departamentos {
        display: flex;
        flex-direction: column;
        max-height: 90vh;
    }
</style>