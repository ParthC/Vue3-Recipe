<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
      <RecipeItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-white p-8">
      Oops There are no meals !!!  
    </div>
</template>
  
<script setup>
import RecipeItem from './RecipeItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
})

</script>
  