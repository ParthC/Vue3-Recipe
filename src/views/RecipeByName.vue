<template>
  <div class="p-8 pb-0">
    <h1 class="text-3xl font-semibold mb-4 text-blue-500">Search Recipe by Name</h1>
  </div>
  <div class="px-8 pb-3">
      <input 
        v-model="keyword"
        type="text"
        class="rounded border-2 bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500 w-full"
        placeholder="Type Recipe Name......."
        @change="searchRecipe"
      />
  </div>
  <Recipe :meals="meals" />
</template>

<script setup>
import Recipe from "../components/Recipe.vue"
import { onMounted, ref } from "vue"
import store from "../store";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedRecipe);

function searchRecipe() {
  if (keyword.value) {
    store.dispatch("searchRecipe", keyword.value);
  } else {
    store.commit("SET_SEARCHED_RECIPE", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchRecipe()
  }
})
</script>