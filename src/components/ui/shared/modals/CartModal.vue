<template>
  <div class="cart">
    <div class="cart__header">
      <p>
        <span>CART (3)</span>
        <button class="remove">Remove All</button>
      </p>
    </div>

    <div class="cart__body">
      <div class="list-item">
        <div class="item">
          <div class="left">
            <img
              :src="
                require('@/assets/' + 'cart/image-xx99-mark-two-headphones.jpg')
              "
            />
            <div class="item__details">
              <p class="name">XX99 MK II</p>
              <p class="price">$ 2,999</p>
            </div>
          </div>

          <div class="qty right">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <img
              :src="require('@/assets/' + 'cart/image-xx59-headphones.jpg')"
            />
            <div class="item__details">
              <p class="name">XX59</p>
              <p class="price">XX59</p>
            </div>
          </div>
          <div class="qty right">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <img :src="require('@/assets/' + 'cart/image-yx1-earphones.jpg')" />
            <div class="item__details">
              <p class="name">YX1</p>
              <p class="price">$ 599</p>
            </div>
          </div>
          <div class="qty right">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cart__footer">
      <div class="total">
        <span>TOTAL</span>
        <span>$5.396</span>
      </div>
      <div class="cat">
        <v-button mode="fill" path="/checkout" :isLarge="true"
          >checkout</v-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";
.cart {
  padding: 1.6rem;
  background-color: #fff;
  border-radius: 0.5333333rem;
  position: fixed;
  top: 7.6rem;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
  width: 21.8rem;

  .cart__header {
    margin-bottom: 2.066666rem;
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:first-child {
        font-weight: bold;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 24.59px;
        letter-spacing: 1.29px;
      }

      & > button {
        font-weight: 500;
        font-style: normal;
        background-color: transparent;
        line-height: 25px;
        border: none;
        color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }

  .cart__body {
    margin-bottom: 2.066666rem;
    .list-item {
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 1.6rem;
        }

        .left {
          display: flex;
          justify-content: flex-start;
          img {
            width: 4.266666rem;
            height: 4.266666rem;
            display: inline-block;
            border-radius: 0.533333rem;
          }

          .item__details {
            margin-left: 1.066666rem;
          }
          .item__details > .name {
            font-weight: bold;
            font-style: normal;
            line-height: 25px;
          }

          .item__details > .price {
            font-weight: bold;
            font-style: normal;
            line-height: 0.9333333rem;
            line-height: 25px;
            color: rgba($color: #000000, $alpha: 0.5);
          }
        }

        .right {
          padding: 0.466666rem 0.766666rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: $grey;
          width: 6.333333rem;

          & > .minus,
          & > .plus {
            color: rgba($color: #000000, $alpha: 0.25);
            cursor: pointer;
          }
        }
      }
    }
  }

  .cart__footer {
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.6rem;

      & > :first-child {
        font-weight: 500;
        font-style: normal;
        line-height: 25px;
        color: rgba($color: #000000, $alpha: 0.5);
      }
      & > :last-child {
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 24.59px;
      }
    }

    .cta {
    }
  }
}

@media screen and (min-width: $tablet-min) {
  .cart {
    padding: 2.066666rem 2.066666rem 2.066666rem 2.2rem;
    right: 2.2rem;
    left: unset;
    transform: unset;
    width: 25.133333rem;
  }
}

@media screen and (min-width: $desktop-min) {
  .cart {
    padding: 2.066666rem 2.066666rem 2.066666rem 2.2rem;
    right: 11rem;
  }
}
</style>