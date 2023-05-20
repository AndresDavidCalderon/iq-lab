<script setup>
import { ref } from 'vue';
import TestList from './TestList.vue';
import FormUI from './FormUI.vue';
import TestResults from './TestResults.vue';

const currentTest = ref('none');
const inStatsPage = ref(false);
const lastAnswers = ref([]);

const props = defineProps({
  tests: Array,
});

function takeTest(id) {
  currentTest.value = props.tests.find((test) => test.id === id);
}

function submitAnswers(answers) {
  lastAnswers.value = answers;
  inStatsPage.value = true;
}
</script>

<template>
  <TestList v-if="currentTest == 'none'" :tests="props.tests" @test_selected="takeTest">
  </TestList>
  <FormUI v-else-if="inStatsPage === false"   @submit-answers=submitAnswers :test="currentTest">
  </FormUI>
  <TestResults v-else :answers="lastAnswers" :test="currentTest">
  </TestResults>
</template>
