<template>
  <div class="control-container py-4">
    <button v-show="showPrevBtn" class="btn previous" @click.stop.prevent="handleButtonClicked('previous')">上一步</button>
    <button v-show="showNextBtn" class="btn next ml-4" @click.stop.prevent="handleButtonClicked('next')">下一步</button>
    <button v-show="showSubmitBtn" class="btn next ml-4" @click.stop.prevent="">確認下單</button>
  </div>
</template>

<script>
export default {
  props: {
    nowStep: {
      type: Number,
      required: true
    }
  },
  computed: {
    showPrevBtn() {
      return this.nowStep !== 1
    },
    showNextBtn() {
      return this.nowStep !== 3
    },
    showSubmitBtn() {
      return this.nowStep === 3
    }
  },
  methods: {
    handleButtonClicked(e) {
      this.$emit('after-button-clicked', e)
    }
  }
}
</script>