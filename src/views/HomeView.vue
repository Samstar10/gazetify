<script setup>
import store from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
import NewsArticle from '@/components/NewsArticle.vue'
import { useRoute } from 'vue-router';
import dayjs from 'dayjs'

const articles = computed(() => store.state.articles)
const route = useRoute()

const todayArticles = ref([])
const weekArticles = ref([])
const monthArticles = ref([])
const olderArticles = ref([])

const categorizeArticles = () => {
  const now = dayjs()
  todayArticles.value = []
  weekArticles.value = []
  monthArticles.value = []
  olderArticles.value = []

  articles.value.forEach(article => {
    const articleDate = dayjs(article.posted_on)
    if (articleDate.isSame(now, 'day')) {
      todayArticles.value.push(article)
    }else if (articleDate.isSame(now, 'week')) {
      weekArticles.value.push(article)
    }else if (articleDate.isSame(now, 'month')) {
      monthArticles.value.push(article)
    }else {
      olderArticles.value.push(article)
    }
  })
}

const fetchArticles = () => {
  const category = route.query.category || 'all'

  store.dispatch('fetchArticles', category).then(() => {
    categorizeArticles()
  })
}

onMounted(() => {
  fetchArticles()
})

watch(route, () => {
  fetchArticles()
})
</script>

<template>
  <main class="p-8 pt-28">
    <p v-if="!articles.length" class="text-center text-gray-500 font-bold pt-10">No articles found in this category</p>

    <div v-if="todayArticles.length">
      <h4 class="text-gray-500 font-semibold mb-4 mt-4">Today</h4>
      <div class="grid md:grid-cols-5 grid-cols-2 gap-4 overflow-x-auto mb-4">
        <NewsArticle :article="article" v-for="article in todayArticles" :key="article.id" />
      </div>
    </div>

    <div v-if="weekArticles.length">
      <h4 class="text-gray-500 font-semibold mb-4">This Week</h4>
      <div class="grid md:grid-cols-5 grid-cols-2 gap-4 overflow-x-auto mb-4">
        <NewsArticle :article="article" v-for="article in weekArticles" :key="article.id" />
      </div>
    </div>

    <div v-if="monthArticles.length">
      <h4 class="text-gray-500 font-semibold mb-4">This Month</h4>
      <div class="grid md:grid-cols-5 grid-cols-2 gap-4 overflow-x-auto mb-4">
        <NewsArticle :article="article" v-for="article in monthArticles" :key="article.id" />
      </div>
    </div>

    <div v-if="olderArticles.length">
      <h4 class="text-gray-500 font-semibold mb-4">Older</h4>
      <div class="grid md:grid-cols-5 grid-cols-2 gap-4 overflow-x-auto mb-4">
        <NewsArticle :article="article" v-for="article in olderArticles" :key="article.id" />
      </div>
    </div>
  </main>
</template>
