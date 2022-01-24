<template>
  <div class="audiophile">
    <div v-if="menuOpened" class="menu-backdrop" @click="toggleMenu"></div>
    <div v-if="menuOpened" class="menu">
      <div class="wrapper container">
        <category-nav-item :category="'headphones'"
          >HEADPHPONES</category-nav-item
        >
        <category-nav-item :category="'speakers'">SPEAKERS</category-nav-item>
        <category-nav-item :category="'earphones'">EARPHONES</category-nav-item>
      </div>
    </div>

    <the-header @update:menu-opened="toggleMenu"></the-header>
    <router-view></router-view>
    <!-- <other-product></other-product> -->
    <!-- <product-main-info></product-main-info> -->
    <div class="footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
//import OtherProduct from "@/components/ui/product/OtherProduct";
// import ProductMainInfo from '@/components/ui/product/ProductMainInfo';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      menuOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
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
    padding-top: 6.4rem; // 96px
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
    /* .menu-backdrop {
      padding-bottom: 10.533333rem;
      top: 6.333333rem;
      min-height: 60.666666rem;
      .menu {
        padding: 7.2rem 2.666666rem 4.466666rem 2.6rem;

        .wrapper {
          display: flex;
          justify-content: space-between;
        }
      }
    } */
    .footer {
      padding-top: 13.333333rem; // 200px
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
