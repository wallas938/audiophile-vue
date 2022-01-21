<template>
  <section class="showcase-item">
    <div class="img"></div>
    <div class="content">
      <h1>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h1>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.showcase-item {
  width: 100%;
  .img {
    background-image: url("~@/assets/shared/mobile/image-best-gear.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 20rem;
    margin-bottom: 2.666666rem;
    border-radius: 0.533333rem;
  }

  .content {
    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 1.866666rem;
      font-weight: bold;
      line-height: 38.25px;
      letter-spacing: 1px;
      margin-bottom: 2.133333rem;
    }

    h1 > span {
      color: $orange;
    }

    p {
      font-weight: 500;
      line-height: 25px;
    }
  }
}

@media screen and (min-width: $tablet-min) {
  .showcase-item {
    .img {
      background-image: url("~@/assets/shared/tablet/image-best-gear.jpg");
      margin-bottom: 4.2rem;
    }

    .content {
      padding: 0 3.866666666666667rem 0 3.866666666666667rem;
      h1 {
        font-size: 2.666666rem;
        line-height: 44px;
        letter-spacing: 1.43px;
      }

      h1 > span {
        color: $orange;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .showcase-item {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    .img {
      background-image: url("~@/assets/shared/desktop/image-best-gear.jpg");
      margin-bottom: 0rem;
      width: 36rem;
      height: 39.2rem;
    }
    .content {
      padding: 0;
      width: 29.666666rem;
      h1,
      p {
        text-align: left;
      }
    }
  }
}
</style>