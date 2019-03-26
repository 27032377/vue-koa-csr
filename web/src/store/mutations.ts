import { Store } from '../typings/interface'

const mutations = {
    changePageIndex (state: Store, data: object) {
        Object.assign(state, data)
    }
}

export default mutations
