<script setup>
import { ref } from 'vue';
import TestListUI from './TestList.vue';
import FormUI from './FormUI.vue';
import TestResults from './TestResults.vue';
import TestList from './test_list';

const currentTest = ref('none');
const inStatsPage = ref(false);
const lastAnswers = ref([]);

function takeTest(name) {
  currentTest.value = import(`./Questions/${name}.js`);
}

function submitAnswers(answers) {
  lastAnswers.value = answers;
  inStatsPage.value = true;
}
</script>

<template>
  <TestListUI v-if="currentTest == 'none'" :tests="TestList" @test_selected="takeTest">
  </TestListUI>
  <FormUI v-else-if="inStatsPage === false"   @submit-answers=submitAnswers :test="currentTest">
  </FormUI>
  <TestResultsUI v-else :answers="lastAnswers" :test="currentTest">
  </TestResultsUI>
</template>
