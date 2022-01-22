<template>
  <the-header></the-header>
  <product-main-info></product-main-info>
  <!-- <category-item></category-item> -->
  <!-- <the-footer></the-footer> -->
  <!-- <showcase-item></showcase-item> -->
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';
import ProductMainInfo from '@/components/ui/product/ProductMainInfo';
//import TheFooter from '@/components/layout/TheFooter';

export default {
  components: {
    TheHeader,
    ProductMainInfo
  },
};
</script>

<style lang="scss" scoped>
</style>
