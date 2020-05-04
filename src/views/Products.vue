<template>
  <div class="mx-auto mtn-5">
    <h1>Products</h1>
    <ProductGrid/>
  </div>
</template>

<script>
import ProductGrid from '../components/ProductGrid'
export default {
    name: 'Products',
    components: {
      ProductGrid
    }
}
</script>

<style>

</style>