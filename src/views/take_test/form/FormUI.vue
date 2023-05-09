<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  test: Object,
  submitAnswer: Function,
});
const currentQuestion = ref(0);
const currentAnswer = ref(0);

const answers = reactive({});

function submit() {
  currentQuestion.value += 1;
  answers[currentQuestion.value] = currentAnswer;
}

function submitAnswer(event) {
  if (event.target.checked) {
    currentAnswer.value = event.target.value;
  }
}

</script>
<template>
  <p>Question {{ currentQuestion + 1 }} of {{ props.test.questions.length }}</p>
  <h1>{{ props.test.questions[currentQuestion].question }}</h1>
  <div v-for="answer in props.test.questions[currentQuestion].answers" :key="answer">
    <input type="radio" name="selected_answer" :id="answer"
      :value="props.test.questions[currentQuestion].answers.indexOf(answer)"
      :checked="currentAnswer === answer"
      :on-change="submitAnswer">

    <label :for="answer">{{ answer }}</label>
  </div>
  <button @click="submit">submit</button>
</template>
