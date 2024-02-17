<script>
export default {
  name: 'Button',
  props: ['custom']
}
</script>

<template>
  <button type="button" :class="`btn btn-dark`">
    <slot></slot>
  </button>
</template>

<style scoped></style>
