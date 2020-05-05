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
  components: {
    Product
  },
  data(){
    return{
      products:[
        {
          id: 1,
          thumbnail: "https://nightmarebucket.s3.us-east-2.amazonaws.com/IMG_7812.jpg",
          title: "Filler",
          price: "$45.00",
        },
        {
          id: 2,
          thumbnail: "https://nightmarebucket.s3.us-east-2.amazonaws.com/IMG_7398.jpg",
          title: "Fller",
          price: "$23.00",
        },
      ]
    }
  }
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