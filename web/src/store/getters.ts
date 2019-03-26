import { GetterTree } from 'vuex'
import { Store } from '../typings/interface'

const getters: GetterTree<any, any> = {
    userLogin: (state: Store) => state.tabIndex
}

export default getters
