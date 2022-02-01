export default {
    data() {
        return {
            quantity: 1,
            min: 1,
            max: 99
        };
    },
    computed: {
        quantityCheck() {
            return this.quantity >= 1 ? this.quantity : 1;
        },
    },
    methods: {
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
      },
}