<template>
    <div class="flex flex-col p-8">
        <div class="flex justify-center gap-1 mt-2">
            <router-link :to="{ name: 'byCharacter', params: {item} }" v-for="item of character" :key="character" >
            {{ item }}
            </router-link>
        </div>
      <!-- <pre>  {{ ingredients }} </pre> -->
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axios from '../axiosClient';

const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([])

onMounted(async() => {
    const response = await axios.get('/list.php?i=list')
    ingredients.value = response.data
})

let meals = computed(() => store.state.meals)
</script>