import { createStore } from "vuex";
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

const store = createStore({
    state,
    actions,
    mutations,
    getters: {
        articles: state => state.articles,
        newArticle: state => state.newArticle
    }
})

export default store