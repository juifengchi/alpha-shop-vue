<template>
  <div class="part">
    <div class="form-row">
      <h1 class="sub-title">運送方式</h1>
    </div>
    <div class="form-row shipping-row">
      <div v-for="way in shippingWays" :key="way.id" class="shipping-way">
        <input type="radio" name="shipping-way" :value="way.fee" :id="way.nameEn" :class="way.nameEn" :checked="way.isSelected" />
        <label :for="way.nameEn" :class="way.nameEn">
          <p class="shipping-name">{{ way.name }}</p>
          <p class="shipping-time">{{way.time }}</p>
        </label>
        <span class="shipping-fee">{{ way.fee }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingWays: [
        {
          id: 1,
          name: '標準配送',
          time: '約 3~7 個工作天',
          fee: '免費',
          nameEn: 'standard',
          isSelected: true
        },
        {
          id: 2,
          name: 'DHL 貨運',
          time: '48 小時內送達',
          fee: '$500',
          nameEn: 'express',
          isSelected: false
        }
      ]
    }
  }
}
</script>