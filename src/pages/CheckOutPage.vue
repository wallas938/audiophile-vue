<template>
  <div class="checkout">
    <div class="prev">
      <p class="wrapper container">
        <a @click="goBack" class="prev-link">Go Back</a>
      </p>
    </div>
    <div class="main">
      <section class="form">
        <div class="wrapper container">
          <h1>CHECKOUT</h1>
          <form>
            <div class="billing form-group">
              <h2>BILLING DETAILS</h2>
              <div class="grid">
                <div class="name field-container">
                  <label
                    :class="{ 'label--error': v$.billing.name.$error }"
                    for="name"
                    >Name</label
                  >
                  <small v-if="v$.billing.name.$error">Name too short!</small>
                  <input
                    @blur="v$.billing.name.$touch"
                    :class="{ 'field--error': v$.billing.name.$error }"
                    v-model.trim="billing.name"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="email field-container">
                  <label
                    :class="{ 'label--error': v$.billing.email.$error }"
                    for="email"
                    >Email Address</label
                  >
                  <small v-if="v$.billing.email.$error">Wrong format</small>
                  <input
                    @blur="v$.billing.email.$touch"
                    :class="{ 'field--error': v$.billing.email.$error }"
                    v-model.trim="billing.email"
                    class="field"
                    type="email"
                  />
                </div>
                <div class="phone field-container">
                  <label
                    :class="{ 'label--error': v$.billing.phone.$error }"
                    for="phone"
                    >Phone Number</label
                  >
                  <small v-if="v$.billing.phone.$error">too short!</small>

                  <input
                    @blur="v$.billing.phone.$touch"
                    :class="{ 'field--error': v$.billing.phone.$error }"
                    v-model.trim="billing.phone"
                    class="field"
                    type="tel"
                  />
                </div>
              </div>
            </div>
            <div class="shipping form-group">
              <h2>SHIPPING INFO</h2>
              <div class="grid">
                <div class="address field-container">
                  <label
                    :class="{ 'label--error': v$.shipping.address.$error }"
                    for="address"
                    >Your Address</label
                  >
                  <small v-if="v$.shipping.address.$error">too short!</small>
                  <input
                    :class="{ 'field--error': v$.shipping.address.$error }"
                    @blur="v$.shipping.address.$touch"
                    v-model.trim="shipping.address"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="zipCode field-container">
                  <label
                    :class="{ 'label--error': v$.shipping.zipCode.$error }"
                    for="zipCode"
                    >Zip Code</label
                  >
                  <small v-if="v$.shipping.zipCode.$error"
                    >zip code too short!</small
                  >
                  <input
                    :class="{ 'field--error': v$.shipping.zipCode.$error }"
                    @blur="v$.shipping.zipCode.$touch"
                    v-model.trim="shipping.zipCode"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="city field-container">
                  <label
                    :class="{ 'label--error': v$.shipping.city.$error }"
                    for="city"
                    >City</label
                  >
                  <small v-if="v$.shipping.city.$error"
                    >city name too short!</small
                  >
                  <input
                    v-model.trim="shipping.city"
                    @blur="v$.shipping.city.$touch"
                    :class="{ 'field--error': v$.shipping.city.$error }"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="country field-container">
                  <label
                    :class="{ 'label--error': v$.shipping.country.$error }"
                    for="country"
                    >Country</label
                  >
                  <small v-if="v$.shipping.country.$error"
                    >country too short!</small
                  >
                  <input
                    :class="{ 'field--error': v$.shipping.country.$error }"
                    @blur="v$.shipping.country.$touch"
                    v-model.trim="shipping.country"
                    class="field"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="payment form-group">
              <h2>PAYMENT DETAILS</h2>
              <div class="method field-container">
                <div class="radio-fields grid">
                  <label for="method">Payment Method</label>
                  <div class="radio-field-container e-money-area">
                    <span class="radio-circle e-money" @click="pick('e-money')">
                      <span
                        v-if="payment.mode === 'e-money'"
                        class="radio-circle-picked"
                      ></span>
                    </span>
                    <input
                      v-model="payment.mode"
                      value="e-money"
                      hidden
                      class="radio-field"
                      type="radio"
                    />
                    <label for="e-money">e-Money</label>
                  </div>
                  <div class="radio-field-container cash-area">
                    <span class="radio-circle cash" @click="pick('cash')">
                      <span
                        v-if="payment.mode === 'cash'"
                        class="radio-circle-picked"
                      ></span>
                    </span>
                    <input
                      v-model="payment.mode"
                      value="cash"
                      hidden
                      class="radio-field"
                      type="radio"
                    />
                    <label for="cash">Cash on Delivery</label>
                  </div>
                </div>
              </div>
              <div v-if="payment.mode === 'e-money'" class="e-money-fields">
                <div class="e-money-number field-container">
                  <label
                    :class="{ 'label--error': v$.payment.eNumber.$error }"
                    for="e-money-number"
                    >e-Money Number</label
                  >
                  <small v-if="v$.payment.eNumber.$error"
                    >e-number too short!</small
                  >
                  <input
                    :class="{
                      'field--error': v$.payment.eNumber.$error,
                    }"
                    @blur="v$.payment.eNumber.$touch"
                    class="field"
                    type="text"
                    id="e-money-number"
                    v-model.trim="payment.eNumber"
                  />
                </div>
                <div class="e-money-pin field-container">
                  <label
                    :class="{ 'label--error': v$.payment.ePin.$error }"
                    for="e-money-pin"
                    >e-Money PIN</label
                  >
                  <small v-if="v$.payment.ePin.$error">e-pin too short!</small>
                  <input
                    :class="{ 'field--error': v$.payment.ePin.$error }"
                    @blur="v$.payment.ePin.$touch"
                    class="field"
                    type="text"
                    v-model.trim="payment.ePin"
                    id="e-money-pin"
                  />
                </div>
              </div>
              <div v-if="payment.mode === 'cash'" class="cash-info">
                <div class="logo"></div>
                <p class="info">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="summary">
        <order-summary
          @open:order-modal="openOrderModal($event)"
          v-if="true"
        ></order-summary>
      </section>
    </div>
    <section class="footer">
      <the-footer></the-footer>
    </section>
  </div>
