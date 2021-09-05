<template>
  <main id="main-content">
    <form id="form" class="pt-4">
      <div class="checkout-container">
        <h1 class="main-title">結帳</h1>

        <Stepper :now-step="nowStep" />

        <div class="form-panel">
          <router-view :initial-user="user" />
        </div>
      </div>

      <Cart :initial-products="products" :initial-shipping-fee="shippingFee" :initial-total-fee="totalFee" @after-change-qty="afterChangeQty" />

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
      nowStep: Number(this.$route.name),
      products: [],
      user: {
        gender: '',
        name: '',
        phone: '',
        email: '',
        region: '',
        address: '',
        shippingWay: '',
        cardHost: '',
        cardNumber: '',
        cardDate: '',
        securityCode: '',
      },
    }
  },
  computed: {
    shippingFee() {
      if (this.user.shippingWay === 'express') return '$500'
      return '免費'
    },
    totalFee() {
      let total = 0
      for (let i = 0; i < this.products.length; i++) {
        total += this.products[i].qty * this.products[i].price
      }
      if (this.user.shippingWay === 'express') {
        total += 500
      }
      return total
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.user
    this.products = JSON.parse(localStorage.getItem(STORAGE_ITEM)) || dummyData.products
  },
  updated() {
    this.nowStep = Number(this.$route.name)
  },
  methods: {
    afterClickButton(btn) {
      if (btn === 'next') {
        this.nowStep += 1
      } else if (btn === 'previous') {
        this.nowStep -= 1
      }
      this.$router.push({ name: this.nowStep })
    },
    afterChangeQty(productId, btn) {
      this.products = this.products.map(product => {
        if (product.id === productId) {
          if (btn === 'minus' && product.qty !== 1) {
            return {
              ...product,
              qty: product.qty - 1,
            }
          } else if (btn === 'plus') {
            return {
              ...product,
              qty: product.qty + 1,
            }
          }
        }
        return product
      })
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
