<script setup>
import {
  defineProps, reactive, ref, defineEmits,
} from 'vue';

const emit = defineEmits(['testFinished']);
const currentQuestion = ref(0);
const answerHistory = reactive([]);
const verificationModal = ref(false);
const showExplanation = ref(false);
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
  showExplanation.value = false;
  if (currentQuestion.value < props.questions.length - 1) {
    currentQuestion.value += 1;
    answerOrder.value = ['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1));
  } else {
    emit('testFinished', answerHistory);
  }
};

const toggleExplanation = () => {
  showExplanation.value = !showExplanation.value;
};

const getExplanation = () => {
  const { explanation } = props.questions[currentQuestion.value];
  if (Array.isArray(explanation)) {
    const answerIndex = ['a', 'b', 'c', 'd'].indexOf(answerHistory[currentQuestion.value]);
    return explanation[answerIndex];
  }
  return explanation;
};

</script>

<template>
  <h1 class="title">{{ props.questions[currentQuestion].question }}</h1>
  <div class="row">
    <div class="column_4" id="test_image_wrapper">
      <img id=test_image :src="getQuestionSrc()">
    </div>
    <div id="answer_space" class="column_6">
      <div id="answers">
        <button @click="submitAnswer(answer)" class="answer_button" v-for="answer in answerOrder" :key="answer">
          <img class="answer_image" :src=getAnswerSrc(answer)>
        </button>
      </div>
    </div>
  </div>

  <div v-if="verificationModal" id="verification_modal">
    <h1 id="verification_title">
      {{ answerHistory[currentQuestion] === "d" ? "Right" : "Wrong" }}
    </h1>
    <p v-if="questions[currentQuestion].explanation !== undefined" id="explanation_in_modal">
      {{ getExplanation() }}
    </p>
    <button v-if="questions[currentQuestion].explanation !== undefined" @click="toggleExplanation" id="toggle_explanation">
      {{ showExplanation ? 'Hide explanation' : 'Show explanation' }}
    </button>
    <button @click="closeModal" id="close_verification_modal">Next</button>
    <div v-if="showExplanation" id="explanation">
      {{ getExplanation() }}
    </div>
  </div>
</template>

<style src="./responsive.css"></style>
<style scoped>
.title {
  text-align: center;
}

#test_image_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#test_image {
  object-fit: contain;
  width: 100%;
  padding: 10px;
  height: v-bind("verificationModal ? '20vh' : '40vh'");
}

.answer_button {
  margin: 10px;
}

.answer_image {
  width: v-bind("verificationModal ? '60px' : '100px'");
  height: auto;
}

#explanation_in_modal {
  display: none;
}

#verification_modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 20vh;
  bottom: 0;
  background-color: v-bind("answerHistory[currentQuestion] === 'd' ? 'green' : 'red'");
  color: white;
  padding: 10px;
  font-size: 3vmin;
  text-align: center;
}

#modal_explanation {
  height: 35%;
  overflow: auto;
  white-space: pre-line;
  visibility: hidden;
}

#explanation {
  position: fixed;
  left: 0px;
  top: 25vh;
  height: 50vh;
  width: 100vw;
  background-color: inherit;
  white-space: pre-line;
  padding: 4px;
  font-size: 5vh;
  overflow: auto;
  text-align: left;
}

#verification_title {
  height: 30%
}

#close_verification_modal {
  height: 20%;
}

#toggle_explanation {
  height: 20%
}

#answers {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  width: 100vw;
}

@media only screen and (min-width:600px) {
  #test_image_wrapper {
    height: 70vh;
  }

  .answer_image {
    width: 100px;
  }

  #answers {
    height: 70vh;
    width: 60vw;
  }

  .title {
    height: 4vh;
  }

  #verification_modal {
    display: block;
    height: 35vh;
    top: 65vh;
    text-align: justify;
  }

  #close_verification_modal {
    position: absolute;
    width: 80px;
    height: 50px;
    bottom: 30px;
    right: 30px;
  }

  #toggle_explanation {
    visibility: hidden;
  }

  #explanation_in_modal {
    display: block;
    white-space: pre-line;
  }

}
</style>
