<template>
  <div class="other-prd">
    <div class="prd-img">
      <picture>
        <source
          media="(min-width: 1440px)"
          :srcset="require('@/assets/' + imgPath.desktop)"
        />
        <source
          media="(min-width: 768px)"
          :srcset="require('@/assets/' + imgPath.tablet)"
        />
        <source
          media="(max-width: 376px)"
          :srcset="require('@/assets/' + imgPath.mobile)"
        />
        <img :src="require('@/assets/' + imgPath.mobile)" />
      </picture>
    </div>
    <h1>{{ other.name }}</h1>
    <div class="cta">
      <v-button :mode="'fill'" :path="navigateTo">SEE PRODUCT</v-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["other"],
  computed: {
    imgPath() {
      return this.other.image;
    },
    navigateTo() {
      return `/category/${this.other.category}/${this.other.slug}`;
    },
    slug() {
      return this.other.slug.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.other-prd {
  border-radius: 0.533333rem; // 8px
  &:not(:first-child) {
    padding-top: 3.733333rem;
  }
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
    width: 14.86rem; // 223px
    &:not(:first-child) {
      padding-top: unset;
    }
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
    width: 23.333333rem; // 350px

    .cta {
      display: flex;
      justify-content: center;
    }
  }
}
</style>