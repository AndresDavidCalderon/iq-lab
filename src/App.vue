<!-- eslint-disable arrow-body-style -->
<script setup>
import { ref, onMounted } from 'vue';
import TakeTest from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/questions/question_data';
import FormUI from './views/take_test/FormUI.vue';
import TestResults from './views/take_test/TestResults.vue';
import LevelIndicator from './views/take_test/LevelIndicator.vue';

const level = ref(1);
const exp = ref(0);
const leveledUp = ref(false);
const adwardedExp = ref(0);

const test = ref([]);
const testType = ref('');
const lastAnswers = ref([]);
const screen = ref('home');

onMounted(() => {
  if (localStorage.getItem('level') !== null) {
    level.value = parseInt(localStorage.getItem('level'), 10);
    exp.value = parseInt(localStorage.getItem('exp'), 10);
  }
});

const setScreen = (newScreen) => {
  screen.value = newScreen;
  if (screen.value !== 'results') {
    adwardedExp.value = 0;
    leveledUp.value = false;
  }
};

const selectRandom = (array, amount) => {
  return array.sort(() => ((Math.random() > 0.5) ? -1 : 1)).slice(0, amount);
};

const startTest = (type) => {
  switch (type) {
    case 'custom': {
      const elegibleQuestions = questions.filter((question) => {
        const levelDifference = question.difficulty - level.value;
        return levelDifference >= -1 && levelDifference <= 1;
      });
      // takes questions of the same difficulty as chosen and shuffles it.
      test.value = selectRandom(elegibleQuestions, 20);
      break;
    }
    case 'standard':
      test.value = selectRandom(questions, 50);
      break;
    default:
      throw Error('Unknown test type');
  }
  testType.value = type;
  setScreen('test');
};

const saveProgress = () => {
  localStorage.setItem('level', level.value.toString());
  localStorage.setItem('exp', exp.value.toString());
};

const finishTest = (answers) => {
  lastAnswers.value = answers;
  setScreen('results');
  if (level.value < 4) {
    adwardedExp.value = lastAnswers.value.filter((a) => a === 'd').length * 4;
    exp.value += adwardedExp.value;
    if (exp.value >= 100) {
      exp.value = 0;
      level.value += 1;
      leveledUp.value = true;
    }
    saveProgress();
  }
};

</script>
<template>
    <TakeTest
    v-if="screen==='home'"
    @testStarted="startTest()"
    @standardTestStarted="startTest('standard')"/>
    <FormUI
      v-if="screen==='test'"
      :questions="test"
      @testFinished="finishTest"/>
    <TestResults v-if="screen==='results'"
      :answers="lastAnswers"
      @test-again="startTest(testType)"/>

    <LevelIndicator
    v-if="screen==='home' || screen==='results'"
    :level-up="leveledUp"
    :adwarded-exp="adwardedExp"
    :level="level"
    :exp="exp">
    </LevelIndicator>
</template>
