<template>
    <div class="p-8 pb-0 text-blue-500">
        <h1 class="text-3xl font-semibold mb-4">Recipe Menu</h1>
    </div>
    <Recipe :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "../axiosClient";
import Recipe from "../components/Recipe.vue";
const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 30; i++) {
    axios.get(`random.php`)
    .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>