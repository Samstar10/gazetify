<script setup>
const props = defineProps({
    article: {
        required: true,
        type: Object
    }
})
</script>

<template>
  <!-- <RouterLink :to="{name: 'article', params: {id: article.id}}" > -->
    <RouterLink :to="{name: 'article', params: {id: article.id}}" class="shadow-lg hover:shadow-2xl rounded box-border max-h-[300px]">
      <img :src="article.thumbnail" :alt="article.title" class="w-full h-1/2 object-cover rounded">
      <div class="p-2">
				<h3 class="text-center font-semibold">{{ article.title }}</h3>
        <p class="p-2 font-extralight italic text-sm overflow-hidden text-nowrap text-ellipsis">{{ article.description }}</p>
        <div class="flex justify-between">
					<p class="font-light uppercase text-xs">{{ article.category }}</p>
        	<p class="font-bold uppercase text-xs">{{ article.likes !== 1 ? `${article.likes} likes` : `${article.likes} like` }}</p>
				</div>
        <p v-if="article.comments" class="font-light text-sm mt-2">{{ article.comments.length > 1 || article.comments.length === 0 || article.comments.length === null ? `${article.comments.length} comments` : `${article.comments.length} comment` }}</p>
        <p class="mt-4 text-gray-500 font-thin italic text-xs">Posted on: {{ article.posted_on }}</p>
      </div>
    </RouterLink>
  <!-- </RouterLink> -->
</template>