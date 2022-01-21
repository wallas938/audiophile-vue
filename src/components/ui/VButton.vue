<template>
  <button :class="{fill: mode === 'fill', flat: mode === 'flat'}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
      mode: {
          type: String,
          default: 'fill'
      }
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 1rem 2.1rem;
  font-size: 0.866666rem;
  font-weight: bold;
  line-height: 17.76px;
  letter-spacing: 1px;
}

.flat {
  color: #000;
  border: 1px solid #000;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
  }
}

.fill {
  color: #fff;
  border: none;
  background-color: #D87D4A;

  &:hover {
    background-color: #FBAF85;
  }
}
</style>