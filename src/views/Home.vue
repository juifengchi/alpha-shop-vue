<template>
  <main id="main-content">
    <form id="form" class="pt-4">
      <div class="checkout-container">
        <h1 class="main-title">結帳</h1>

        <Stepper :now-step="nowStep" />

        <div class="form-panel">
          <router-view @after-select-shipping="afterSelectShipping" />
        </div>
      </div>

      <Cart :initial-products="products" :initial-shipping-fee="shippingFee" />

      <Control :now-step="nowStep" @after-click-button="afterClickButton" />
    </form>
  </main>
</template>

<script>
import Stepper from './../components/Stepper'
import Cart from './../components/Cart'
import Control from './../components/Control'

const dummyData = {
  products: [
    {
      id: 1,
      image: require('../assets/images/product-1.png'),
      description: '破壞補丁修身牛仔褲',
      qty: 1,
      price: 3999,
    },
    {
      id: 2,
      image: require('../assets/images/product-2.png'),
      description: '刷色直筒牛仔褲',
      qty: 1,
      price: 1299,
    },
  ],
}

export default {
  components: {
    Stepper,
    Cart,
    Control,
  },
  data() {
    return {
      products: [],
      nowStep: Number(this.$route.name),
      shippingFee: '免費',
    }
  },
  created() {
    this.fetchProducts()
  },
  updated() {
    this.updateStep()
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products
    },
    updateStep() {
      this.nowStep = Number(this.$route.name)
    },
    afterClickButton(btn) {
      if (btn === 'next') {
        this.nowStep += 1
      } else if (btn === 'previous') {
        this.nowStep -= 1
      }
      this.$router.push({ name: this.nowStep })
    },
    afterSelectShipping(fee) {
      this.shippingFee = fee
    }
  }
}
</script>
