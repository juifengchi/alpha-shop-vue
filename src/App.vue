<template>
  <div id="alpha-shop-vue">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }  
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
