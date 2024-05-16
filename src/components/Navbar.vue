<script setup>

</script>

<template>
  	<div class="fixed w-full top-0 z-1000 bg-white">
		<div class="flex justify-between items center shadow-lg p-8">
			<RouterLink :to="{name: 'home'}" class="text-3xl font-bold uppercase text-gray-700">Gazetify</RouterLink>
			<div class="flex items-center gap-10">
				<div class="flex gap-4">
					<button class="border-2 border-red-300 hover:bg-red-300 px-3 py-2 rounded">Politics</button>
					<button class="border-2 border-blue-700 hover:bg-blue-700 px-3 py-2 rounded hover:text-white">Sports</button>
					<button class="border-2 border-gray-800 hover:bg-gray-800 px-3 py-2 rounded hover:text-white">Weather</button>
					<button class="border-2 border-yellow-300 hover:bg-yellow-300 px-3 py-2 rounded">Gossip</button>
				</div>
				<div>
					<RouterLink :to="{name: 'new-article'}" class="border-2 border-red-300 bg-red-700 hover:bg-red-600 px-3 py-2 rounded text-white">Post New Article</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>