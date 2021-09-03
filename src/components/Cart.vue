<template>
  <div class="cart-container my-8">
    <h5 class="cart-title mt-4 px-4">購物籃</h5>

    <div class="product-panel px-4">
      <div class="product">
        <div class="product_img-wrapper">
          <img :src="require('../assets/images/product-1.png')" />
        </div>
        <div class="product_info-wrapper">
          <p class="product-description">破壞補丁修身牛仔褲</p>
          <div class="product-qty">
            <span class="product-qty_minus">-</span>
            <span class="product-qty_num">1</span>
            <span class="product-qty_plus">+</span>
          </div>
          <p class="product-price">$3999</p>
        </div>
      </div>
      <div class="product">
        <div class="product_img-wrapper">
          <img :src="require('../assets/images/product-2.png')" />
        </div>
        <div class="product_info-wrapper">
          <p class="product-description">刷色直筒牛仔褲</p>
          <div class="product-qty">
            <span class="product-qty_minus">-</span>
            <span class="product-qty_num">1</span>
            <span class="product-qty_plus">+</span>
          </div>
          <p class="product-price">$1299</p>
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
