<script setup>
import store from '@/store';
import { ref } from 'vue';

const formData = ref({
	title: '',
	thumbnail: '',
	category: '',
	description: '',
	posted_on: new Date().toDateString(),
	likes: 0,
	comments: [],
})

const onSubmit = () => {
	const payload = {
		...formData.value
	}

	store.dispatch('addArticle', payload)
}
</script>

<template>
  <div class="pt-28 p-8 flex items-center justify-center flex-col">
	<h1 class="text-center mb-10 mt-5 text-2xl font-bold">What's Cooking Today?</h1>
	<form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center w-2/3">
		<label for="">Title</label>
		<input 
			v-model="formData.title" 
			type="text"
			class="w-full p-2 focus:outline-none bg-gray-200 rounded-lg mb-5 text-sm">
		<label for="">Image</label>
		<input 
			v-model="formData.thumbnail" 
			type="text"
			class="w-full p-2 focus:outline-none bg-gray-200 rounded-lg mb-5 text-sm">
		<label for="">Category</label>
		<select name="" id="" v-model="formData.category" class="w-full p-2 focus:outline-none bg-gray-200 rounded-lg mb-5 text-sm" required>
			<option value="" disabled selected>Select Category</option>
			<option value="politics">Politics</option>
			<option value="sports">Sports</option>
			<option value="weather">Weather</option>
			<option value="gossip">Gossip</option>
		</select>
		<label for="">Content</label>
		<textarea name="" id="" cols="30" rows="10" v-model="formData.description" class="w-full p-2 focus:outline-none bg-gray-200 rounded-lg mb-5 text-sm"></textarea>
		<button type="submit">Submit</button>
	</form>
  </div>
</template>

<style scope>
select:required:invalid{
    color: #999;
}

option[value=""][disabled] {
    display: none;
}
</style>