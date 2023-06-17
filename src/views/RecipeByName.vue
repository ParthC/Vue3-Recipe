<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Recipe by Name</h1>
  </div>
  <div class="px-8 pb-3">
      <input 
        type="text"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Find any recipe......."
      />
  </div>
</template>



<script setup>
import { onMounted, ref } from 'vue'
import store from '../store';
import { computed } from "@vue/reactivity";
import { useRoute } from 'vue-router';

const route = useRoute()
const keyword = ref('')
const recipe = computed(() => store.state.searchedRecipe) 


function searchRecipe() {
  store.dispatch('searchedRecipe', keyword.value)
} 
 
onMounted(() => { 
  keyword.value = route.params.name 
  if(keyword.value) {
    searchRecipe()
  }
})

</script>