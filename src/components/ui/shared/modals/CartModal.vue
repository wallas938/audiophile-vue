<template>
  <div class="cart">
    <div class="cart__header">
      <p>
        <span>CART ({{ cartItemNumber }})</span>
        <button class="remove" @click="removeCart">Remove All</button>
      </p>
    </div>

    <div class="cart__body">
      <div v-if="!!cart" class="list-item">
        <div class="item" v-for="cartItem in cart" :key="cartItem.saleName">
          <div class="left">
            <div class="img-container">
              <img :src="require('@/assets/cart/' + cartItem.image)" />
            </div>
            <div class="item__details">
              <p class="name">{{ cartItem.saleName }}</p>
              <p class="price">$ {{ cartItem.price.toLocaleString("en-US") }}</p>
            </div>
          </div>

          <div class="qty right">
            <span class="minus" @click="subtract(cartItem.saleName)">-</span>
            <span> {{ cartItem.quantity }} </span>
            <span class="plus" @click="add(cartItem.saleName)">+</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cart__footer">
      <div class="total">
        <span>TOTAL</span>
        <span>$ {{ total }}</span>
      </div>
      <div class="cta">
        <v-button :disabled="!cartItemNumber > 0" mode="fill" path="/checkout" :isLarge="true"
          >checkout</v-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["save:cart", "remove:cart"],
  data() {
    return {
      cart: [],
      total: 0,
    };
  },
  created() {
    this.cart = [...this.$store.getters["cart"]];
    this.computeTotal();
  },
  methods: {
    add(saleName) {
      let cartCopy = this.cart;
      const cartItemIndex = cartCopy.findIndex((c) => c.saleName === saleName);
      if (cartCopy[cartItemIndex].quantity < 99) {
        let cartItemUpdated = {
          ...cartCopy[cartItemIndex],
          quantity: cartCopy[cartItemIndex].quantity + 1,
        };
        cartCopy.splice(cartItemIndex, 1, cartItemUpdated);
        this.cart = cartCopy;
        this.$emit("save:cart", cartCopy);
        this.computeTotal();
      }
    },
    subtract(saleName) {
      let cartCopy = this.cart;
      const cartItemIndex = cartCopy.findIndex((c) => c.saleName === saleName);
      if (cartCopy[cartItemIndex].quantity > 1) {
        let cartItemUpdated = {
          ...cartCopy[cartItemIndex],
          quantity: cartCopy[cartItemIndex].quantity - 1,
        };
        cartCopy.splice(cartItemIndex, 1, cartItemUpdated);
        this.cart = cartCopy;
        this.$emit("save:cart", cartCopy);
        this.computeTotal();
      }
    },
    computeTotal() {
      let total = 0;
      if (this.cart.length > 0) {
        this.cart.forEach((c) => {
          total += c.price * c.quantity;
        });
      }
      this.total = total.toLocaleString("en-US");
    },
    cartReset() {
      this.cart = [];
      this.total = 0;
    },
    removeCart() {
      this.cartReset();
      this.$emit("remove:cart");
    },
  },
  computed: {
    cartItemNumber() {
      return this.cart.length;
    },
  },
};
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
          align-items: center;

          .img-container {
            width: 4.266666rem;
            height: 4.266666rem;
            border-radius: 0.533333rem;
          }

          .img-container img {
            width: 100%;
            height: 100%;
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
          background-color: $white;
          width: 6.333333rem;

          .minus,
          .plus {
            color: rgba($color: #000000, $alpha: 0.25);
            cursor: pointer;
            &:hover {
              color: $orange;
            }
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
      button {
        
      }
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