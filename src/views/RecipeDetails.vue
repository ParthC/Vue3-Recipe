<template>
    <div class="max-w-[800px] mx-auto p-8">
      <h1 class="text-4xl font-bold mb-5 text-blue-500">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
      <div class="text-white grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div>
          <strong class="text-white font-bold">Category:</strong> {{ meal.strCategory }}
        </div>
        <div>
          <strong class="text-white font-bold">Area:</strong> {{ meal.strArea }}
        </div>
        <div>
          <strong class="text-white font-bold">Tags:</strong> {{ meal.strTags }}
        </div>
      </div>
  
      <div class="my-3 text-white">
        {{ meal.strInstructions }}
      </div>
  
      <div class="text-white grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="mt-4">
          <YouTube :href="meal.strYoutube" />
          <a
            :href="meal.strSource"
            target="_blank"
            class="ml-3 px-3 py-2 rounded border-2 border-transparent text-violet-600 transition-colors"
          >
            More Details
          </a>
        </div>
      </div>
  
  
    </div>
  </template>

<script setup>
import axios from '../axiosClient';
import { onMounted, ref } from 'vue' 
import { useRoute } from 'vue-router';
import YouTube from '../components/Youtube.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axios.get(`lookup.php?i=${route.params.id}`)
      .then(({data}) => {
        meal.value = data.meals[0] || {}
    })
})
</script>