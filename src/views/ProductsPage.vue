<template>
  <div id="page-wrap">
    <ProductsList :products="products" />
  </div>
</template>

<script>
import { products } from '../fake-data';
import ProductsList from '../components/ProductsList.vue';
export default {
  name: 'ProductsPage',
  components: {
    ProductsList,
  },
  data() {
    return {
      title: 'New Released Books',
      products,
    };
  },
};
</script>
