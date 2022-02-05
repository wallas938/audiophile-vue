<template>
  <div class="audiophile">
    <!-- HEADER -->
    <the-header
      @toggle:menu="toggleMenu($event)"
      @toggle:cart="toggleCart($event)"
    ></the-header>

    <!-- GLOBAL BACKDROP -->
    <modals-handler @close:modals="closeModals"></modals-handler>

    <!-- ROUTER PAGES -->
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import ModalsHandler from "@/components/ui/shared/modals/ModalsHandler";
export default {
  components: {
    TheHeader,
    ModalsHandler,
  },
  provide() {
    return {
      toggleMenu: this.toggleMenu,
      closeModals: this.closeModals
    };
  },
  methods: {
    toggleMenu(payload) {
      this.$store.dispatch("updateModals", {
        isMenuOpened: payload.isMenuOpened,
        isCartOpened: false,
        isOrderOpened: false,
      });
    },
    toggleCart(payload) {
      this.$store.dispatch("updateModals", {
        isMenuOpened: false,
        isCartOpened: payload.isCartOpened,
        isOrderOpened: false,
      });
    },
    closeModals() {
      this.$store.dispatch("updateModals", {
        isMenuOpened: false,
        isCartOpened: false,
        isOrderOpened: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.audiophile {
  position: relative;

  /* .menu {
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    top: 6.333333rem;
    position: absolute;
    height: 50rem;
    background-color: #fff;
    border-radius: 0 0 0.533333rem 0.533333rem;

    .wrapper {
      overflow: scroll;
      padding: 6.333333rem 1.6rem 2.333333rem 1.6rem;
    }
  } */

  .footer {
    padding-top: 8rem; // 120px
  }
}

@media screen and (min-width: $tablet-min) {
  .audiophile {
    .footer {
      padding-top: 6.4rem; // 96px
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .audiophile {
    .footer {
      padding-top: 13.333333rem; // 200px
    }
  }
}
</style>
