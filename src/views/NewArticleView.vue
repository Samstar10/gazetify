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
  <h1>What's Cooking Today?</h1>
	<form @submit.prevent="onSubmit">
		<label for="">Title</label>
		<input 
			v-model="formData.title" 
			type="text">
		<label for="">Image</label>
		<input 
			v-model="formData.thumbnail" 
			type="text">
		<label for="">Category</label>
		<select name="" id="" v-model="formData.category">
			<option value="">Select Category</option>
			<option value="politics">Politics</option>
			<option value="sports">Sports</option>
			<option value="weather">Weather</option>
			<option value="gossip">Gossip</option>
		</select>
		<label for="">Content</label>
		<textarea name="" id="" cols="30" rows="10" v-model="formData.description"></textarea>
		<button type="submit">Submit</button>
	</form>
</template>