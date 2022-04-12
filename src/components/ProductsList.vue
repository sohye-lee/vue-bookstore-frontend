<template>
  <div class="grid-wrap">
    <ProductItem
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
  name: 'ProductsList',
  props: ['products'],
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
