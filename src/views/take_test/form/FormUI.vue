<script setup>
import { ref } from 'vue';

const props = defineProps({
  test: Object,
});
const currentQuestion = ref(0);
</script>
<template>
    <p>Question {{ currentQuestion+1 }} of {{ props.test.questions.length }}</p>
    <h1>QUESTION</h1>
</template>
