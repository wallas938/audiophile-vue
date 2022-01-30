<template>
  <div v-if="true" class="modals-handler">
    <div class="backdrop" @click="closeAllModal"></div>
    <menu-modal v-if="isMenuOpened"></menu-modal>
    <cart-modal v-if="isCartOpened"></cart-modal>
    <order-modal v-if="true"></order-modal>
  </div>
</template>

<script>
import CartModal from "@/components/ui/shared/modals/CartModal";
import MenuModal from "@/components/ui/shared/modals/MenuModal";
import OrderModal from "@/components/ui/shared/modals/OrderModal";

export default {
  props: ["close:modals"],
  components: {
    CartModal,
    MenuModal,
    OrderModal,
  },
  data() {
    return {};
  },
  computed: {
    oneAtLeast() {
      return this.isMenuOpened || this.isCartOpened || this.isOrderOpened;
    },
    isMenuOpened() {
      return this.$store.getters["modals"].isMenuOpened;
    },
    isCartOpened() {
      return this.$store.getters["modals"].isCartOpened;
    },
    isOrderOpened() {
      return this.$store.getters["modals"].isOrderOpened;
    },
  },
  methods: {
    closeAllModal() {
      this.$emit("close:modals", {
        isMenuOpened: false,
        isCartOpened: false,
        isOrderOpened: false,
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.backdrop {
  position: absolute;
  top: 6.333333rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba($color: #000000, $alpha: 0.4);
}

@media screen and (min-width: $tablet-min) {
  .backdrop {
    top: 6.333333rem;
  }
}
</style>