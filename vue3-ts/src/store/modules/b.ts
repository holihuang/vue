export default {
    namespaced: true,
    state: () => {
        return {
            b: 1,
        };
    },
    mutations: {
        add(state: any) {
            state.b++;
        },
    },
    actions: {},
}