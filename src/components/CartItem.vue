<template>
  <div class="product-container">
    <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
    </div>
    <button class="remove-button">Remove From Cart</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['product'],
};
</script>

<style scoped>
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
