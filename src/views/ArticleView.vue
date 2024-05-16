<script setup>

import { useRoute } from 'vue-router';
import { onMounted, computed, ref } from 'vue';
import store from '@/store';

const route = useRoute()

const article = computed(() => store.state.article || {})
const newComment = ref('')

onMounted(() => {
    store.dispatch('fetchArticle', route.params.id)
        .then(() => {
            console.log(article.value)
        })
})

const likeArticle = () => {
	store.dispatch('incrementLikes', route.params.id)
}

const addComment = () => {
	if(newComment.value.trim()){
		const comment = {
			content: newComment.value,
			posted_on: new Date().toDateString(),
		}
		store.dispatch('addComment', route.params.id)
	}
}
</script>

<template>
  <div class="flex justify-between">
		<div class="flex flex-col items-center w-3/4 p-8">
			<h1 class="text-3xl font-bold mb-5">{{ article.title }}</h1>
			<img :src="article.thumbnail" :alt="article.title" class="w-2/3 h-1/2 object-fit rounded mb-5">
			<div class="w-full flex justify-between items-center">
				<p class="font-thin text-sm mb-5">Category: {{ article.category }}</p>
				<p class="font-thin text-sm mb-5">Published on: {{ article.posted_on }}</p>
			</div>
			<p class="w-full text-left font-light italic mb-5">{{ article.description }}</p>
			<div class="w-full flex justify-between items-center">
				<p class="font-thin italic">{{ article.likes > 1 || article.likes === 0 || article.likes === null ? `${article.likes} likes` : `${article.likes} like` }}</p>
				<button @click="likeArticle" class="bg-blue-500 hover:bg-blue-700 text-white font-medimu py-2 px-4 rounded mt-5">Like Post</button>
			</div>
		</div>
		<div class="border-l-2 h-screen w-1/4 p-8" v-for="comment in comments" :key="article.comment.id">
			<div>
				<h1>Comments</h1>
				<ul>
					<li v-for="comment in article.comments" :key="comment.id">
						<p>{{ comment.text }}</p>
						<p>{{ comment.posted_on }}</p>
					</li>
				</ul>
				<div>
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<button @click="addComment">Add Comment</button>
				</div>
			</div>
			<p>{{ article.comments }}</p>
		</div>
	</div>
</template> 