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

function testHasImage() {
  return props.test.questions[currentQuestion.value].image !== undefined;
}

</script>

<template>
  <p>Question {{ currentQuestion + 1 }} of {{ props.test.questions.length }}</p>
  <h1 class="title">{{ props.test.questions[currentQuestion].question }}</h1>

  <div class="row">
    <img class="column_2" id="test_image"
      v-if="testHasImage()"
      :src="'/src/assets/test_resources/' + props.test.questions[currentQuestion].image"
    />
    <div :class="testHasImage() ? 'column_8' : 'column_10'" id="answers">
      <div v-for="answer in props.test.questions[currentQuestion].answers" :key="answer">
      <input type="radio" name="selected_answer" :id="answer"
        :value=props.test.questions[currentQuestion].answers.indexOf(answer)
        :checked="currentAnswer === answer"
        @change="submitAnswer">
      <label :for="answer">{{ answer }}</label>
    </div>

    </div>
  </div>

  <button id="submit" @click="submit" :disabled="currentAnswer === -1">submit</button>
</template>

<style scoped src="./responsive.css"></style>
<style scoped src="./text.css"></style>
<style scoped>
#test_image{
  height: auto;
  padding:20px;
}
#answers{
  text-align: center;
}

#submit{
  position: relative;
  left: 40%;
  top: 50px;
  width: 20%;
}

.title{
  text-align: center;
}
</style>
