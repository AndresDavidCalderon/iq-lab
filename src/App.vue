<script setup>
import { ref } from 'vue';
import TakeTest from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/questions/question_data';
import FormUI from './views/take_test/FormUI.vue';
import TestResults from './views/take_test/TestResults.vue';

const level = ref(1);
const exp = ref(0);
const test = ref([]);
const lastAnswers = ref([]);
const startTest = () => {
  // takes questions of the same difficulty as chosen and shuffles it.
  test.value = questions.sort(() => ((Math.random() > 0.5) ? -1 : 1)).slice(0, 19);
};

const restartTest = () => {
  lastAnswers.value = [];
  startTest();
};
</script>
<template>
    <TakeTest v-if="test.length===0" @testStarted="startTest()" :level="level" :exp="exp"/>
    <TestResults v-if="lastAnswers.length>0"
      :questions="questions"
      :answers="lastAnswers"
      @test-again="restartTest"/>
    <FormUI v-if="test.length>0 && lastAnswers.length==0"
      :questions="test"
    @testFinished="(answers)=>lastAnswers=answers"/>
</template>
