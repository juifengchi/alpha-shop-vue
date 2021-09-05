<template>
  <modal name="submit-modal">
    {{ initialUser }}
  </modal>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  }
}
</script>