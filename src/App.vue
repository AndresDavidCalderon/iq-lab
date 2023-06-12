<script setup>
import { ref } from 'vue';
import TakeTest from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/Questions/question_data';
import FormUI from './views/take_test/FormUI.vue';

const test = ref([]);
const selectTest = (difficulty) => {
  test.value = questions.filter((question) => question.difficulty === difficulty);
};
</script>
<template>
    <TakeTest v-if="test.length===0" @testSelected="(difficulty)=>selectTest(difficulty)"/>
    <FormUI v-if="test.length>0"></FormUI>
</template>
