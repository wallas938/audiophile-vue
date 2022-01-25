<template>
  <div class="cat-page">
    <div class="caption">
      <p>{{ $route.params.categoryName }}</p>
    </div>
    <section class="products wrapper container">
      <category-item
        v-for="prd in products"
        :key="prd.id"
        :product="prd"
      ></category-item>
    </section>
    <section class="cat-nav">
      <div class="wrapper container">
        <category-nav-item :category="'headphones'"
          >HEADPHPONES</category-nav-item
        >
        <category-nav-item :category="'speakers'">SPEAKERS</category-nav-item>
        <category-nav-item :category="'earphones'">EARPHONES</category-nav-item>
      </div>
    </section>
    <!-- WHO WE ARE SECTION -->
    <section class="who-we-are">
      <who-we-are></who-we-are>
    </section>
  </div>
</template>

<script>
import CategoryItem from "@/components/ui/category/CategoryItem";
export default {
  components: {
    CategoryItem,
  },
  created() {
    console.log(
      this.$store.getters["data"].filter(
        (data) => data.category === this.$route.params.categoryName
      )
    );
  },
  computed: {
    products() {
      const products = this.$store.getters["data"].filter(
        (data) => data.category === this.$route.params.categoryName
      );
      return products.reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.cat-page {
  .caption {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.8rem; // 102px
    p {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      font-weight: bold;
      font-size: 1.866666rem;
      line-height: 38.25px;
      letter-spacing: 2px;
    }
  }

  .wrapper {
    padding: 4.266666rem 1.6rem 0 1.6rem;
  }

  .cat-nav {
    padding: 6.133333rem 1.6rem 0 1.6rem;
  }

  .who-we-are {
    padding: 8rem 1.6rem 0 1.6rem;
  }
}

@media screen and (min-width: $tablet-min) {
  .cat-page {
    .caption {
      height: 16.4rem; // 246px
      p {
        font-size: 2.666666rem; // 40px
        line-height: 44px;
        letter-spacing: 1.43px;
      }
    }

    .wrapper {
      padding: 8rem 2.666666rem 0 2.6rem;
    }

    .cat-nav {
      padding: 9.866666rem 2.666666rem 0 2.6rem;

      .wrapper {
        display: flex;
        justify-content: space-between;
      }
    }

    .who-we-are {
      padding: 6.4rem 2.666666rem 0 2.6rem;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .cat-page {
    .caption {
      height: 15.933333rem; // 239px
    }

    .wrapper {
      padding: 10.666666rem 0 0 0;
    }

    .cat-nav {
      padding: 13.333333rem 11rem 0 11rem;
    }

    .who-we-are {
      padding: 13.333333rem 11rem 0 11rem;
    }
  }
}
</style>