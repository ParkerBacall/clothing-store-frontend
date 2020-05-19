<template>
  <v-app>
    <div id='spacer'/>
    <Header/>
  
    <Nav/>
    <div id='spacer'/>
    <router-view :products="products"/>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Footer
  },

  data() {
   return{
      products:[]
    }
  },
  methods: {

  },
  mounted(){
    fetch('http://localhost:9001/products')
    .then(response => response.json())
    .then(products => {
      this.products = products
    })
  }
}

</script>

<style scoped>
  #spacer{
    padding-top: 25px;
  }
</style>