import { createStore } from 'vuex';

const modules: Record<string, any> = {};

const files = require.context('./modules', false, /\.ts$/);
files.keys().forEach((item: any) => {
    const key: string = item.replace(/\.ts$/, '').replace(/\.\//, '')
    modules[key] = files(item).default
})
export default createStore({
    state: {
        count: 1,
    },
    mutations: {},
    actions: {},
    modules,
})