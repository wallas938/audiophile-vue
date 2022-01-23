<template>
  <div class="home">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero__img"></div>
      <div class="hero__txt">
        <p class="new-prd">NEW PRODUCT</p>
        <h1 class="main-prd-name">XX99 Mark II HEADPHONES</h1>
        <p class="sales-pitch">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div class="hero__cta">
          <v-button>SEE PRODUCT</v-button>
        </div>
      </div>
    </section>

    <!-- CATEGORY NAV SECTION -->
    <section class="cat-nav">
      <div class="wrapper container">
        <category-nav-item :category="'headphones'"
          >HEADPHPONES</category-nav-item
        >
        <category-nav-item :category="'speakers'">SPEAKERS</category-nav-item>
        <category-nav-item :category="'earphones'">EARPHONES</category-nav-item>
      </div>
    </section>

    <!-- SHOWCASE PRODUCTS SECTION -->
    <section class="showcase-prd">
      <div class="zx9-spkr">
        <div class="wrapper container">
          <div class="prd-img">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcset="@/assets/home/desktop/image-speaker-zx9.png"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/home/tablet/image-speaker-zx9.png"
              />
              <source
                media="(max-width: 376px)"
                srcset="@/assets/home/mobile/image-speaker-zx9.png"
              />
              <img src="@/assets/home/mobile/image-speaker-zx9.png" />
            </picture>
          </div>
          <div class="prd-body">
            <h1 class="prd-name">
              ZX9 <br />
              SPEAKER
            </h1>
            <p class="sales-pitch">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div class="cta">
              <v-button :mode="'dark'">SEE PRODUCT</v-button>
            </div>
          </div>
        </div>
      </div>
      <div class="zx7-spkr">
        <div class="wrapper container">
          <div class="prd-img">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcset="@/assets/home/desktop/image-speaker-zx7.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/home/tablet/image-speaker-zx7.jpg"
              />
              <source
                media="(max-width: 376px)"
                srcset="@/assets/home/mobile/image-speaker-zx7.jpg"
              />
              <img src="@/assets/home/mobile/image-speaker-zx7.jpg" />
            </picture>
          </div>
          <div class="prd-body">
            <h1>ZX7 SPEAKER</h1>
            <div class="cta">
              <v-button :mode="'flat'">SEE PRODUCT</v-button>
            </div>
          </div>
        </div>
      </div>
      <div class="yx1-earph">
        <div class="wrapper container">
          <div class="prd-img">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcset="@/assets/home/desktop/image-earphones-yx1.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/home/tablet/image-earphones-yx1.jpg"
              />
              <source
                media="(max-width: 376px)"
                srcset="@/assets/home/mobile/image-earphones-yx1.jpg"
              />
              <img src="@/assets/home/mobile/image-earphones-yx1.jpg" />
            </picture>
          </div>
          <div class="prd-body">
            <h1>YX1 EARPHONES</h1>
            <div class="cta">
              <v-button :mode="'flat'">SEE PRODUCT</v-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE SECTION -->
    <section class="who-we-are">
      <who-we-are></who-we-are>
    </section>
  </div>
</template>


