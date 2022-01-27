<template>
  <router-link :to="navigateTo">
    <button
      class="v-button"
      :class="{
        fill: mode === 'fill',
        flat: mode === 'flat',
        dark: mode === 'dark',
      }"
    >
      <slot></slot>
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "fill",
      require: true
    },
    path: {
      type: String,
    }
  },
  computed: {
    navigateTo() {
      return `${this.path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
button.v-button {
  padding: 1rem 2.1rem;
  font-size: 0.866666rem;
  font-weight: bold;
  font-style: normal;
  line-height: 17.76px;
  letter-spacing: 1px;
}

.flat {
  color: #000;
  border: 1px solid #000;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #000;
  }
}

.fill {
  color: #fff;
  border: none;
  background-color: $orange;

  &:hover {
    background-color: $hovered-orange;
  }
}

.dark {
  color: #fff;
  border: none;
  background-color: #000;

  &:hover {
    border: none;
    background-color: $hovered-black;
  }
}
</style>