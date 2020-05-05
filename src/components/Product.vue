<template>
  <div id="product-div">
      <img :src="product.thumbnail" alt="" onload='this.width*=0.06'>
      <div id="title-div">
        <h3>{{product.title}}</h3>
      </div>
      <div id="price-div">
        <p>{{product.price}}</p>
      </div>
  </div>
</template>

<script>
export default {
name: "Products", 
   props: ["product"]
}
</script>

<style lang="scss" scoped>
  #title-div{
    display: flex;
    justify-content: center;
  }
  #price-div{
    display: flex;
    justify-content: center;

  }


</style>
