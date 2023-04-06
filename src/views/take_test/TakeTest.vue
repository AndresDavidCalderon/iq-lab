<script setup>
import { ref } from 'vue';
import TestList from './list/TestList.vue';
import FormUI from './form/FormUI.vue';

const currentTest = ref('none');

const props = defineProps({
  tests: Array,
});

function takeTest(id) {
  currentTest.value = props.tests.find((test) => test.id === id);
}
</script>

<template>
  <TestList
    v-if="currentTest == 'none'"
    :tests="props.tests"
    @test_selected="takeTest"
  >
  </TestList>
  <FormUI v-else :test="currentTest"></FormUI>
</template>
