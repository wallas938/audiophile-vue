<template>
  <div class="order-modal container">
    <div class="check"></div>
    <div class="text">
      <h1>
        THANK YOU <br />
        FOR YOUR ORDER
      </h1>
      <p>You will receive an email confirmation shortly.</p>
    </div>
    <div class="purchase-summary">
      <div class="item-list">
        <div class="item">
          <div class="img-container">
            <img :src="require('@/assets/' + imgPath)" alt="product image" />
          </div>
          <div class="item-detail">
            <div>
              <p>XX99 MK II</p>
              <p>$ 2,999</p>
            </div>
            <p class="qty">x1</p>
          </div>
        </div>
        <p class="hidden-items" v-if="true">and 2 other item(s)</p>
      </div>
      <div class="grand-total">
        <p>GRAND TOTAL</p>
        <p>$ 5,446</p>
      </div>
    </div>
    <div class="cta">
      <v-button :path="'/home'" mode="fill" :isLarge="true">BACK TO HOME</v-button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    imgPath() {
      return "cart/image-xx99-mark-two-headphones.jpg";
    },
  },
};
</script>
<style lang="scss">
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.order-modal {
  position: absolute;
  padding: 2.133333rem;
  z-index: 3;
  top: 14.933333rem;
  left: 50%;
  transform: translateX(-50%);
  width: 21.8rem;
  background-color: #fff;
  border-radius: 0.533333rem;

  .check {
    width: 4.266666rem;
    height: 4.266666rem;
    border-radius: 100%;
    background-color: $orange;
    position: relative;
    margin-bottom: 1.533333rem;

    &:before {
      content: "";
      top: 1.618666rem;
      left: 1.383333rem;
      position: absolute;
      width: 1.503333rem;
      height: 1.053333rem;
      background-color: #fff;
      clip-path: polygon(9% 53%, 31% 74%, 79% 0, 93% 8%, 34% 100%, 0 68%);
    }
  }

  .text {
    h1 {
      font-weight: bold;
      font-style: normal;
      font-size: 1.6rem;
      line-height: 28px;
      letter-spacing: 0.86px;
      margin-bottom: 1.0533333rem;
    }

    p {
      font-weight: 500;
      font-style: normal;
      line-height: 25px;
      color: rgba($color: #000000, $alpha: 0.5);
      margin-bottom: 1.6rem;
    }
  }

  .purchase-summary {
    border-radius: 0.533333rem;
    .item-list {
      background-color: $grey;
      padding: 1.6rem;
      border-radius: 0.533333rem 0.533333rem 0 0;
      .item {
        display: flex;
        align-items: center;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.08);
        margin-bottom: 0.8rem;

        .img-container {
          width: 3.333333rem;
          height: 3.333333rem;
        }

        .img-container img {
          width: 100%;
          height: 100%;
        }

        .item-detail {
          margin-left: 1.8rem;
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

      .hidden-items {
        font-weight: bold;
        font-style: normal;
        font-size: 0.8rem;
        line-height: 16.39px;
        letter-spacing: -0.21px;
        color: rgba($color: #000000, $alpha: 0.5);
        text-align: center;
      }
    }

    .grand-total {
      background-color: #000;
      padding: 1rem 0 1.266666rem 1.6rem;
      border-radius: 0 0 0.533333rem 0.533333rem;
      margin-bottom: 1.533333rem;

      & > p:first-child {
        font-weight: 500;
        font-style: normal;
        line-height: 25px;
        color: rgba($color: #fff, $alpha: 0.5);
        margin-bottom: 0.533333rem;
      }

      & > p:last-child {
        font-weight: bold;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 24.59px;
        color: #fff;
      }
    }
  }
  .cta {
    
  }
}

@media screen and (min-width: $tablet-min) {
  .order-modal {
    padding: 3.2rem;
    top: 14.8rem;
    width: 36rem;
    border-radius: 0.533333rem;

    .check {
      margin-bottom: 2.2rem;
    }

    .text {
      h1 {
        font-size: 2.133333rem;
        line-height: 36px;
        letter-spacing: 1.14px;
        margin-bottom: 1.6rem;
      }

      p {
        margin-bottom: 2.2rem;
      }
    }

    .purchase-summary {
      border-radius: 0.533333rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3.066666rem;

      .item-list {
        flex: 1;
        border-radius: 0.533333rem 0 0 0.533333rem;
        padding-bottom: 0;
        .item {

          .item-detail {
            margin-left: 1.066666rem;
          }
        }
      }

      .grand-total {
        background-color: #000;
        padding: 2.733333rem 0 2.8rem 1.6rem;
        border-radius: 0 0.533333rem 0.533333rem 0;
        margin-bottom: unset;
        width: 13.2rem;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .order-modal {
    .purchase-summary {
      .item-list {
        .item {
          display: flex;
          align-items: center;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba($color: #000000, $alpha: 0.08);
          margin-bottom: 0.8rem;

          .item-detail {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
        }
      }

      .grand-total {
        padding: 2.733333rem 0 2.8rem 2.133333rem;
      }
    }
  }
}
</style>