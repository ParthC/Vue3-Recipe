<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-black border-black bg-blue-500 transition-colors font-semibold"
  >
    <slot>Goto YouTube</slot>
  </a>
</template>
  
<script setup>
const props = defineProps({
  href: String
})
</script>
