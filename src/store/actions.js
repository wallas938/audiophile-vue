export default {
    updateData(context, payload) {
        context.commit('data', { data: payload.data });
    },
    updateModals(context, payload) {
        context.commit('modals', { modals: payload });
    },
    addCart(context, payload) {
        let cart = [...context.getters.cart];
        const cartItem = cart.find(c => c.saleName === payload.cartItem.saleName);
        if (!cartItem) {
            cart.push(payload.cartItem);
            context.commit('cart', { cart: cart });
        } else {
            cart = cart.filter(c => c.saleName !== cartItem.saleName);
            const cartItemUpdated = {
                ...payload.cartItem,
                quantity: cartItem.quantity + payload.cartItem.quantity,
                price: cartItem.price * 2
            };
            cart.push(cartItemUpdated);
            context.commit('cart', { cart: cart });
        }
    },
    updateCart(context, payload) {
        context.commit('cart', { cart: payload.cart });
    }
};