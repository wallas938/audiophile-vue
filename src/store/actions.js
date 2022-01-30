export default {
    updateData(context, payload) {
        context.commit('data', { data: payload.data });
    },
    updateModals(context, payload) {
        context.commit('modals', { modals: payload });
    }
};