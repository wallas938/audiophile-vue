<template>
  <div class="prd-detail-page">
    <div class="prev">
      <p class="wrapper container">
        <a @click="goBack" class="prev-link">Go Back</a>
      </p>
    </div>
    <section class="prd-main">
      <product-main-info
        :product="product"
        :quantity="quantity"
        @add:quantity="add"
        @subtract:quantity="subtract"
        @add:cart="addCart($event)"
      ></product-main-info>
    </section>
    <div class="feature-in-the-box-block">
      <div class="wrapper">
        <section class="feature">
          <div class="wrapper container">
            <h2>FEATURES</h2>
            <p class="content">
              {{ product.features }}
            </p>
          </div>
        </section>
        <section class="in-the-box">
          <div class="wrapper container">
            <h2>IN THE BOX</h2>
            <ul class="list">
              <li v-for="include in product.includes" :key="include.item">
                <span class="qty">{{ include.quantity }}x</span>
                <span class="content">{{ include.item }}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <section class="galery">
      <div class="wrapper container">
        <div class="img-galery img-1">
          <picture>
            <source
              media="(min-width: 1440px)"
              :srcset="require('@/assets/' + prdFolder.first.desktop)"
            />
            <source
              media="(min-width: 768px)"
              :srcset="require('@/assets/' + prdFolder.first.tablet)"
            />
            <source
              media="(max-width: 376px)"
              :srcset="require('@/assets/' + prdFolder.first.mobile)"
            />
            <img :src="require('@/assets/' + prdFolder.first.mobile)" />
          </picture>
        </div>
        <div class="img-galery img-2">
          <picture>
            <source
              media="(min-width: 1440px)"
              :srcset="require('@/assets/' + prdFolder.second.desktop)"
            />
            <source
              media="(min-width: 768px)"
              :srcset="require('@/assets/' + prdFolder.second.tablet)"
            />
            <source
              media="(max-width: 376px)"
              :srcset="require('@/assets/' + prdFolder.second.mobile)"
            />
            <img :src="require('@/assets/' + prdFolder.second.mobile)" />
          </picture>
        </div>
        <div class="img-galery img-3">
          <picture>
            <source
              media="(min-width: 1440px)"
              :srcset="require('@/assets/' + prdFolder.third.desktop)"
            />
            <source
              media="(min-width: 768px)"
              :srcset="require('@/assets/' + prdFolder.third.tablet)"
            />
            <source
              media="(max-width: 376px)"
              :srcset="require('@/assets/' + prdFolder.third.mobile)"
            />
            <img :src="require('@/assets/' + prdFolder.third.mobile)" />
          </picture>
        </div>
      </div>
    </section>
    <section class="you-may-also-want">
      <h1>YOU MAY ALSO WANT</h1>
      <other-product-list :others="others"></other-product-list>
    </section>
    <section class="cat-nav-item">
      <div class="wrapper container">
        <category-nav></category-nav>
      </div>
    </section>
    <!-- WHO WE ARE SECTION -->
    <section class="who-we-are">
      <who-we-are></who-we-are>
    </section>

    <!-- FOOTER -->
    <div class="footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import ProductMainInfo from "@/components/ui/product/ProductMainInfo";
