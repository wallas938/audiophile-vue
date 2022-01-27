<template>
  <div class="other-prd-list container">
    <!-- WRAPPER -->
    <other-product-item v-for="other in others" :other="other" :key="other.slug"></other-product-item>
  </div>
</template>

<script>
import OtherProductItem from "@/components/ui/product/OtherProductItem";
export default {
  props: ["others"],
  components: {
    OtherProductItem,
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.other-prd-list {
}

@media screen and (min-width: $tablet-min) {
  .other-prd-list {
    display: flex;
    justify-content: space-between;
  }
}
</style>