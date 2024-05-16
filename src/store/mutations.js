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
    state.comments.push(comment)
}