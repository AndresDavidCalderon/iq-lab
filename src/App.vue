<script setup>
import { reactive, ref } from 'vue';
import Home from './views/HomePage.vue';
import TakeTest from './views/take_test/TakeTest.vue';
import CreateTest from './views/create_test/CreateTest.vue';

const tests = reactive([
  {
    name: 'default',
    id: 0,
    questions: [{

    }],
  },
]);
const currentSection = ref('home');
function setSection(screen) {
  currentSection.value = screen;
}
</script>
<template>
    <Home v-if="currentSection=='home'" :setSection="setSection"></Home>
    <CreateTest v-if="currentSection=='create_test'"></CreateTest>
    <TakeTest v-if="currentSection=='take_test'" :tests="tests"></TakeTest>
</template>
