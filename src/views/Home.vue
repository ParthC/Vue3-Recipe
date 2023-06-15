<template>
    <routerview />
    {{ meals }}
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'

let meals = computed(() => store.state.meals)
</script>