<template>
  <CartItem v-for="product in cartItems" v-bind:key="product.id" v-bind:product="product"/>
  <h3 id="total-price">Total : ${{ totalPrice }}</h3>
  <button id="checkout-button">Proceed to Checkout</button>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
  name: 'CartList',
  props: ['cartItems', 'totalPrice'],
  components: {
    CartItem,
  },
};
</script>

<style scoped>
#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}

.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
</style>
