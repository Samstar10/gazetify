<script setup>
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import NewsArticle from '@/components/NewsArticle.vue'

const articles = computed(() => store.state.articles)

onMounted(() => {
  store.dispatch('fetchArticles',)
})
</script>

<template>
  <main class="p-8">
    <h4 class="text-gray-500 font-semibold mb-4">Today</h4>
    <div class="grid md:grid-cols-5 grid-cols-2 gap-4">
      <NewsArticle :article="article" v-for="article in articles" :key="article.id" />
    </div>
  </main>
</template>
