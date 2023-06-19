<template>
  <header class="bg-blue-400 shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-black font-semibold"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
        <router-link :to="{name: 'byRecipeName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-500 hover:text-white text-black font-semibold">
          Search Recipe
        </router-link>

        <router-link :to="{name: 'byRecipeLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-500 hover:text-white text-black font-semibold">
          Recipe Letter
        </router-link>

        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-500 hover:text-white text-black font-semibold">
          Recipe Ingredient
        </router-link>
    </div>
  </header>
</template>
