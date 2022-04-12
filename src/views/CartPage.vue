<template>
  <div id="page-wrap">
    <h1>Cart</h1>
    <CartList :cartItems="cartItems" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import { cartItems } from '../fake-data';
import CartList from '../components/CartList.vue';

export default {
  name: 'CartPage',
  components: {
    CartList,
  },
  data() {
    return {
      cartItems,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}


</style>
