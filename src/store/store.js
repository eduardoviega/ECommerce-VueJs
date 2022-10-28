import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import produtos from './modules/produtos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { carrinho, produtos }
})