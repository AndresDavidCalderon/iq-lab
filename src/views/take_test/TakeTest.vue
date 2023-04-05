<script setup>
   import TestList from "./list/TestList.vue"
   const props=defineProps({
   tests:Array
   }
   )
</script>

<template>
   <TestList :tests="props.tests"></TestList>
</template>