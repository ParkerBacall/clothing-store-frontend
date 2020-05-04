<template>
  <div>
      <img :src="product.thumbnail" alt="" onload='this.width*=0.06'>
      <h1>{{product.title}}</h1>
  </div>
</template>

<script>
export default {
name: "Products", 
   props: ["product"]
}
</script>

<style>

</style>