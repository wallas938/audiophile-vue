<template>
  <div class="prd-main-info">
    <div class="prd-img">
      <picture>
        <source
          media="(min-width: 1440px)"
          :srcset="
            require('@/assets/' + prdFolder + '/desktop/image-product.jpg')
          "
        />
        <source
          media="(min-width: 768px)"
          :srcset="
            require('@/assets/' + prdFolder + '/tablet/image-product.jpg')
          "
        />
        <source
          media="(max-width: 376px)"
          :srcset="
            require('@/assets/' + prdFolder + '/mobile/image-product.jpg')
          "
        />
        <img
          :src="require('@/assets/' + prdFolder + '/mobile/image-product.jpg')"
        />
      </picture>
    </div>
    <div class="prd-body">
      <p v-if="true" class="new-prd">NEW PRODUCT</p>
      <h1 class="prd-name">XX99 MARK II HEADPHONES</h1>
      <p class="prd-desc">
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
      <p class="prd-price">$ 2,999</p>
      <div class="cta">
        <div class="prd-qty">
          <span class="minus">-</span>
          <span>1</span>
          <span class="plus">+</span>
        </div>
        <v-button :mode="'fill'">ADD TO CART</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    prdFolder() {
      return "product-xx99-mark-two-headphones";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.prd-main-info {
  .prd-img {
    margin: 0 auto 2.133333rem auto; // 32px
    border-radius: 0.533333rem; // 8px
  }
  .prd-img source {
    display: inline-block;
    height: 21.8rem;
  }

  .prd-body {
    .new-prd,
    .prd-name,
    .prd-desc {
      margin-bottom: 1.6rem; // 24px
    }

    .new-prd {
      font-size: 0.8rem;
      letter-spacing: 0.571333rem;
      line-height: 16.39px;
      font-weight: 400;
      color: $orange;
    }

    .prd-name {
      font-size: 1.866666rem;
      font-weight: bold;
      line-height: 38.25px;
      letter-spacing: 1px;
    }

    .prd-desc {
      line-height: 25px;
      font-weight: 500;
      font-weight: normal;
      color: rgba($color: #000000, $alpha: 0.5);
    }

    .prd-price {
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 24.59px;
      letter-spacing: 1.29px;
      margin-bottom: 2.066666rem;
    }

    .prd-qty {
      padding: 1rem 1.033333rem;
      width: 8rem; //120px
      display: flex;
      justify-content: space-between;
      background-color: $grey;
      margin-right: 1.066666rem;

      & > .minus,
      & > .plus {
        color: rgba($color: #000000, $alpha: 0.25);
        cursor: pointer;
      }
    }

    .cta {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}

@media screen and (min-width: $tablet-min) {
  .prd-main-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .prd-img {
      margin: unset;
      width: 18.733333rem;
      height: 32rem;
    }

    .prd-body {
      width: 22.633333rem;

      .prd-desc {
        margin-bottom: 1.6rem; // 24px
      }

      .new-prd {
        margin-bottom: 1.133333rem; // 17px
      }

      .prd-name {
        line-height: 32px;
        margin-bottom: 2.133333rem;
      }

      .prd-desc {
        line-height: 25px;
        font-weight: 500;
        font-weight: normal;
        color: rgba($color: #000000, $alpha: 0.5);
      }

      .prd-price {
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 24.59px;
        letter-spacing: 1.29px;
        margin-bottom: 2.066666rem;
      }

      .prd-qty {
        padding: 1rem 1.033333rem;
        width: 8rem; //120px
        display: flex;
        justify-content: space-between;
        background-color: $grey;
        margin-right: 1.066666rem;

        & > .minus,
        & > .plus {
          color: rgba($color: #000000, $alpha: 0.25);
          cursor: pointer;
        }
      }

      .cta {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .prd-main-info {
    .prd-img {
      width: 36rem;
      height: 37.333333rem;
    }

    .prd-body {
      width: 29.666666rem;
      .new-prd {
        margin-bottom: 1.066666rem; // 16px
        font-size: 0.9333333rem;
        line-height: 19.12px;
        letter-spacing: 0.666666rem;
      }

      .prd-name {
        line-height: 44px;
        letter-spacing: 1.43px;
        font-size: 2.666666rem;
      }

      .prd-desc {
        margin-bottom: 2.133333rem; // 32px
      }

      .prd-price {
        margin-bottom: 3.133333rem;
      }
    }
  }
}
</style>