<template>
  <div class="part d-none">
    <div class="form-row">
      <h1 class="sub-title">運送方式</h1>
    </div>
    <div class="form-row shipping-row">
      <div class="shipping-way">
        <input type="radio" name="shipping-way" value="standard" id="standard" class="standard" checked />
        <label for="standard" class="standard">
          <p class="shipping-name">標準配送</p>
          <p class="shipping-time">約 3~7 個工作天</p>
        </label>
        <span class="shipping-fee">免費</span>
      </div>
      <div class="shipping-way">
        <input type="radio" name="shipping-way" value="express" id="express" class="express" />
        <label for="express" class="express">
          <p class="shipping-name">DHL 貨運</p>
          <p class="shipping-time">48 小時內送達</p>
        </label>
        <span class="shipping-fee">$500</span>
      </div>
    </div>
  </div>
</template>
