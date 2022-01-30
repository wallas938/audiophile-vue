<template>
  <!-- MENU FOR MOBILE AND TABLET -->
  <div class="menu">
    <div class="wrapper container">
      <category-nav @active:navigation="toggleMenu({isMenuOpened: false})"></category-nav>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["toggleMenu"],
};
</script>
<style lang="scss">
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
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

@media screen and (min-width: $tablet-min) {
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
}
</style>