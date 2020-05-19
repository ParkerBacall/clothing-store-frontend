<template>
<div id="container">
    <div id="h1-div">
       <h1>Products</h1>
    </div>
      <ProductGrid :products="products"/>
</div>
</template>

<script>
import ProductGrid from '../components/ProductGrid'
export default {
    name: 'Products',
    props: ["products"],
    components: {
      ProductGrid
    }
}
</script>

<style lang="scss" scoped>
  #container{
    width:100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    #h1-div{
      display: flex;
      justify-content: center;
      width:100%;
    }
  }
  
</style>