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
                    :class="{ 'label--error': billing.name.wrongInput }"
                    for="name"
                    >Name</label
                  >
                  <small v-if="billing.name.wrongInput">{{
                    billing.name.errorMessage
                  }}</small>
                  <input
                    @blur="blurHandler({ group: 'billing', field: 'name' })"
                    v-model.trim="billing.name.value"
                    :class="{ 'field--error': billing.name.wrongInput }"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="email field-container">
                  <label
                    :class="{ 'label--error': billing.email.wrongInput }"
                    for="email"
                    >Email Address</label
                  >
                  <small v-if="billing.email.wrongInput">{{
                    billing.email.errorMessage
                  }}</small>
                  <input
                    :class="{ 'field--error': billing.email.wrongInput }"
                    @blur="blurHandler({ group: 'billing', field: 'email' })"
                    v-model.trim="billing.email.value"
                    class="field"
                    type="email"
                  />
                </div>
                <div class="phone field-container">
                  <label
                    :class="{ 'label--error': billing.phone.wrongInput }"
                    for="phone"
                    >Phone Number</label
                  >
                  <small v-if="billing.phone.wrongInput">{{
                    billing.email.errorMessage
                  }}</small>

                  <input
                    :class="{ 'field--error': billing.phone.wrongInput }"
                    @blur="blurHandler({ group: 'billing', field: 'phone' })"
                    v-model.trim="billing.phone.value"
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
                    :class="{ 'label--error': shipping.address.wrongInput }"
                    for="address"
                    >Your Address</label
                  >
                  <small v-if="shipping.address.wrongInput">{{
                    shipping.address.errorMessage
                  }}</small>
                  <input
                    :class="{ 'field--error': shipping.address.wrongInput }"
                    @blur="blurHandler({ group: 'shipping', field: 'address' })"
                    v-model.trim="shipping.address.value"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="zipCode field-container">
                  <label
                    :class="{ 'label--error': shipping.zipCode.wrongInput }"
                    for="zipCode"
                    >Zip Code</label
                  >
                  <small v-if="shipping.zipCode.wrongInput">{{
                    shipping.zipCode.errorMessage
                  }}</small>
                  <input
                    :class="{ 'field--error': shipping.zipCode.wrongInput }"
                    @blur="blurHandler({ group: 'shipping', field: 'zipCode' })"
                    v-model.trim="shipping.zipCode.value"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="city field-container">
                  <label
                    :class="{ 'label--error': shipping.city.wrongInput }"
                    for="city"
                    >City</label
                  >
                  <small v-if="shipping.city.wrongInput">{{
                    shipping.city.errorMessage
                  }}</small>
                  <input
                    v-model.trim="shipping.city.value"
                    :class="{ 'field--error': shipping.city.wrongInput }"
                    @blur="blurHandler({ group: 'shipping', field: 'city' })"
                    class="field"
                    type="text"
                  />
                </div>
                <div class="country field-container">
                  <label
                    :class="{ 'label--error': shipping.country.wrongInput }"
                    for="country"
                    >Country</label
                  >
                  <small v-if="shipping.country.wrongInput">{{
                    shipping.country.errorMessage
                  }}</small>
                  <input
                    :class="{ 'field--error': shipping.country.wrongInput }"
                    @blur="blurHandler({ group: 'shipping', field: 'country' })"
                    v-model.trim="shipping.country.value"
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
                    <span class="radio-circle e-money" @click="pick('eMoney')">
                      <span
                        v-if="payment.eMoney.picked"
                        class="radio-circle-picked"
                      ></span>
                    </span>
                    <input
                      v-model="payment.eMoney.picked"
                      class="radio-field"
                      type="radio"
                    />
                    <label for="e-money">e-Money</label>
                  </div>
                  <div class="radio-field-container cash-area">
                    <span class="radio-circle cash" @click="pick('cash')">
                      <span
                        v-if="payment.cash.picked"
                        class="radio-circle-picked"
                      ></span>
                    </span>
                    <input
                      v-model="payment.cash.picked"
                      class="radio-field"
                      type="radio"
                    />
                    <label for="cash">Cash on Delivery</label>
                  </div>
                </div>
              </div>
              <div v-if="payment.eMoney.picked" class="e-money-fields">
                <div class="e-money-number field-container">
                  <label
                    :class="{
                      'label--error': payment.eMoney.eNumber.wrongInput,
                    }"
                    for="e-money-number"
                    >e-Money Number</label
                  >
                  <small v-if="payment.eMoney.eNumber.wrongInput">{{
                    payment.eMoney.eNumber.errorMessage
                  }}</small>
                  <input
                    :class="{
                      'field--error': payment.eMoney.eNumber.wrongInput,
                    }"
                    @blur="blurHandlerPayment({ field: 'eNumber' })"
                    class="field"
                    type="text"
                    id="e-money-number"
                    v-model.trim="payment.eMoney.eNumber.value"
                  />
                </div>
                <div class="e-money-pin field-container">
                  <label
                    :class="{ 'label--error': payment.eMoney.ePin.wrongInput }"
                    for="e-money-pin"
                    >e-Money PIN</label
                  >
                  <small v-if="payment.eMoney.ePin.wrongInput">{{
                    payment.eMoney.ePin.errorMessage
                  }}</small>
                  <input
                    :class="{ 'field--error': payment.eMoney.ePin.wrongInput }"
                    @blur="blurHandlerPayment({ field: 'ePin' })"
                    class="field"
                    type="text"
                    v-model.trim="payment.eMoney.ePin.value"
                    id="e-money-pin"
                  />
                </div>
              </div>
              <div v-if="payment.cash.picked" class="cash-info">
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
        <order-summary v-if="true"></order-summary>
      </section>
    </div>
    <section class="footer">
      <the-footer></the-footer>
    </section>
  </div>
