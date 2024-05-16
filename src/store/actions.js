import axios from "axios";


export default {
	async fetchArticles({ commit }, category='all'){
		let url = 'http://localhost:3000/news-items'
		if (category && category !== 'all') {
			url += `?category=${category}`
		}

		await axios.get(url)
			.then(({ data }) => {
				commit('fetchArticles', data)
			})
			.catch((err) => {
				console.log(err)
			})
	},
	async addArticle({ commit }, article){
		await axios.post('http://localhost:3000/news-items', article,{
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
	},
	async fetchArticle({ commit }, articleId){
		await axios.get(`http://localhost:3000/news-items/${articleId}`)
			.then(({ data }) => {
				commit('fetchArticle', data)
			})
	},
	async incrementLikes({ commit, state }, articleId){
		await axios.patch(`http://localhost:3000/news-items/${articleId}`, { likes: state.article.likes + 1 })
			.then(({ data }) => {
				commit('incrementLikes', data.likes)
			})
			.catch((err) => {
				console.log(err)
			})
	},
	async addComment({ commit }, {comment, articleId}){
		await axios.get(`http://localhost:3000/news-items/${articleId}`)
		.then(({ data }) => {
			const updatedComments = Array.isArray(data.comments) ? [...data.comments, comment] : [comment]
			return axios.patch(`http://localhost:3000/news-items/${articleId}`, { comments: updatedComments }, {
				headers: {
					'Content-Type': 'application/json'
				},
			})
		})
		.then(({ data }) => {
			commit('addComment', data)
		})
		.catch(err => {
			console.error(err)
		})
	},
	async updateArticle({ commit }, {articleId, updatedArticle}){
		await axios.patch(`http://localhost:3000/news-items/${articleId}`, updatedArticle, {
			headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(({ data }) => {
				commit('updateArticle', data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
}