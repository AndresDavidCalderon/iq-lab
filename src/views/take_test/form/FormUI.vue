<script setup>
import { ref } from 'vue';

const props = defineProps({
  test: Object,
});
const currentQuestion = ref(0);
</script>
<template>
    <p>Question {{ currentQuestion+1 }} of {{ props.test.questions.length }}</p>
    <h1>{{props.test.questions[currentQuestion].question}}</h1>
    <div v-for="answer in props.test.questions[currentQuestion].answers" :key="answer">
      <input
        type="radio"
        name="selected_answer"
        :id="answer"
        :value="props.test.questions[currentQuestion].answers.indexOf(answer)"
      >

      <label :for="answer">{{ answer }}</label>
    </div>
    <button>submit</button>
</template>
