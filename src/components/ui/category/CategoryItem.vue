<template>
  <div class="category-item" :class="{ 'flex-reverse': product.id % 2 !== 0 }">
    <div class="prd-img">
      <picture>
        <source
          media="(min-width: 1440px)"
          :srcset="require('@/assets/' + product.categoryImage.desktop)"
        />
        <source
          media="(min-width: 768px)"
          :srcset="require('@/assets/' + product.categoryImage.tablet)"
        />
        <source
          media="(max-width: 376px)"
          :srcset="require('@/assets/' + product.categoryImage.mobile)"
        />
        <img :src="require('@/assets/' + product.categoryImage.mobile)" />
      </picture>
    </div>
    <div class="prd-body">
      <p v-if="product.new" class="new-prd">NEW PRODUCT</p>
      <h1 class="prd-name">{{ product.name.toUpperCase() }}</h1>
      <p class="prd-desc">{{ product.description }}</p>
      <div class="cta">
        <v-button :mode="'fill'" :path="navigateTo">SEE PRODUCT</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    navigateTo() {
      return `/category/${this.product.category}/${this.product.slug}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.category-item {
  &:not(:first-child) {
    padding-top: 8rem;
  }
  .prd-img {
    margin: 0 auto;
    overflow: clip;
    margin-bottom: 2.133333rem;
    border-radius: 0.533333rem;
  }
  .prd-img source {
    height: 23.466666rem;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .new-prd {
    text-align: center;
    font-size: 0.9333333rem;
    letter-spacing: 0.666666rem;
    line-height: 19.12px;
    font-weight: 400;
    color: $orange;
  }

  .new-prd,
  .prd-name,
  .prd-desc {
    margin-bottom: 1.6rem; // 24px
  }

  .prd-name {
    font-size: 1.866666rem;
    font-weight: bold;
    line-height: 38.25px;
    letter-spacing: 1px;
    text-align: center;
  }

  .prd-desc {
    text-align: center;
    line-height: 25px;
    font-weight: 500;
    color: rgba($color: #000000, $alpha: 0.5);
  }

  .cta {
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: $tablet-min) {
  .category-item {
    .prd-img {
      margin-bottom: 3.466666rem; //52px
    }
    .prd-img source {
      height: 23.466666rem; // 352px
    }

    .prd-body {
      padding: 0 3.933333rem;
      .new-prd {
        margin-bottom: 1.066666rem; // 16px
      }

      .prd-name {
        font-size: 2.666666rem; // 40px
        line-height: 44px;
        letter-spacing: 1.43px;
        margin-bottom: 2.133333rem; // 32px
      }

      .prd-desc {
        margin-bottom: 1.6rem; // 24px
      }

      .cta {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .prd-img {
      margin: unset; //52px
      width: 36rem;
      height: 37.333333rem;
    }
    .prd-img source {
      width: 100%;
      height: 100%;
    }

    .prd-body {
      padding: unset;
      width: 29.666666rem;
      .new-prd,
      .prd-name,
      .prd-desc {
        text-align: left;
      }

      .prd-desc {
        margin-bottom: 2.666666rem;
      }

      .cta {
        display: flex;
        justify-content: flex-start;
      }
    }
  }

  .flex-reverse {
    flex-direction: row-reverse;
  }
}
</style>