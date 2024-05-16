import axios from "axios";

export function fetchArticles({ commit }){
  axios.get('http://localhost:3000/news-items')
		.then(({ data }) => {
			commit('fetchArticles', data)
		})
}

export function addArticle({ commit }, article){
	axios.post('http://localhost:3000/news-items', article,{
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.then(({ data }) => {
		commit('addArticle', data)
	})
	.catch((err) => {
		console.log(err)
	})
}

export function fetchArticle({ commit }, articleId){
	axios.get(`http://localhost:3000/news-items/${articleId}`)
		.then(({ data }) => {
			commit('fetchArticle', data)
		})
}

export function incrementLikes({ commit, state }, articleId){
	axios.patch(`http://localhost:3000/news-items/${articleId}`, { likes: state.article.likes + 1 })
		.then(({ data }) => {
			commit('incrementLikes', data.likes)
		})
		.catch((err) => {
			console.log(err)
		})
}