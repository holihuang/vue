export default {
  namespaced: true,
  state: {
    card: [1, 2, 3],
  },
  mutations: {
    add(state, val) {
      console.log(state, val, 555);
      state.card.push(val);
    },
  },
  actions: {
    addAsync(store, val) {
      setTimeout(() => {
        store.commit("add", val);
      }, 2000);
    },
  },
};
