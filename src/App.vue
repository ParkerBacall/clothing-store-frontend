<template>
  <v-app>
    <div id='spacer'/>
    <Header/>
  
    <Nav/>
    <div id='spacer'/>
    <router-view/>
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

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #spacer{
    padding-top: 25px;
  }
</style>