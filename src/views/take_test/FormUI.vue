<script setup>
import { defineProps, reactive, ref } from 'vue';

const currentQuestion = ref(0);
const answerHistory = reactive([]);
const verificationModal = ref(false);
const answerOrder = ref(['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1)));
const props = defineProps({
  questions: Array,
});

const getQuestionFormat = () => {
  const declaredFormat = props.questions[currentQuestion.value].format;
  return declaredFormat === undefined ? 'png' : declaredFormat;
};

const getAnswerSrc = (answer) => `/src/assets/test_resources/${props.questions[currentQuestion.value].name}/${answer}.${getQuestionFormat()}`;

const getQuestionSrc = () => `/src/assets/test_resources/${props.questions[currentQuestion.value].name}/question.${getQuestionFormat()}`;

const submitAnswer = (answer) => {
  if (!verificationModal.value) {
    answerHistory.push(answer);
    verificationModal.value = true;
  }
};

const closeModal = () => {
  verificationModal.value = false;
  currentQuestion.value += 1;
};

</script>

<template>
  <h1 class="title">{{ props.questions[currentQuestion].question }}</h1>
  <div class="row">
    <div class="column_4" id="test_image_wrapper">
      <img id=test_image
      :src="getQuestionSrc()">
    </div>
    <div id="answer_space" class="column_6">
      <div id="answers">
        <button @click="submitAnswer(answer)" class="answer_button"
        v-for="answer in answerOrder"
        :key="answer">
        <img
        class="answer_image"
        :src=getAnswerSrc(answer)>
      </button>
      </div>
    </div>
  </div>
  <div v-if="verificationModal" id="verification_modal">
    <h1>{{ answerHistory[currentQuestion]==="d" ? "Right":"Wrong"}}</h1>
    <h2>{{ questions[currentQuestion].explanation }}</h2>
    <button @click="closeModal" id="close_verification_modal">Next</button>
  </div>
</template>

<style src="./responsive.css"></style>
<style scoped>
.title {
  text-align: center;
}

#test_image_wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}

#test_image{
  object-fit: contain;
  width: 100%;
  padding: 10px;
  height: 40vh;
}

.answer_button{
  margin: 10px;
}

.answer_image{
  width: 100px;
  height: auto;
}

#verification_modal{
  position: fixed;
  width: 100vw;
  height: 30vh;
  top: 70vh;
  background-color: v-bind("answerHistory[currentQuestion]==='d' ? 'green':'red'");
  color: white;
  padding: 10px;
}

#close_verification_modal{
  position: absolute;
  width: 20%;
  height: 20%;
  top: 70%;
  left: 75%;
}

#answers{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  width: 100vw;
}

@media only screen and (min-width:600px){
  #test_image_wrapper{
  height: 70vh;
  }
  #answers{
    height: 70vh;
    width: 60vw;
  }
  .title{
    height: 4vh;
  }
}

</style>
