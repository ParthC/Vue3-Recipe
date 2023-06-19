<template>
    <div class="p-8 pb-0">
      <h1 class="text-3xl font-semibold mb-4 text-blue-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
    <Recipe :meals="meals" />
</template>
  
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Recipe from "../components/Recipe.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.recipeByIngredients)

onMounted(() => {
    store.dispatch('searchRecipeByIngredient', route.params.ingredient)
})

</script>
  