<template>
  <div class="stepper-panel mt-4">
    <div class="step step-one" :class="[{ active: nowStep === 1 }, { done: nowStep > 1 }]">
      <div class="circle-container circle-one"></div>
      <div class="label-container">寄送地址</div>
      <div class="connect-line line-one"></div>
    </div>
    <div class="step step-two" :class="[{ active: nowStep === 2 }, { done: nowStep > 2 }]">
      <div class="circle-container circle-two"></div>
      <div class="label-container">運送方式</div>
      <span class="connect-line line-two"></span>
    </div>
    <div class="step step-three" :class="{ active: nowStep === 3 }">
      <div class="circle-container circle-three"></div>
      <div class="label-container">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nowStep: {
      type: Number,
      required: true,
    },
  },
}
</script>
