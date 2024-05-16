<script setup>

import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import store from '@/store';

const route = useRoute()

const article = computed(() => store.state.article || {})

onMounted(() => {
    store.dispatch('fetchArticle', route.params.id)
        .then(() => {
            console.log(article.value)
        })
})
</script>

<template>
  <div class="flex justify-between">
		<div class="flex flex-col items-center w-3/4 p-8">
			<h1 class="text-3xl font-bold mb-5">{{ article.title }}</h1>
			<img :src="article.thumbnail" :alt="article.title" class="w-2/3 h-1/2 object-fit rounded mb-5">
			<div class="w-full flex justify-between items-center">
				<p class="font-thin text-sm mb-5">Category: {{ article.category.toUpperCase() }}</p>
				<p class="font-thin text-sm mb-5">Published on: {{ article.posted_on }}</p>
			</div>
			<p class="w-full text-left font-light italic mb-5">{{ article.description }}</p>
			<p class="w-full text-left font-thin italic">{{ article.likes > 1 || article.likes === 0 || article.likes === null ? `${article.likes} likes` : `${article.likes} like` }}</p>
		</div>
		<div class="border-l-2 h-screen w-1/4 p-8">
			<p>{{ article.comments }}</p>
			<button>Like Post</button>
		</div>
	</div>
</template> 