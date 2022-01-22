<template>
  <div class="other-prd">
    <div class="prd-img">
      <picture>
        <source
          media="(min-width: 1440px)"
          :srcset="
            require('@/assets/' +
              prdFolder +
              '/desktop/image-xx99-mark-one-headphones.jpg')
          "
        />
        <source
          media="(min-width: 768px)"
          :srcset="
            require('@/assets/' +
              prdFolder +
              '/tablet/image-xx99-mark-one-headphones.jpg')
          "
        />
        <source
          media="(max-width: 376px)"
          :srcset="
            require('@/assets/' +
              prdFolder +
              '/mobile/image-xx99-mark-one-headphones.jpg')
          "
        />
        <img
          :src="
            require('@/assets/' +
              prdFolder +
              '/mobile/image-xx99-mark-one-headphones.jpg')
          "
        />
      </picture>
    </div>
    <h1>XX99 MARK I</h1>
    <div class="cta">
      <v-button :mode="'fill'">SEE PRODUCT</v-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    prdFolder() {
      return "shared";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.other-prd {
  height: 8rem; // 120px
  border-radius: 0.533333rem; // 8px
  .prd-img,
  h1 {
    margin-bottom: 2.133333rem;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 32.78px;
    letter-spacing: 1.71px;
    font-style: normal;
    text-align: center;
  }

  .cta {
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: $tablet-min) {
  .other-prd {
    height: 21.2rem; // 318px
    width: 14.86rem; // 223px
    .prd-img {
      margin-bottom: 2.666666rem; // 40px
    }

    .cta {
      display: flex;
      justify-content: center;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .other-prd {
    height: 21.2rem; // 318px
    width: 23.333333rem; // 350px

    .cta {
      display: flex;
      justify-content: center;
    }
  }
}
</style>