export default {
    async fetchArticles(state, articles){
        state.articles = articles
    },
    async addArticle(state, article){
        state.newArticle = article
    },
    async fetchArticle(state, article){
        state.article = article
    },
    async incrementLikes(state, likes){
        state.article.likes = likes
    },
    async addComment(state, updatedArticle){
        state.article.comments = updatedArticle.comments
    },
    async updateArticle(state, updatedArticle){
        const index = state.articles.findIndex(article => article.id === updatedArticle.id)
        if (index !== -1) {
            state.articles.splice(index, 1, updatedArticle)
        }
    }
}

