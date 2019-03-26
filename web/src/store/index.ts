import vue from 'vue'
import vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import VuexPersistence from 'vuex-persist'
import { Store } from '../typings/interface'

vue.use(vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (item: Store): object => {
        return {
            tabIndex: item.tabIndex
        }
    }
})

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexLocal.plugin]
})
