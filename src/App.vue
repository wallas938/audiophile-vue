<template>
  <the-header></the-header>
  <router-view></router-view>
  <!-- <category-nav-item></category-nav-item> -->
  <!-- <other-product></other-product> -->
  <!-- <product-main-info></product-main-info> -->
  <!-- <category-item></category-item> -->
  <div class="footer">
    <the-footer></the-footer>
  </div>
  <!-- <showcase-item></showcase-item> -->
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
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.footer {
  padding-top: 6.4rem; // 96px
}

@media screen and (min-width: $tablet-min) {
  .footer {
    padding-top: 13.333333rem; // 200px
  }
}

@media screen and (min-width: $desktop-min) {
  .footer {
    padding-top: 13.333333rem; // 200px
  }
}
</style>
