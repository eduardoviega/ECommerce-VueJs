<template>
  <v-app>
    <Header></Header>
    <!-- <Carregamento v-if="carregando" /> -->
    <v-content style="background-color: #202329;" id="content">
      <v-container>
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
  
</style>
