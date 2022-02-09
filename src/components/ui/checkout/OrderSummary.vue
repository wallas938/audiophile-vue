<template>
  <!-- wrapper -->
  <div class="wrapper container">
    <h1>SUMMARY</h1>

    <div class="item-list">
      <div class="item" v-for="item in cart" :key="item.saleName">
        <div class="img-container">
          <img
            :src="require('@/assets/cart/' + item.image)"
            alt="product image"
          />
        </div>
        <div class="item-detail">
          <div>
            <p>{{ item.saleName }}</p>
            <p>$ {{ item.price.toLocaleString("en-US") }}</p>
          </div>
          <p class="qty">x {{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="total line">
        <span>TOTAL</span>
        <span class="price">$ {{ total }}</span>
      </p>
      <p class="shipping line">
        <span>SHIPPING</span>
        <span class="price">$ 50</span>
      </p>
      <p class="vat line">
        <span>VAT (INCLUDED)</span>
        <span class="price">$ 1,079</span>
      </p>
      <p class="grand-total line">
        <span>GRAND TOTAL</span>
        <span class="price">$ {{ total }}</span>
      </p>
    </div>
    <div class="cta">
      <v-button @click="openOrderModal" mode="fill" :isLarge="true"
        >CONTINUE & PAY</v-button
      >
    </div>
  </div>
</template>
<script>
export default {
  emits: ["open:orderModal"],
  props: ["formValidationCheck"],
  computed: {
    cart() {
      return this.$store.getters["cart"];
    },
    total() {
      let total = 0;
      if (this.$store.getters["cart"].length > 0) {
        this.$store.getters["cart"].forEach((c) => {
          total += c.price * c.quantity;
        });
      }
      return total.toLocaleString("en-US");
    },
  },
  methods: {
    openOrderModal() {
       this.$emit('open:orderModal', { isOrderOpened: true })
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.wrapper {
  border-radius: 0.533333rem;
  background-color: #fff;
  padding: 2.133333rem 1.6rem 2.133333rem 1.6rem;
  h1 {
    font-weight: bold;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 24.59px;
    letter-spacing: 1.29px;
    margin-bottom: 2.066666rem;
  }

  .item-list {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;

      .img-container {
        width: 4.266666rem;
        height: 4.266666rem;
        border-radius: 0.533333rem;
        overflow: clip;
      }

      .img-container img {
        width: 100%;
        height: 100%;
      }

      .item-detail {
        margin-left: 1.066666rem;
        flex: 1;
        display: flex;
        justify-content: space-between;
      }

      .item-detail > div > p:first-child,
      .item-detail > div > p:last-child,
      .item-detail > div > .qty {
        font-weight: bold;
        font-style: normal;
        line-height: 25px;
      }

      .item-detail > div > p:last-child {
        font-size: 0.933333rem;
        color: rgba($color: #000000, $alpha: 0.5);
      }

      .item-detail > .qty {
        color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }

  .footer {
    margin-bottom: 2.133333rem;
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p:not(:last-child) {
      margin-bottom: 0.533333rem;
    }

    p > span:first-child {
      font-weight: 500;
      font-style: normal;
      line-height: 25px;
      color: rgba($color: #000000, $alpha: 0.5);
    }

    p > span:last-child {
      font-weight: bold;
      font-style: normal;
      font-size: 1.2rem;
      line-height: 24.59px;
    }

    p:last-child > span:last-child {
      color: $orange;
    }
  }

  .cta {
  }
}

@media screen and (min-width: $desktop-min) {
  .wrapper {
    border-radius: 0.533333rem;
    background-color: #fff;
    padding: 2.133333rem 1.6rem 2.133333rem 1.6rem;
    width: 23.333333rem;

    h1 {
      font-weight: bold;
      font-style: normal;
      font-size: 1.2rem;
      line-height: 24.59px;
      letter-spacing: 1.29px;
      margin-bottom: 2.066666rem;
    }

    .item-list {
      margin-bottom: 2.133333rem;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 1.6rem;

        .img-container {
          width: 4.266666rem;
          height: 4.266666rem;
          border-radius: 0.533333rem;
          overflow: clip;
        }

        .img-container img {
          width: 100%;
          height: 100%;
        }

        .item-detail {
          margin-left: 1.066666rem;
          flex: 1;
          display: flex;
          justify-content: space-between;
        }

        .item-detail > div > p:first-child,
        .item-detail > div > p:last-child,
        .item-detail > div > .qty {
          font-weight: bold;
          font-style: normal;
          line-height: 25px;
        }

        .item-detail > div > p:last-child {
          font-size: 0.933333rem;
          color: rgba($color: #000000, $alpha: 0.5);
        }

        .item-detail > .qty {
          color: rgba($color: #000000, $alpha: 0.5);
        }
      }
    }

    .footer {
      margin-bottom: 2.133333rem;
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      p:not(:last-child) {
        margin-bottom: 0.533333rem;
      }

      .vat {
        margin-bottom: 1.6rem !important;
      }

      p > span:first-child {
        font-weight: 500;
        font-style: normal;
        line-height: 25px;
        color: rgba($color: #000000, $alpha: 0.5);
      }

      p > span:last-child {
        font-weight: bold;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 24.59px;
      }

      p:last-child > span:last-child {
        color: $orange;
      }
    }

    .cta {
    }
  }
}
</style>