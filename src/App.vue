<template>
  <v-app>
    <Header></Header>
    <Carregamento v-if="carregando" />
    <v-content v-else style="background-color: #202329;">
      <v-container style="display: flex; justify-content: center;">
        <Snackbar />
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Carregamento from './components/Carregamento.vue'
import Snackbar from './components/Snackbar.vue'

export default {
  components: { Header, Carregamento, Snackbar },
  data() {
    return {
      carregando: true,
    }
  },  
  mounted(){
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        this.carregando = false
      }
    }
  }
}
</script>

<style>
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
</style>
