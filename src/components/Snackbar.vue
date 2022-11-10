<template>
    <v-snackbar class="snack" v-model="snackbar" :timeout="timeout" top :color=color>
        <span>
            {{ text }}
        </span>
        <Close class="close" @click="snackbar = false"></Close>
    </v-snackbar>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
import barramento from '../barramento.js';

export default {
    components: { Close },
    data() {
        return {
            snackbar: false,
            text: '',
            color: '',
            timeout: 3000,
        }
    },
    created(){
        barramento.$on('mensagem', mudar => {
            this.snackbar = true
            this.text = mudar ? 'Produto adicionado ao carrinho!' : 'Produto já atingiu o limite máximo!'
            this.color = mudar ? 'green lighten-2' : 'red lighten-2'
            this.timeout = 3000
        })
    }
  }
</script>

<style scoped>
    .close {
        margin-top: 15px;
        margin-left: 25px;
    }
    .close:hover {
        color: white;
    }

    span {
        margin: 10px 0 10px 25px;
        color: black;
    }

    .snack {
        margin: 40px;
    }
</style>