<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{name: 'byCharacter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-200">
          Search recipe by Character
        </router-link>

        <router-link :to="{name: 'byIngredient'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-200">
          Search recipe by Ingredient
        </router-link>

        <router-link :to="{name: 'byRecipeName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-200">
          search recipe by Name
        </router-link>
    </div>
  </header>
</template>
