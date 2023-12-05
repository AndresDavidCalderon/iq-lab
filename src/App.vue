<script setup>
import { ref, onMounted } from 'vue';
import TakeTest from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/questions/question_data';
import FormUI from './views/take_test/FormUI.vue';
import TestResults from './views/take_test/TestResults.vue';
import LevelIndicator from './views/take_test/LevelIndicator.vue';

const level = ref(1);
const exp = ref(0);
const test = ref([]);
const lastAnswers = ref([]);
const screen = ref('home');

onMounted(() => {
  if (localStorage.getItem('level') !== null) {
    level.value = parseInt(localStorage.getItem('level'), 10);
    exp.value = parseInt(localStorage.getItem('exp'), 10);
  }
});

const startTest = () => {
  const elegibleQuestions = questions.filter((question) => {
    const levelDifference = question.difficulty - level.value;
    return levelDifference >= -1 && levelDifference <= 1;
  });
  // takes questions of the same difficulty as chosen and shuffles it.
  test.value = elegibleQuestions.sort(() => ((Math.random() > 0.5) ? -1 : 1)).slice(0, 20);
  screen.value = 'test';
};

const saveProgress = () => {
  localStorage.setItem('level', level.value.toString());
  localStorage.setItem('exp', exp.value.toString());
};

const finishTest = (answers) => {
  lastAnswers.value = answers;
  screen.value = 'results';
  exp.value += lastAnswers.value.filter((a) => a === 'd').length * 4;
  if (exp.value >= 100) {
    exp.value = 0;
    level.value += 1;
  }
  saveProgress();
};

const restartTest = () => {
  lastAnswers.value = [];
  screen.value = 'test';
  startTest();
};

</script>
<template>
    <TakeTest v-if="screen==='home'" @testStarted="startTest()"/>
    <FormUI v-if="screen==='test'"
      :questions="test"
    @testFinished="finishTest"/>
    <TestResults v-if="screen==='results'"
      :answers="lastAnswers"
      @test-again="restartTest"/>

    <LevelIndicator :level="level" :exp="exp"></LevelIndicator>
</template>
