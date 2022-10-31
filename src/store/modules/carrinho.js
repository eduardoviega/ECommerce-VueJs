export default {
    state: {
        produtosCarrinho: [],
    },
    getters: {
        produtosCarrinho(state){
            return state.produtosCarrinho
        },
        valorSemDescontos(state){
            return state.produtosCarrinho.map(p => p.price / p.discountPercentage + p.price)
                .reduce((total, atual) => total + atual, 0)
        },
        dezPorCento(state){
            return state.produtosCarrinho.map(p => p.price).reduce((total, atual) => total + atual, 0) / 10
        },
        valorFinal(state){
            return state.produtosCarrinho.map(p => p.price).reduce((total, atual) => total + atual, 0)
        },
    },
    mutations: {
        adicionarCarrinho(state, payload){
            state.produtosCarrinho.push(payload)
        },
        removerDoCarrinho(state, payload){
            const index = state.produtosCarrinho.indexOf(state.produtosCarrinho.filter(item => item.id == payload)[0])
            state.produtosCarrinho.splice(index, 1);
        },
        limparCarrinho(state){
            const tamanho = state.produtosCarrinho.length 
            for(let i=0; i<tamanho; i++){
                state.produtosCarrinho.pop()
            }
        }
    },
}