import OtherProductList from "@/components/ui/product/OtherProductList";
export default {
  props: ["productName"],
  components: {
    ProductMainInfo,
    OtherProductList,
  },
  data() {
    return {
      loading: false,
      product: null,
      error: null,
      quantity: 1,
      min: 1,
      max: 99,
    };
  },
  created() {
    this.fetchProduct(this.productName);
  },
  watch: {
    productName() {
      this.resetQuantity();
      this.fetchProduct(this.productName);
    },
  },
  computed: {
    prdFolder() {
      return this.product.gallery;
    },
    others() {
      return this.product.others;
    },
    quantityCheck() {
      return this.quantity >= 1 ? this.quantity : 1;
    },
  },
  methods: {
    fetchProduct(productName) {
      const data = this.$store.getters["data"];
      this.product = data.find((data) => data.slug === productName);
    },
    goBack() {
      this.$router.go(-1);
    },
    add() {
      if (this.quantity < this.max) {
        this.quantity++;
        return;
      }
      this.quantity = this.max;
    },
    subtract() {
      if (this.quantity > this.min) {
        this.quantity--;
        return;
      }
      this.quantity = this.min;
    },
    resetQuantity() {
      this.quantity = 1;
    },
    addCart(payload) {
      this.resetQuantity();
      this.$store.dispatch("addCart", { cartItem: payload });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.prd-detail-page {
  .prev {
    padding: 1.066666rem 1.6rem 0 1.6rem;

    .wrapper a.prev-link {
      color: rgba($color: #000000, $alpha: 0.5);
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
    }

    .wrapper a.prev-link:hover {
      color: $orange;
    }
  }

  .prd-main {
    padding: 1.6rem;
  }

  .feature {
    padding: 5.866666rem 1.6rem 0 1.6rem;
    h2 {
      font-weight: bold;
      font-style: normal;
      font-size: 1.5rem;
      line-height: 36px;
      letter-spacing: 0.86px;
      margin-bottom: 1.6rem;
    }

    .content {
      color: rgba($color: #000000, $alpha: 0.5);
      font-weight: 500;
      font-style: normal;
      line-height: 25px;
    }
  }

  .in-the-box {
    padding: 5.866666rem 1.6rem 0 1.6rem;

    .wrapper {
      h2 {
        font-weight: bold;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 36px;
        letter-spacing: 0.86px;
        margin-bottom: 1.6rem;
      }

      ul.list {
        li {
          position: relative;
          span.qty {
            color: $orange;
            font-weight: bold;
            font-style: normal;
            line-height: 25px;
          }

          span.content {
            position: absolute;
            top: 0;
            left: 2.6rem; //39px
            color: rgba($color: #000000, $alpha: 0.5);
            font-style: normal;
            line-height: 25px;
            font-weight: 500;
            width: max-content;
          }
        }

        li:not(:last-child) {
          margin-bottom: 0.533333rem;
        }
      }
    }
  }

  .galery {
    padding: 5.866666rem 1.6rem 0 1.6rem;
    .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      //row-gap: 1.333333rem;
      grid-template-areas:
        "img-1"
        "img-2"
        "img-3"
        "img-3";

      .img-galery {
        border-radius: 0.533333rem;
        overflow: clip;
      }
      .img-1 {
        grid-area: img-1;
      }
      .img-2 {
        grid-area: img-2;
      }
      .img-3 {
        grid-area: img-3;
      }
    }
  }

  .you-may-also-want {
    padding: 8rem 1.6rem 0 1.6rem;

    h1 {
      font-weight: bold;
      font-style: normal;
      font-size: 1.6rem;
      line-height: 36px;
      letter-spacing: 0.86px;
      margin-bottom: 2.666666rem;
      text-align: center;
    }
  }

  .cat-nav-item {
    padding: 11.466666rem 1.6rem 0 1.6rem;
  }

  .who-we-are {
    padding: 8rem 1.6rem 0 1.6rem;
  }

  .footer {
    padding-top: 8rem; // 120px
  }
}

@media screen and (min-width: $tablet-min) {
  .prd-detail-page {
    .prev {
      padding: 2.2rem 2.666666rem 0 2.666666rem; // 36px 40px
    }

    .prd-main {
      padding: 1.6rem 2.666666rem 0 2.6rem;
    }

    .feature-in-the-box-block {
      padding: 8rem 2.666666rem 0 2.6rem;

      > .wrapper {
        display: flex;
        flex-direction: column;
      }

      .feature {
        padding: 0;
        h2 {
          font-size: 2.1333333rem;
          letter-spacing: 1.14px;
          margin-bottom: 2.1333333rem;
        }
      }

      .in-the-box {
        padding: 8rem 0 0 0;

        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-right: 10.666666rem;
          h2 {
            font-size: 2.1333333rem;
            letter-spacing: 1.14px;
            margin-bottom: unset;
          }

          ul.list {
            width: 13.266666rem;
          }
        }
      }
    }

    .galery {
      padding: 5.866666rem 1.6rem 0 1.6rem;
      .wrapper {
        display: grid;
        grid-template-columns: minmax(18.333333rem, 1fr) minmax(
            26.333333rem,
            1fr
          );
        grid-template-rows: repeat(2, 1fr);
        column-gap: 1.333333rem;
        grid-template-areas:
          "img-1 img-3"
          "img-2 img-3";

        .img-galery {
          border-radius: 0.533333rem;
          overflow: clip;
        }

        .img-galery img {
          height: 100%;
        }
        .img-1 {
          grid-area: img-1;
        }
        .img-2 {
          padding-top: 1.333333rem;
          grid-area: img-2;
        }
        .img-3 {
          grid-area: img-3;
        }
      }
    }

    .you-may-also-want {
      padding: 8rem 2.666666rem 0 2.6rem;

      h1 {
        font-size: 2.133333rem;
        letter-spacing: 1.14px;
        margin-bottom: 3.733333rem;
      }
    }

    .cat-nav-item {
      padding: 11.466666rem 2.666666rem 0 2.6rem;

      .wrapper {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .prd-detail-page {
    .prev {
      padding: 2.2rem 2.666666rem 0 2.666666rem; // 36px 40px
    }

    .prd-main {
      padding: 1.6rem 11rem 0 11rem;
    }

    .feature-in-the-box-block {
      padding: 8rem 11rem 0 11rem;
      > .wrapper {
        padding: 0 12rem 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 auto;
        max-width: 1110px;
      }

      .feature {
        padding: 0;
        width: 42.333333rem;
        h2 {
          font-size: 2.1333333rem;
          letter-spacing: 1.14px;
          margin-bottom: 2.1333333rem;
        }
      }

      .in-the-box {
        padding: 0 0 0 0;

        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: unset;
          align-items: unset;
          padding-right: 0;
          h2 {
            margin-bottom: 2.133333rem;
          }

          ul.list {
            width: 13.266666rem;
          }
        }
      }
    }

    .galery {
      padding: 10.666666rem 11rem 0 11rem;
      .wrapper {
        display: grid;
        grid-template-columns: minmax(29.666666rem, 1fr) minmax(
            42.333333rem,
            1fr
          );
        grid-template-rows: repeat(2, 1fr);
        column-gap: 1.333333rem;
        grid-template-areas:
          "img-1 img-3"
          "img-2 img-3";

        .img-galery {
          border-radius: 0.533333rem;
          overflow: clip;
        }

        .img-galery img {
          height: 100%;
        }
        .img-1 {
          grid-area: img-1;
        }
        .img-2 {
          padding-top: 1.333333rem;
          grid-area: img-2;
        }
        .img-3 {
          grid-area: img-3;
        }
      }
    }

    .you-may-also-want {
      padding: 10.666666rem 11rem 0 11rem;
    }

    .cat-nav-item {
      padding: 16rem 11rem 0 11rem;
    }

    .footer {
      padding-top: 10.666666rem;
    }
  }
}
</style>