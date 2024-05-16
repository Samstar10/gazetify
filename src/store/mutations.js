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
    state.likes = likes
}