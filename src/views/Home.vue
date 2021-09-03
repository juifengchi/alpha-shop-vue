<template>
  <main id="main-content">
    <form id="form" class="pt-4">

      <div class="checkout-container">
        <h1 class="main-title">結帳</h1>

        <Stepper />

        <div class="form-panel">
          <FormPart1 />

          <FormPart2 />

          <FormPart3 />
        </div>
      </div>

      <Cart />

      <Control />
    </form>
  </main>
</template>

<script>
import Stepper from './../components/Stepper'
import FormPart1 from './../components/FormPart1'
import FormPart2 from './../components/FormPart2'
import FormPart3 from './../components/FormPart3'
import Cart from './../components/Cart'
import Control from './../components/Control'

export default {
  components: {
    Stepper,
    FormPart1,
    FormPart2,
    FormPart3,
    Cart,
    Control
  }
}
</script>