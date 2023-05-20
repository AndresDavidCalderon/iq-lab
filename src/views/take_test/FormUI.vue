<script setup>
import { ref, reactive } from 'vue';

const emit = defineEmits(['submit-answers']);

const props = defineProps({
  test: Object,
});
const currentQuestion = ref(0);
const currentAnswer = ref(-1);

const answers = reactive([]);

function submit() {
  answers[currentQuestion.value] = currentAnswer.value;
  if (currentQuestion.value < props.test.questions.length - 1) {
    currentQuestion.value += 1;
  } else {
    emit('submit-answers', answers);
  }
  currentAnswer.value = -1;
}

function submitAnswer(event) {
  if (event.target.checked) {
    currentAnswer.value = parseInt(event.target.value, 10);
  }
}

</script>

<template>
  <p>Question {{ currentQuestion + 1 }} of {{ props.test.questions.length }}</p>
  <h1>{{ props.test.questions[currentQuestion].question }}</h1>
  <image
    v-if="props.test.questions[currentQuestion].image!==undefined"
    :src="'/src/static/test_resources/' + props.test.questions[currentQuestion].image"
  >

</image>
  <div v-for="answer in props.test.questions[currentQuestion].answers" :key="answer">
    <input type="radio" name="selected_answer" :id="answer"
      :value=props.test.questions[currentQuestion].answers.indexOf(answer)
      :checked="currentAnswer === answer"
      @change="submitAnswer">

    <label :for="answer">{{ answer }}</label>
  </div>
  <button @click="submit" :disabled="currentAnswer===-1">submit</button>
</template>
