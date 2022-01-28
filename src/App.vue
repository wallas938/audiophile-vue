<template>
  <div class="audiophile">
    <!-- HEADER -->
    <the-header @open:menu="toggleMenu" @display:cart="displayCart"></the-header>

    <!-- GLOBAL BACKDROP -->

    <div v-if="menuOpened || cartDisplayed" class="menu-backdrop" @click="toggleMenu"></div>

    <!-- MENU FOR MOBILE AND TABLET -->
    <div v-if="menuOpened" class="menu">
      <div class="wrapper container">
        <category-nav @active:navigation="toggleMenu"></category-nav>
      </div>
    </div>

    <!-- CART MODAL -->
    <div v-if="cartDisplayed" class="cart">
      <div class="wrapper container">
        <cart-item></cart-item>
      </div>
    </div>

    <!-- ROUTER PAGES -->
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
export default {
  components: {
    TheHeader,
  },
  created() {},
  data() {
    return {
      menuOpened: false,
      cartDisplayed: false,
    };
  },
  watch: {
    cartDisplayed(val) {
      console.log(val);
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    displayCart() {
      console.log(this.cartDisplayed);
      this.cartDisplayed = !this.cartDisplayed;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.audiophile {
  position: relative;
  .menu-backdrop {
    position: absolute;
    top: 6.333333rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }

  .menu {
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
  }

  .footer {
    padding-top: 8rem; // 120px
  }
}

@media screen and (min-width: $tablet-min) {
  .audiophile {
    .menu-backdrop {
      top: 6.333333rem;
    }

    .menu {
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      top: 6.333333rem;
      position: absolute;
      height: 22.666666rem;
      background-color: #fff;
      .wrapper {
        display: flex;
        justify-content: space-between;
        padding: 7.2rem 2.666666rem 4.466666rem 2.6rem;
      }
    }
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
