import Vue from 'vue'
import Router from 'vue-router'

import Produtos from './components/Produtos/Produtos.vue'
import Departamento from './components/Departamento.vue'
import Carrinho from './components/Carrinho/Carrinho.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Produtos },
        { path: '/ECommerce-VueJs/', component: Produtos },
        { path: '/ECommerce-VueJs/carrinho', component: Carrinho },
        { path: '/ECommerce-VueJs/:nome', component: Departamento, props: true },
    ]
}) 