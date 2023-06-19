<template>
  <div class="p-8 pb-0">
    <h1 class="text-3xl font-semibold mb-4 text-blue-500">Recipe by Letter</h1>
  </div>
  <div class="text-blue-500 flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byRecipeLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-blue-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Recipe :meals="meals" />
</template>
  
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Recipe from "../components/Recipe.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const meals = computed(() => store.state.recipeByLetter) 

watch(route, () => {
  store.dispatch("searchRecipeByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchRecipeByLetter", route.params.letter);
});
</script>
