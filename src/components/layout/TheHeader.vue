<template>
  <div class="mobile-tablet-menu-container">
    <header class="mobile-tablet-header hide-for-desktop">
      <div class="container">
        <div class="menu-icon" @click="toggleMenu">
          <img src="@/assets/shared/icon-hamburger.svg" alt="icon-humburger" />
        </div>
        <div class="logo">
          <router-link to="/home"
            ><img src="@/assets/shared/logo.svg" alt="audiophile"
          /></router-link>
        </div>
        <div class="cart-icon" @click="toggleCart">
          <img src="@/assets/shared/icon-cart.svg" alt="audiophile" />
        </div>
      </div>
    </header>
  </div>

  <header class="desktop-header hide-for-mobile-and-tablet">
    <div class="container">
      <div class="logo">
        <router-link to="/home"
          ><img src="@/assets/shared/logo.svg" alt="audiophile"
        /></router-link>
      </div>
      <ul class="header-nav">
        <li><router-link to="/home">Home</router-link></li>
        <li>
          <router-link to="/category/headphones">Headphones</router-link>
        </li>
        <li>
          <router-link to="/category/speakers">Speakers</router-link>
        </li>
        <li>
          <router-link to="/category/earphones">Earphones</router-link>
        </li>
      </ul>
      <div class="cart-icon" @click="displayCart">
        <img src="@/assets/shared/icon-cart.svg" alt="audiophile" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggle:menu", "toggle:cart"],
  computed: {
    cart() {
      return this.$store.getters["cart"];
    },
  },
  methods: {
    toggleMenu() {
      const isMenuOpened = this.$store.getters["modals"].isMenuOpened;
      this.$emit("toggle:menu", { isMenuOpened: !isMenuOpened });
    },
    toggleCart() {
      const isCartOpened = this.$store.getters["modals"].isCartOpened;
      this.$emit("toggle:cart", { isCartOpened: !isCartOpened });
    },
  },
  watch: {
    cart() {
      this.toggleCart();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

header {
  background-color: #0e0e0e;
  color: #fff;

  img {
    cursor: pointer;
  }

  .menu-icon > img {
    width: 1.066666rem;
    height: 1rem;
  }

  .logo > img {
    width: 9.533333rem;
    height: 1.666666rem;
  }

  .cart-icon > img {
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
  }

  .mobile-tablet-menu-container {
    .mobile-tablet-header .container {
      padding: 2.133333rem 0rem;
      width: 100%;
      display: grid;
      grid-template-columns: 3.866666rem 9.533333rem auto; // 1.066666rem + 2.8rem = 3.866666rem
      grid-template-rows: 1fr;
      grid-template-areas: "menu-icon logo cart-icon";
      justify-content: unset;
      align-items: center;
    }

    .logo {
      grid-area: logo;
    }

    .menu-icon {
      grid-area: menu-icon;
    }

    .cart-icon {
      grid-area: cart-icon;
      justify-self: end;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  header {
    padding-left: 11rem;
    padding-right: 11rem;

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
        font-size: 0.866666rem;
        font-weight: bold;
        line-height: 25px;
        letter-spacing: 2px;
        color: #fff;
        cursor: pointer;
      }

      & > li:not(:last-child) {
        margin-right: 2.266666rem;
      }

      & > li:hover {
        color: $orange;
      }
    }

    .cart-icon > img {
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