<template>
  <v-app>
    <Header></Header>
    <Carregamento v-if="carregando" />
    <v-content v-else style="background-color: #202329;">
      <v-container style="display: flex; justify-content: center;">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Carregamento from './components/Carregamento.vue'

export default {
  components: { Header, Carregamento },
  data() {
    return {
      carregando: true
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
</style>
