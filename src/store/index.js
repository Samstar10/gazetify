import { createStore } from "vuex";
import state from './state'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
    state,
    actions,
    mutations: mutations,
    getters: {
        articles: state => state.articles,
        newArticle: state => state.newArticle,
        article: state => state.article
    }
})

export default store