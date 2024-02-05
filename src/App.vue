<script setup>
import { ref, onMounted } from 'vue';
import TakeTestHome from './views/take_test/TakeTestHome.vue';
import questions from './views/take_test/questions/question_data';
import FormUI from './views/take_test/FormUI.vue';
import LevelIndicator from './views/take_test/LevelIndicator.vue';
import AboutAndPrivacy from './views/AboutAndPrivacy.vue';
import Intro from './views/IntroScreen.vue';

const level = ref(1);
const exp = ref(0);
const leveledUp = ref(false);
const adwardedExp = ref(0);
const themeColor = '#97DB45';
const darkerTheme = '#87C73A';

const test = ref([]);
const testType = ref('');
const lastAnswers = ref(undefined);
const screen = ref(localStorage.getItem('intro') === null ? 'intro' : 'home');

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

// eslint-disable-next-line arrow-body-style
const selectRandom = (array, amount) => array.sort(() => {
  return (Math.random() > 0.5 ? -1 : 1);
}).slice(0, amount);

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
  setScreen('home');
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

const cancelTest = () => {
  screen.value = 'home';
};

const exitIntro = () => {
  localStorage.setItem('intro', 'done');
  setScreen('home');
};

</script>
<template>
  <FormUI
    v-if="screen==='test'"
    :questions="test"
    :testType="testType"
    :themeColor="themeColor"
    @testFinished="finishTest"
    @testCanceled="cancelTest"
    />
  <div id="container">
    <LevelIndicator
    v-if="screen==='home' || screen==='intro'"
    :levelUp="leveledUp"
    :level="level"
    :exp="exp"
    :theme-color="themeColor">
    </LevelIndicator>
    <Intro
      v-if="screen==='intro'"
      @exitIntro="exitIntro('home')"
    ></Intro>
    <TakeTestHome
    v-if="screen==='home'"
    @testStarted="startTest('custom')"
    @standardTestStarted="startTest('standard')"
    @aboutSelected="setScreen('about')"
    :lastAnswers="lastAnswers"
    :themeColor="themeColor"
    :selectedColor="darkerTheme"/>
    <AboutAndPrivacy
    v-if="screen=='about'"
    @backPressed="setScreen('home')"
    />
  </div>
</template>

<style scoped>

#app_container{
  position: relative;
  left: 2.5vw;
  display: flex;
  flex-direction: column;
  width: 95vw;
}
</style>