</template>

<script>
import OrderSummary from "@/components/ui/checkout/OrderSummary";
export default {
  inject: ["closeModals"],
  components: {
    OrderSummary,
  },
  created() {
    this.closeModals();
  },
  data() {
    return {
      billing: {
        name: {
          value: "",
          errorMessage: "Wrong format (3 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 3,
        },
        email: {
          value: "",
          errorMessage: "Wrong format",
          wrongInput: false,
          blurState: false,
          regex: new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),
        },
        phone: {
          value: "",
          errorMessage: "Wrong format (10 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 10,
        },
        groupValidity: false,
      },
      shipping: {
        address: {
          value: "",
          errorMessage: "Wrong format (10 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 10,
        },
        zipCode: {
          value: "",
          errorMessage: "Wrong format (5 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 5,
        },
        city: {
          value: "",
          errorMessage: "Wrong format (3 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 3,
        },
        country: {
          value: "",
          errorMessage: "Wrong format (10 characters min)",
          wrongInput: false,
          blurState: false,
          minLength: 10,
        },
        groupValidity: false,
      },
      payment: {
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
      },
    };
  },
  watch: {
    billing: {
      handler: function () {
        /* Name Validation */

        if (
          this.billing.name.value.length < this.billing.name.minLength &&
          this.billing.name.blurState
        ) {
          this.billing.name.wrongInput = true;
        } else {
          this.billing.name.wrongInput = false;
        }

        /* Email Validation */

        if (
          !this.billing.email.regex.test(this.billing.email.value) &&
          this.billing.email.blurState
        ) {
          this.billing.email.wrongInput = true;
        } else {
          this.billing.email.wrongInput = false;
        }

        /* Phone Validation */

        if (
          this.billing.phone.value.length < this.billing.phone.minLength &&
          this.billing.phone.blurState
        ) {
          this.billing.phone.wrongInput = true;
        } else {
          this.billing.phone.wrongInput = false;
        }
        /* Group Validation */

        if (
          (this.billing.name.wrongInput && this.billing.name.blurState) ||
          (this.billing.email.wrongInput && this.billing.email.blurState) ||
          (this.billing.phone.wrongInput && this.billing.phone.blurState)
        ) {
          this.billing.groupValidity = false;
        } else {
          this.billing.groupValidity = true;
        }
      },
      deep: true,
    },
    shipping: {
      handler: function () {
        /* Address Validation */

        if (
          this.shipping.address.value.length <
            this.shipping.address.minLength &&
          this.shipping.address.blurState
        ) {
          this.shipping.address.wrongInput = true;
        } else {
          this.shipping.address.wrongInput = false;
        }

        /* ZipCode Validation */

        if (
          this.shipping.zipCode.value.length <
            this.shipping.zipCode.minLength &&
          this.shipping.zipCode.blurState
        ) {
          this.shipping.zipCode.wrongInput = true;
        } else {
          this.shipping.zipCode.wrongInput = false;
        }

        /* City Validation */

        if (
          this.shipping.city.value.length < this.shipping.city.minLength &&
          this.shipping.city.blurState
        ) {
          this.shipping.city.wrongInput = true;
        } else {
          this.shipping.city.wrongInput = false;
        }

        /* Country Validation */

        if (
          this.shipping.country.value.length <
            this.shipping.country.minLength &&
          this.shipping.country.blurState
        ) {
          this.shipping.country.wrongInput = true;
        } else {
          this.shipping.country.wrongInput = false;
        }

        /* Group Validation */

        if (
          (this.shipping.address.wrongInput &&
            this.shipping.address.blurState) ||
          (this.shipping.zipCode.wrongInput &&
            this.shipping.zipCode.blurState) ||
          (this.shipping.city.wrongInput && this.shipping.city.blurState) ||
          (this.shipping.country.wrongInput && this.shipping.country.blurState)
        ) {
          this.shipping.groupValidity = false;
        } else {
          this.shipping.groupValidity = true;
        }
      },
      deep: true,
    },
    payment: {
      handler: function () {
        /* E-Number Validation */

        if (
          this.payment.eMoney.eNumber.value.length <
            this.payment.eMoney.eNumber.minLength &&
          this.payment.eMoney.eNumber.blurState
        ) {
          this.payment.eMoney.eNumber.wrongInput = true;
        } else {
          this.payment.eMoney.eNumber.wrongInput = false;
        }

        /* E-Pin Validation */

        if (
          this.payment.eMoney.ePin.value.length <
            this.payment.eMoney.ePin.minLength &&
          this.payment.eMoney.ePin.blurState
        ) {
          this.payment.eMoney.ePin.wrongInput = true;
        } else {
          this.payment.eMoney.ePin.wrongInput = false;
        }

        /* Group Validation */

        if (
          (this.payment.eMoney.eNumber.wrongInput &&
            this.payment.eMoney.eNumber.blurState) ||
          (this.payment.eMoney.ePin.wrongInput &&
            this.payment.eMoney.ePin.blurState)
        ) {
          this.payment.groupValidity = false;
        } else {
          this.payment.groupValidity = true;
        }
      },
      deep: true,
    },
  },
  computed: {
    formValidationCheck() {
      return (
        this.billing.groupValidity &&
        this.shipping.groupValidity &&
        this.payment.groupValidity
      );
    },
  },
  methods: {
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
    pick(field) {
      if (field === "eMoney") {
        this.payment.eMoney.picked = true;
        this.payment.cash.picked = false;
        return;
      }
      this.payment.eMoney.picked = false;
      this.payment.cash.picked = true;
    },
    validate() {
      console.log(this.shipping);
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