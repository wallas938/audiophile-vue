<template>
  <div class="mobile-tablet-menu-container">
    <header class="mobile-tablet-header hide-for-desktop">
      <div class="container">
        <div class="menu" @click="toggleMenu">
          <img src="@/assets/shared/icon-hamburger.svg" alt="icon-humburger" />
        </div>
        <div class="logo">
          <img src="@/assets/shared/logo.svg" alt="audiophile" />
        </div>
        <div class="cart">
          <img src="@/assets/shared/icon-cart.svg" alt="audiophile" />
        </div>
      </div>
    </header>
  </div>

  <header class="desktop-header hide-for-mobile-and-tablet">
    <div class="container">
      <div class="logo">
        <img src="@/assets/shared/logo.svg" alt="audiophile" />
      </div>
      <ul class="header-nav">
        <li class="home">Home</li>
        <li class="headphones">Headphones</li>
        <li class="speakers">Speakers</li>
        <li class="earphones">Earphones</li>
      </ul>
      <div class="cart">
        <img src="@/assets/shared/icon-cart.svg" alt="audiophile" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["update:menuOpened"],
  methods: {
    toggleMenu() {
      this.$emit("update:menuOpened");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

header {
  /* padding: 2.133333rem 1.6rem; */
  background-color: $special-black;
  color: #fff;

  img {
    cursor: pointer;
  }

  .menu > img {
    width: 1.066666rem;
    height: 1rem;
  }

  .logo > img {
    width: 9.533333rem;
    height: 1.666666rem;
  }

  .cart > img {
    width: 1.533333rem;
    height: 1.333333rem;
  }
}

.mobile-tablet-menu-container {
  .mobile-tablet-header .container {
    padding: 2.133333rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba($color: #979797, $alpha: 0.2);
  }
}

@media screen and (min-width: $tablet-min) {
  header {
    padding: 0 2.666666rem;

    .logo {
      grid-area: logo;
    }

    .menu {
      grid-area: menu;
    }

    .cart {
      grid-area: cart;
      justify-self: end;
    }
  }

  .mobile-tablet-menu-container {
    .mobile-tablet-header .container {
      padding: 2.133333rem 0rem;
      width: 100%;
      display: grid;
      grid-template-columns: 3.866666rem 9.533333rem auto; // 1.066666rem + 2.8rem = 3.866666rem
      grid-template-areas: "menu logo cart";
      justify-content: unset;
      align-items: center;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  header {
    /* padding: 2.133333rem 1.6rem; */

    img {
      cursor: pointer;
    }

    .logo > img {
      width: 9.533333rem;
      height: 1.666666rem;
    }

    .header-nav {
      display: flex;

      & > li {
        font-size: 0.866666;
        font-weight: bold;
        line-height: 25px;
        letter-spacing: 2px;
        color: #fff;
      }

      & > li:not(:last-child) {
        margin-right: 2.266666rem;
      }
    }

    .cart > img {
      width: 1.533333rem;
      height: 1.333333rem;
    }
  }

  .desktop-header .container {
    padding: 2.133333rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba($color: #979797, $alpha: 0.2);
  }
}
</style>