<template>
  <div class="control-container py-8">
    <button class="btn previous">上一步</button>
    <button class="btn next ml-4" @click.stop.prevent="handleSubmit">下一步</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      this.$emit('after-next-step-submit')
    }
  }
}
</script>