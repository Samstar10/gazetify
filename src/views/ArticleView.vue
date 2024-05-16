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
            console.log(article.comments)
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
		store.dispatch('addComment', {articleId: route.params.id, comment})
		newComment.value = ''
	}
}
</script>

<template>
  <div class="pt-24">
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
				<div>
					<button @click="likeArticle" class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-5 mr-2">Like Post</button>
					<RouterLink :to="{name: 'edit-article', params: {id: article.id}}"><button class="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">Edit Article</button></RouterLink>
				</div>
			</div>
		</div>
		<div class="border-l-2 border-collapse top-20 z-500 h-screen w-1/4 p-8 fixed right-0">
			<div>
				<h1 class="text-xl font-bold mb-5 text-gray-600 text-center">Comments</h1>
				<ul class="w-full">
					<li v-for="comment in article.comments" :key="comment.id" class="w-full mb-5">
						<p class="">{{ comment.content }}</p>
						<p class="text-xs font-extralight italic">{{ comment.posted_on }}</p>
					</li>
				</ul>
				<div>
					<textarea v-model="newComment" placeholder="Add a comment" class="w-full p-2 focus:outline-none bg-gray-200 rounded-lg mb-5 text-sm"></textarea>
					<div>
						<button @click="addComment" class="bg-blue-500 hover:bg-blue-700 text-white font-medimu py-1 px-2 text-sm rounded">Add Comment</button>
					</div>
				</div>
			</div>
			<!-- <p>{{ article.comments }}</p> -->
		</div>
	</div>
	</div>
</template> 