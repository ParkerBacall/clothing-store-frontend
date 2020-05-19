<template>
  <div id="product-container">
    <div id='product' :key=product.id v-for="product in products"> 
       <Product v-bind:product="product"/>
    </div>
  </div>
</template>

<script>
import Product from "./Product"
export default {
  name: "ProductGrid", 
   props: ["products"],
  components: {
    Product
  },

  
}
</script>

<style lang="scss" scoped>
 #product-container{
      display: flex;
      justify-content: center;
      #product{
        margin: 20px;
        padding: 20px;
        box-shadow: 0px 0px 3px #666;
      }
    }
</style>