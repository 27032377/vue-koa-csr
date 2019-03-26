import { ActionTree } from 'vuex'

const actions: ActionTree<any, any> = {
    changePageIndex ({ commit }, index: number) {
        commit('changePageIndex', { tabIndex: index })
    }
}

export default actions
