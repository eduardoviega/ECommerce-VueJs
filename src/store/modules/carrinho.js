import barramento from '../../barramento'
export default {
    state: {
        produtosCarrinho: [],
    },
    getters: {
        produtosCarrinho(state){
            return state.produtosCarrinho
        },
        valorSemDescontos(state){
            return state.produtosCarrinho.map(p => (p.price / p.discountPercentage + p.price) * p.amount)
                .reduce((total, atual) => total + atual, 0)
        },
        dezPorCento(state){
            return state.produtosCarrinho.map(p => p.price * p.amount).reduce((total, atual) => total + atual, 0) / 10 
        },
        valorFinal(state){
            return state.produtosCarrinho.map(p => p.price * p.amount).reduce((total, atual) => total + atual, 0) 
        },
        qtdProdutos(state){
            return state.produtosCarrinho.map(p => p.amount).reduce((total, atual) => total + atual, 0) 
        },
    },
    mutations: {
        adicionarCarrinho(state, payload){
            if(state.produtosCarrinho.find(item => item.id == payload.id)){
                if(state.produtosCarrinho.filter(item => item.id == payload.id)[0].amount < 10){
                    state.produtosCarrinho.filter(item => item.id == payload.id)[0].amount += 1
                    barramento.$emit('mensagem', true)
                }
                else {
                    barramento.$emit('mensagem', false)
                }
            } else {
                state.produtosCarrinho.push(payload)
                barramento.$emit('mensagem', true)
            }
        },
        removerDoCarrinho(state, payload){
            state.produtosCarrinho.filter(item => item.id == payload)[0].amount = 1
            const index = state.produtosCarrinho.indexOf(state.produtosCarrinho.filter(item => item.id == payload)[0])
            state.produtosCarrinho.splice(index, 1);
        },
        limparCarrinho(state){
            state.produtosCarrinho.map(p => p.amount = 1)
            const tamanho = state.produtosCarrinho.length 
            for(let i=0; i<tamanho; i++){
                state.produtosCarrinho.pop()
            }
        }
    },
}