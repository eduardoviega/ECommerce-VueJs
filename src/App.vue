<template>
  <v-app>
    <Header></Header>
    <v-content v-if="carregando" style="background-color: #202329;" id="content">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <Carregamento v-else />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Carregamento from './components/Carregamento.vue'

export default {
  components: { Header, Carregamento },
  data() {
    return {
      carregando: false
    }
  },
  mounted(){
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        this.carregando = true
      }
    }
  }
}
</script>

<style>
  
</style>