</template>

<script>
import OrderSummary from "@/components/ui/checkout/OrderSummary";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { paymentModeValidator } from "@/helpers/custom-form-validators";

export default {
  inject: ["closeModals"],
  components: {
    OrderSummary,
  },
  created() {
    paymentModeValidator;
    this.closeModals();
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      billing: {
        name: "",
        email: "",
        phone: "",
      },
      shipping: {
        address: "",
        zipCode: "",
        city: "",
        country: "",
      },
      payment: {
        mode: "e-money",
        eNumber: "",
        ePin: "",
      },
    };
  },
  validations() {
    return {
      billing: {
        name: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
          minLength: minLength(10),
        },
      },
      shipping: {
        address: {
          required,
          minLength: minLength(10),
        },
        zipCode: {
          required,
          minLength: minLength(5),
        },
        city: {
          required,
          minLength: minLength(3),
        },
        country: {
          required,
          minLength: minLength(3),
        },
      },
      payment: {
        mode: { required },
        eNumber: {
          paymentModeValidator: this.eNumberValidation,
        },
        ePin: {
          paymentModeValidator: this.ePinValidation,
        },
      },
      /* payment: {
        eMoney: {
          picked: true,
          eNumber: {
            value: "",
            errorMessage: "Wrong format (10 characters min)",
            wrongInput: false,
            blurState: false,
            minLength: 10,
          },
          ePin: {
            value: "",
            errorMessage: "Wrong format (4 characters min)",
            wrongInput: false,
            blurState: false,
            minLength: 4,
          },
        },
        cash: {
          picked: false,
        },
        groupValidity: false,
      }, */
    };
  },
  methods: {
    eNumberValidation() {
      if (this.payment.mode === "cash") {
        return true;
      } else if (this.payment.eNumber.length >= 10) {
        return true;
      }
      return false;
    },
    ePinValidation() {
      if (this.payment.mode === "cash") {
        return true;
      } else if (this.payment.ePin.length >= 4) {
        return true;
      }
      return false;
    },
    blurHandler(fieldData) {
      /*ex: this.billing.name.blurState */
      this[fieldData.group][fieldData.field].blurState = true;
    },
    blurHandlerPayment(fieldData) {
      this.payment.eMoney[fieldData.field].blurState = true;
    },
    goBack() {
      this.$router.go(-1);
    },
    pick(mode) {
      this.payment.mode = mode;
    },
    openOrderModal(payload) {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$store.dispatch("updateModals", {
          isMenuOpened: false,
          isCartOpened: false,
          isOrderOpened: payload.isOrderOpened,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.checkout {
  background-color: $white-2;
  .prev {
    padding: 1.066666rem 1.6rem 0 1.6rem;

    .wrapper {
      background-color: transparent;
    }
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

  .form {
    padding: 1.6rem 1.6rem 0 1.6rem;

    .wrapper {
      padding: 1.6rem 1.6rem 2.066666rem 1.533333rem;
      border-radius: 0.533333rem;
      background-color: #fff;

      h1 {
        font-weight: bold;
        font-style: normal;
        font-size: 1.866666rem;
        line-height: 38.25px;
        letter-spacing: 1px;
        margin-bottom: 2.133333rem; // 32px
      }

      .form-group {
        &:not(:last-child) {
          margin-bottom: 2.133333rem;
        }
        h2 {
          font-weight: bold;
          font-style: normal;
          font-size: 0.866666rem;
          line-height: 25px;
          letter-spacing: 0.93px;
          margin-bottom: 1.066666rem;
          color: $orange;
        }

        .field-container:not(.method) {
          display: flex;
          flex-direction: column;
          position: relative;
          &:not(:last-child) {
            margin-bottom: 1.6rem; // 24px
          }

          label {
            font-weight: bold;
            font-style: normal;
            font-size: 0.8rem; // 12px
            line-height: 16.39px;
            letter-spacing: -0.21px;
            margin-bottom: 0.6rem;
          }

          small {
            position: absolute;
            right: 0;
            color: $red;
            font-style: normal;
            font-weight: 500;
            font-size: 0.8rem;
            line-height: 16px;
            letter-spacing: -0.214286px;
          }

          .label--error,
          .field--error {
            color: $red;
          }

          .field {
            border: 1px solid $grey-2;
            border-radius: 0.533333rem;
            padding: 1.2rem 1.6rem 1.266666rem 1.6rem;
            color: rgba($color: #000000, $alpha: 0.4);
            font-weight: bold;
            font-style: normal;
            font-size: 0.9333333rem;
            line-height: 19.12px;
            letter-spacing: -0.25px;
          }

          .field:focus {
            border-color: $orange;
          }

          .field--error {
            border: 2px solid $red;
          }
        }

        .field-container.method {
          .radio-fields {
            display: flex;
            flex-direction: column;
            margin-bottom: 2.133333rem;
          }

          .radio-fields > label {
            font-weight: bold;
            font-style: normal;
            font-size: 0.8rem; // 12px
            line-height: 16.39px;
            letter-spacing: -0.21px;
            margin-bottom: 1.133333rem;
          }
        }

        .field-container.method .radio-field-container {
          border: 1px solid $grey-2;
          border-radius: 0.533333rem;
          padding: 1.2rem 1.6rem 1.266666rem 1.6rem;
          display: flex;
          align-items: center;
          .radio-circle {
            width: 1.333333rem;
            height: 1.333333rem;
            border: 1px solid $grey-2;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .radio-circle-picked {
              width: 0.666666rem;
              height: 0.666666rem;
              background-color: $orange;
              border-radius: 100%;
            }
          }

          label {
            font-weight: bold;
            font-style: normal;
            font-size: 0.9333333rem;
            line-height: 19.12px;
            letter-spacing: -0.25px;
            margin-left: 16px;
          }

          & > input[type="radio"] {
            visibility: hidden;
          }
        }

        .field-container.method .radio-field-container:not(:last-child) {
          margin-bottom: 1.066666rem;
        }
      }

      .cash-info {
        padding-top: 0.933333rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
          width: 3.2rem;
          height: 3.2rem;
          background-image: url("~@/assets/shared/logo-cash.svg");
          margin-bottom: 1.6rem;
        }

        .info {
          flex: 1;
          font-weight: 500;
          font-style: normal;
          line-height: 25px;
          margin-left: 2.133333rem;
          color: rgba($color: #000000, $alpha: 0.5);
        }
      }
    }
  }

  .summary {
    padding: 2.066666rem 1.6rem 0 1.6rem;
  }

  .footer {
    padding-top: 8rem; // 120px
  }
}

@media screen and (min-width: $tablet-min) {
  .checkout {
    .prev {
      padding: 2.2rem 1.6rem 0 1.6rem; // 36px 40px
    }

    .form {
      padding: 1.6rem 2.666666rem 0 2.6rem;
      .wrapper {
        padding: 2rem 1.8rem 2rem 1.866666rem;
        border-radius: 0.533333rem;
        border: 1px solid transparent;

        h1 {
          font-size: 2.133333rem;
          line-height: 36px;
          letter-spacing: 1.14px;
          margin-bottom: 2.733333rem; // 41px
        }

        .billing {
          margin-bottom: 3.533333rem !important;
        }

        .shipping {
          margin-bottom: 4.066666rem !important;
        }

        .payment > .method {
          margin-bottom: unset;
        }

        .billing > .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          column-gap: 1.066666rem;
          grid-template-areas:
            "name email"
            "phone .";

          & > .name {
            grid-area: name;
          }

          & > .email {
            grid-area: email;
          }
          & > .phone {
            grid-area: phone;
          }
        }

        .shipping > .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          column-gap: 1.066666rem;
          grid-template-areas:
            "address address"
            "zipCode city"
            "country .";

          & > .address {
            grid-area: address;
          }

          & > .zipCode {
            grid-area: zipCode;
          }

          & > .city {
            grid-area: city;
          }

          & > .country {
            grid-area: country;
          }
        }

        .method > .radio-fields.grid {
          margin-bottom: unset !important;
          display: grid !important;
          flex-direction: unset !important;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          column-gap: 1.066666rem;
          grid-template-areas:
            "label e-money-area"
            ".     cash-area";

          & > .label {
            grid-area: label;
          }

          & > .e-money-area {
            grid-area: e-money-area;
          }

          & > .cash-area {
            grid-area: cash-area;
          }
        }

        .e-money-fields {
          display: grid;
          padding-top: 1.6rem;
          flex-direction: unset;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          column-gap: 1.066666rem;
          grid-template-areas: "e-money-number e-money-pin";

          & > .e-money-number {
            grid-area: e-money-number;
            margin-bottom: unset;
          }

          & > .e-money-pin {
            grid-area: e-money-pin;
          }
        }

        .cash-info {
          padding-top: 2rem;
          display: flex;
          flex-direction: row;
          .logo {
            margin-bottom: unset;
          }
        }
      }
    }

    .summary {
      padding: 2.133333rem 2.666666rem 0 2.6rem;
    }

    .footer {
      padding-top: 6.4rem; // 96px
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .checkout {
    background-color: $white-1;
    .prev {
      padding: 5.266666rem 0 0 0;
    }

    .main {
      display: flex;
      justify-content: center;
      .form {
        padding: 2.533333rem 0 0 0;

        .wrapper {
          padding: 3.6rem 3.2rem 3.2rem 3.2rem;
          width: 48.666666rem;

          h1 {
            margin-bottom: 2.733333rem; // 41px
          }

          .billing {
            margin-bottom: 3.533333rem !important; // 53px
          }

          .shipping {
            margin-bottom: 4.066666rem !important; // 61px
          }

          .payment > .method {
            margin-bottom: unset;
          }

          .billing > .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 1.066666rem;
            grid-template-areas:
              "name email"
              "phone .";

            & > .name {
              grid-area: name;
            }

            & > .email {
              grid-area: email;
            }
            & > .phone {
              grid-area: phone;
            }
          }

          .shipping > .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            column-gap: 1.066666rem;
            grid-template-areas:
              "address address"
              "zipCode city"
              "country .";

            & > .address {
              grid-area: address;
            }

            & > .zipCode {
              grid-area: zipCode;
            }

            & > .city {
              grid-area: city;
            }

            & > .country {
              grid-area: country;
            }
          }

          .method > .radio-fields.grid {
            margin-bottom: unset !important;
            display: grid !important;
            flex-direction: unset !important;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 1.066666rem;
            grid-template-areas:
              "label e-money-area"
              ".     cash-area";

            & > .label {
              grid-area: label;
            }

            & > .e-money-area {
              grid-area: e-money-area;
            }

            & > .cash-area {
              grid-area: cash-area;
            }
          }

          .e-money-fields {
            display: grid;
            padding-top: 1.6rem;
            flex-direction: unset;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            column-gap: 1.066666rem;
            grid-template-areas: "e-money-number e-money-pin";

            & > .e-money-number {
              grid-area: e-money-number;
              margin-bottom: unset;
            }

            & > .e-money-pin {
              grid-area: e-money-pin;
            }
          }
        }
      }

      .summary {
        padding-top: 2.533333rem;
      }
    }

    .footer {
      padding-top: 13.333333rem; // 200px
    }
  }
}
</style>