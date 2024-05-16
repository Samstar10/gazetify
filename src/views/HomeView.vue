<script setup>
import store from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
import NewsArticle from '@/components/NewsArticle.vue'
import { useRoute } from 'vue-router';

const articles = computed(() => store.state.articles)
const route = useRoute()

onMounted(() => {
  fetchArticles()
})

const fetchArticles = () => {
  const category = route.query.category || 'all'

  store.dispatch('fetchArticles', category)
}

watch(route, () => {
  fetchArticles()
})
</script>

<template>
  <main class="p-8 pt-28">
    <h4 class="text-gray-500 font-semibold mb-4">Today</h4>
    <div class="grid md:grid-cols-5 grid-cols-2 gap-4" v-if="articles.length">
      <NewsArticle :article="article" v-for="article in articles" :key="article.id" />
    </div>
    <p v-else class="text-center text-gray-500 font-bold">No articles found</p>
  </main>
</template>
