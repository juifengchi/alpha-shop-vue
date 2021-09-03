<template>
  <main id="main-content">
    <form id="form" class="pt-4">
      <div class="checkout-container">
        <h1 class="main-title">結帳</h1>

        <Stepper />

        <div class="form-panel">
          <router-view />
        </div>
      </div>

      <Cart :initial-products="products" />

      <Control @after-next-step-submit="afterNextStepSubmit" />
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
      price: 3999
    },
    {
      id: 2,
      image: require('../assets/images/product-2.png'),
      description: '刷色直筒牛仔褲',
      qty: 1,
      price: 1299
    }
  ]
}

export default {
  components: {
    Stepper,
    Cart,
    Control,
  },
  data() {
    return {
      genders: [],
      regions: [],
      products: []
    }
  },
  created() {
    this.fetchFormOptions()
    this.fetchProducts()
  },
  methods: {
    fetchFormOptions() {
      this.genders = dummyData.genders
      this.regions = dummyData.regions
    },
    fetchProducts() {
      this.products = dummyData.products
    },
    afterNextStepSubmit() {
      this.$route.push({ name: 'second' })
    }
  }
}
</script>
