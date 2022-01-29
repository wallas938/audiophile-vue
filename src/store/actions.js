export default {
    updateData(context, payload) {
        context.commit('data', { data: payload.data });
    },
    updateModals(context, payload) {
        console.log(payload);
        context.commit('modals', { modals: payload });
    }
};