export default {
    data(state, payload) {
        state.data = payload.data;
    },
    modals(state, payload) {
        state.modals = payload.modals;
    },
    cart(state, payload) {
        state.cart = payload.cart;
    },
};