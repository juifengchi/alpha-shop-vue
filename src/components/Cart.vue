<template>
  <div class="cart-container my-8">
    <h5 class="cart-title mt-4 px-4">購物籃</h5>

    <div class="product-panel px-4">
      <div v-for="product in products" :key="product.id" class="product">
        <div class="product_img-wrapper">
          <img :src="product.image" />
        </div>
        <div class="product_info-wrapper">
          <p class="product-description">{{ product.description }}</p>
          <div class="product-qty">
            <span class="product-qty_minus">-</span>
            <span class="product-qty_num">{{ product.qty }}</span>
            <span class="product-qty_plus">+</span>
          </div>
          <p class="product-price">${{ product.price }}</p>
        </div>
      </div>
    </div>

    <div class="cost-panel">
      <div class="cost">
        <span class="cost_title">運費</span>
        <span class="cost_fee delivery_fee">免費</span>
      </div>
      <div class="cost">
        <span class="cost_title">小計</span>
        <span class="cost_fee total_fee">$5298</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      products: this.initialProducts
    }
  }
}
</script>