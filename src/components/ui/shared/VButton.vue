<template>
  <button
    class="v-button"
    :class="{
      fill: mode === 'fill',
      flat: mode === 'flat',
      dark: mode === 'dark',
      large: isLarge
    }"
  >
    <router-link :to="navigateTo"> <slot></slot></router-link>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "fill",
      required: true,
    },
    path: {
      type: String,
      required: false,
    },
    isLarge: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    navigateTo() {
      return this.path ? `${this.path}` : "#";
    },
  },
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

.large {
  width: 100%;
}
</style>