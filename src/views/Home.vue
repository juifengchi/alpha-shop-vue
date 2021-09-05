<template>
  <main id="main-content">
    <form id="form" class="pt-4">
      <div class="checkout-container">
        <h1 class="main-title">結帳</h1>

        <Stepper :now-step="nowStep" />

        <div class="form-panel">
          <router-view :initial-user="user" @after-select-shipping="afterSelectShipping" />
        </div>
      </div>

      <Cart :initial-products="products" :initial-shipping-fee="shippingFee" />

      <Control :now-step="nowStep" @after-click-button="afterClickButton" @after-submit="afterSubmit" />
    </form>

    <SubmitModal :initial-user="user" />
  </main>
</template>

<script>
import Stepper from './../components/Stepper'
import Cart from './../components/Cart'
import Control from './../components/Control'
import SubmitModal from './../components/SubmitModal'

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

const STORAGE_KEY = 'alpha-shop-vue-user'
const STORAGE_ITEM = 'alpha-shop-vue-item'

export default {
  components: {
    Stepper,
    Cart,
    Control,
    SubmitModal,
  },
  data() {
    return {
      products: [],
      nowStep: Number(this.$route.name),
      shippingFee: '免費',
      user: {
        gender: '',
        name: '',
        phone: '',
        email: '',
        region: '',
        address: '',
        shippingWay: 'standard',
        cardHost: '',
        cardNumber: '',
        cardDate: '',
        securityCode: '',
      },
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.user
    this.products = JSON.parse(localStorage.getItem(STORAGE_ITEM)) || dummyData.products
  },
  updated() {
    this.updateStep()
  },
  methods: {
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
    },
    afterSubmit() {
      console.log(this.user)
      this.$modal.show('submit-modal')
    },
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
      localStorage.setItem(STORAGE_ITEM, JSON.stringify(this.products))
    },
  },
  watch: {
    user: {
      handler: function() {
        this.saveStorage()
      },
      deep: true,
    },
    products: {
      handler: function() {
        this.saveStorage()
      },
      deep: true,
    },
  },
}
</script>
