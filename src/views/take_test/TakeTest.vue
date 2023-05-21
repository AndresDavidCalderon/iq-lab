<script setup>
import { ref, reactive } from 'vue';
import TestList from './TestList.vue';
import FormUI from './FormUI.vue';
import TestResults from './TestResults.vue';

const tests = reactive([
  {
    name: 'default',
    id: 0,
    questions: [{
      question: "What is the color of Simon Bolivar's white horse?",
      answers: [
        'Red',
        'The same color as Bolivar',
        'Green',
        'White',
      ],
      image: 'white_horse.jpg',
      correct: 3,
    }, {
      question: 'This statement is false',
      answers: [
        'True',
        'False',
      ],
      correct: 1,
    }],
  },
]);

const currentTest = ref('none');
const inStatsPage = ref(false);
const lastAnswers = ref([]);

function takeTest(id) {
  currentTest.value = tests.find((test) => test.id === id);
}

function submitAnswers(answers) {
  lastAnswers.value = answers;
  inStatsPage.value = true;
}
</script>

<template>
  <TestList v-if="currentTest == 'none'" :tests="tests" @test_selected="takeTest">
  </TestList>
  <FormUI v-else-if="inStatsPage === false"   @submit-answers=submitAnswers :test="currentTest">
  </FormUI>
  <TestResults v-else :answers="lastAnswers" :test="currentTest">
  </TestResults>
</template>
