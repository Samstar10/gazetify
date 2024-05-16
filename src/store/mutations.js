export function fetchArticles(state, articles){
    state.articles = articles
}

export function addArticle(state, article){
    state.newArticle = article
}

export function fetchArticle(state, article){
    state.article = article
}

export function incrementLikes(state, likes){
    state.article.likes = likes
}

export function addComment(state, comment){
    if (state.article && Array.isArray(state.article.comments)) {
        state.article.comments.push(comment);
    } else if (state.article) {
        state.article.comments = [comment];
    }
}

export function updateArticle(state, updatedArticle){
    const index = state.articles.findIndex(article => article.id === updatedArticle.id)
    if (index !== -1) {
        state.articles.splice(index, 1, updatedArticle)
    }
}

