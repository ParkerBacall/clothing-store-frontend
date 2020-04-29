<template>
  <v-app>
    <Header/>
    <Nav/>
    <router-view/>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Nav,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