<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.home {
  .hero {
    padding-top: 7.2rem;
    padding-bottom: 7.466666rem;
    position: relative;
    .hero__img {
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-image: url("~@/assets/home/mobile/image-header.jpg");
    }

    .hero__txt {
      width: 21.866666rem;
      margin: 0 auto;
      .new-prd,
      .main-prd-name,
      .sales-pitch {
        text-align: center;
      }

      .new-prd {
        font-size: 0.933333rem;
        font-weight: 400;
        font-style: normal;
        line-height: 19.12px;
        letter-spacing: 10px;
        margin-bottom: 1.066666rem;
        color: rgba($color: #fff, $alpha: 0.4964);
      }

      .main-prd-name {
        font-weight: bold;
        font-style: normal;
        line-height: 40px;
        letter-spacing: 1.29px;
        font-size: 2.4rem;
        color: #fff;
        margin-bottom: 1.6rem;
      }

      .sales-pitch {
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        color: rgba($color: #fff, $alpha: 0.75);
        margin-bottom: 1.866666rem; // 28px
      }

      .hero__cta {
        display: flex;
        justify-content: center;
      }
    }
  }

  .cat-nav {
    padding: 6.133333rem 1.6rem 0 1.6rem;
  }

  .zx9-spkr {
    padding: 8rem 1.6rem 0 1.6rem;

    .wrapper {
      background-color: $orange;
      padding: 3.666666rem 1.6rem 3.666666rem 1.533333rem; //55px 24px 55px 23px
      border-radius: 0.533333rem;

      .prd-img {
        width: 11.483333rem;
        height: 13.8rem;
        margin: 0 auto 2.133333rem auto; // 32px
      }

      .prd-body {
        .prd-name,
        .sales-pitch {
          text-align: center;
        }

        .prd-name {
          color: #fff;
          font-weight: bold;
          font-size: 2.4rem;
          line-height: 40px;
          letter-spacing: 1.29px;
          font-style: normal;
          margin-bottom: 1.6rem;
        }

        .sales-pitch {
          color: rgba($color: #fff, $alpha: 0.75);
          margin-bottom: 1.6rem;
          line-height: 25px;
        }

        .cta {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .zx7-spkr {
    padding: 1.6rem;
    .wrapper {
      padding: 6.733333rem 0 0 1.6rem;
      border-radius: 0.533333rem;
      position: relative;
      overflow: clip;
      height: 21.333333rem;

      .prd-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }

      .prd-body {
        h1 {
          font-size: 1.866666rem;
          font-weight: bold;
          line-height: 38.25px;
          letter-spacing: 2px;
          font-style: normal;
          margin-bottom: 2.133333rem;
        }
      }
    }
  }

  .yx1-earph {
    padding: 1.6rem 1.6rem 0 1.6rem;

    .wrapper {
      .prd-img {
        border-radius: 0.533333rem;
        position: relative;
        overflow: clip;
        height: 13.333333rem;
        margin-bottom: 1.6rem;
      }

      .prd-img source {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
      .prd-body {
        border-radius: 0.533333rem;
        padding: 2.7333333rem 0 2.7333333rem 1.6rem;
        background-color: $grey;
        h1 {
          margin-bottom: 2.133333rem;
        }

        .cta {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }

  .who-we-are {
    padding: 8rem 1.6rem 0 1.6rem;
  }
}

@media screen and (min-width: $tablet-min) {
  .home {
    .hero {
      padding-top: 8.4rem; // 126px
      padding-bottom: 11.133333rem; // 167px
      .hero__img {
        background-position: bottom center;
        background-image: url("~@/assets/home/tablet/image-header.jpg");
      }

      .hero__txt {
        width: 25.266666rem;

        .new-prd {
          margin-bottom: 1.6rem; // 24px
        }

        .main-prd-name {
          line-height: 56px;
          letter-spacing: 2px;
          font-size: 3.733333rem; // 56px
        }

        .sales-pitch {
          padding: 0 1rem;
          margin-bottom: 2.666666rem; // 40px
        }

        .hero__cta {
          display: flex;
          justify-content: center;
        }
      }
    }

    .cat-nav {
      padding: 9.866666rem 2.666666rem 0 2.6rem;

      .wrapper {
        display: flex;
        justify-content: center;
      }
    }

    .zx9-spkr {
      padding: 6.4rem 2.666666rem 0 2.666666rem;

      .wrapper {
        padding: 3.466666rem 11.266666rem 4.266666rem 11.4rem; //52px 169px 55px 171px

        .prd-body {
          .prd-img {
            width: 11.483333rem;
            height: 13.8rem;
            margin: 0 auto 2.133333rem auto; // 32px
          }

          .prd-name {
            font-size: 3.733333rem;
            line-height: 58px;
            letter-spacing: 2px;
          }

          .cta {
            display: flex;
            justify-content: center;
          }
        }
      }
    }

    .zx7-spkr {
      padding: 1.6rem 2.666666rem;
      .wrapper {
        padding: 6.733333rem 0 0 4.133333rem;
      }
    }

    .yx1-earph {
      padding: 2.133333rem 2.6rem 0 2.666666rem;

      .wrapper {
        display: flex;
        justify-content: space-between;
        .prd-img,
        .prd-body {
          width: 22.6rem;
          height: 21.333333rem;
        }
        .prd-img {
          flex: 1;
          margin-bottom: unset;
        }

        .prd-img source {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .prd-body {
          border-radius: 0.533333rem;
          padding: 6.7333333rem 0 0 2.7333333rem;
          background-color: $grey;
          margin-left: 1.6rem;

          .cta {
            display: flex;
            justify-content: flex-start;
          }
        }
      }
    }

    .who-we-are {
      padding: 6.4rem 2.666666rem 0 2.6rem;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .home {
    .hero {
      padding: 11rem 8.533333rem 11rem 10.533333rem; // 165px 128px 165px 158px
      .hero__img {
        background-position: right center;
        background-image: url("~@/assets/home/desktop/image-hero.jpg");
      }

      .hero__txt {
        width: 26.533333rem;
        margin: unset;
        .new-prd,
        .main-prd-name,
        .sales-pitch {
          text-align: left;
        }

        .new-prd {
          margin-bottom: 1.6rem; // 24px
        }

        .main-prd-name {
          line-height: 56px;
          letter-spacing: 2px;
          font-size: 3.733333rem; // 56px
        }

        .sales-pitch {
          width: 23.266666rem;
          padding: unset;
          margin-bottom: 2.666666rem; // 40px
        }

        .hero__cta {
          display: flex;
          justify-content: flex-start;
        }
      }
    }

    .cat-nav {
      padding: 13.333333rem 11rem 0 11rem;
    }

    .zx9-spkr {
      padding: 11.2rem 11rem 0 11rem;
      .wrapper {
        padding: 8.866666rem 6.333333rem 8.266666rem 0; //133px 95px 169px 124px
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        overflow: clip;
        .prd-img {
          position: absolute;
          left: 7.832666rem;
          bottom: -0.5rem;
          width: 24.682rem; // 370.23px
          height: 29.666666rem; // 435px
          margin: unset; // 32px
        }

        .prd-body {
          width: 23.266666rem;
          align-self: flex-end;
          .prd-name,
          .sales-pitch {
            text-align: left;
          }
          .sales-pitch {
            margin-bottom: 2.666666rem;
          }

          .cta {
            display: flex;
            justify-content: flex-start;
          }
        }
      }
    }

    .zx7-spkr {
      padding: 3.2rem 2.666666rem; // 40px
      .wrapper {
        padding: 6.733333rem 0 0 6.333333rem; // 95px
      }
    }

    .yx1-earph {
      padding: 3.2rem 11rem 0 11rem;

      .wrapper {
        .prd-img,
        .prd-body {
          width: 36rem; // 540px
        }
        .prd-img {
          flex: 1;
        }
        .prd-body {
          padding: 6.7333333rem 0 0 6.333333rem;
          margin-left: 2rem;
        }
      }
    }

    .who-we-are {
      padding: 13.333333rem 11rem 0 11rem;
    }
  }
}
</style>


<script>
import WhoWeAre from "../components/ui/shared/WhoWeAre.vue";
export default {
  components: { WhoWeAre },
  computed: {
    prdFolder() {
      return "home";
    },
  },
};
</script>

