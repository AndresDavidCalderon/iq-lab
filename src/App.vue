<script setup>
import { ref } from 'vue';
import TakeTest from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/Questions/question_data';
import FormUI from './views/take_test/FormUI.vue';

const test = ref([]);
const selectTest = (difficulty) => {
  // takes questions of the same difficulty as chosen and shuffles it.
  test.value = questions.filter(
    (question) => question.difficulty === difficulty,
  ).sort(() => ((Math.random() > 0.5) ? -1 : 1)).slice(0, 9);
};
</script>
<template>
    <TakeTest v-if="test.length===0" @testSelected="(difficulty)=>selectTest(difficulty)"/>
    <FormUI v-if="test.length>0" :questions="test"></FormUI>
</template>
