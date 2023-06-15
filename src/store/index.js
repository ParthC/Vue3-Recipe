import { createStore } from "vuex";

import state from '../store/state'
import * as getters from '../store/getters'
import * as mutations from '../store/mutations'
import * as actions from '../store/actions'

const store = createStore({
    actions,
    mutations,
    getters,
    state
})


export default store;