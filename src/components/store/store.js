import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    statu: ''
}
const mutations = {
    chengeStatus(flag) {
        state.statu = flag;
        console.log(flag);
    }
}
export default new Vuex.Store({
    state,
    mutations
})

// const store = new Vuex.Store({
//   state: {
//         status: {}
//     },
//     mutations: {
//         chengeStatus(flag) {
//             state.status = flag;
//             alert(flag);
//         }
//     }
// })

// export default store