<script setup>
import {
  defineProps, reactive, ref, defineEmits, onMounted,
} from 'vue';

const emit = defineEmits(['testFinished']);
const currentQuestion = ref(0);
const answerHistory = reactive([]);
const verificationModal = ref(false);
const showExplanation = ref(false);
const answerOrder = ref(['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1)));
const SVGData = ref({});
const props = defineProps({
  questions: Array,
});

const getQuestionFormat = () => {
  const declaredFormat = props.questions[currentQuestion.value].format;
  return declaredFormat === undefined ? 'png' : declaredFormat;
};

const getQuestionDirectory = () => `/src/assets/test_resources/${props.questions[currentQuestion.value].name}`;

const getAnswerSrc = (answer) => `${getQuestionDirectory()}/${answer}.${getQuestionFormat()}`;

const getQuestionSrc = () => `${getQuestionDirectory()}/question.${getQuestionFormat()}`;

const submitAnswer = (answer) => {
  if (!verificationModal.value) {
    answerHistory.push(answer);
    verificationModal.value = true;
  }
};

const getSVGGroup = async (groupID) => {
  const parser = new DOMParser();
  const xmlString = await (await (await fetch(`${getQuestionDirectory()}/drawing.svg`))).text();
  const document = parser.parseFromString(xmlString, 'image/svg+xml');
  if (document.querySelector('parsererror')) {
    throw Error(`Couldnt read XML correctly, this is the document: ${xmlString}`);
  }
  const group = document.querySelector(`#${groupID}`);
  if (group === null) {
    throw Error(`Couldn't find group ID ${groupID}`);
  }
  return `<g>${group.outerHTML}</g>`;
};

const updateSVGData = async () => {
  SVGData.value = {
    question: await getSVGGroup('question'),
    a: await getSVGGroup('a'),
    b: await getSVGGroup('b'),
    c: await getSVGGroup('c'),
    d: await getSVGGroup('d'),
  };
};

const getFileShape = () => {
  const { answerShape } = props.questions[currentQuestion.value];
  if (answerShape === undefined) {
    return 'multiple_files';
  }
  return answerShape;
};

const closeModal = () => {
  verificationModal.value = false;
  showExplanation.value = false;
  if (currentQuestion.value < props.questions.length - 1) {
    currentQuestion.value += 1;
    answerOrder.value = ['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1));
    if (getFileShape() === 'single_file') {
      updateSVGData();
    }
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

const getQuestion = () => {
  const { question } = props.questions[currentQuestion];
  if (question !== undefined) {
    return question;
  }
  return 'Which option logically follows this sequence?';
};

onMounted(() => {
  const questionFormat = getFileShape();
  if (questionFormat === 'single_file') {
    updateSVGData();
  }
});

</script>

<template>
  <h1 class="title">{{ props.questions[currentQuestion].question }}</h1>
  <div class="row">
    <div class="column_4" id="test_image_wrapper">
      <img v-if="getFileShape()==='multiple_files'" id=test_image :src="getQuestionSrc()">
      <svg v-else v-html="SVGData.question" id=test_image
          viewBox="0,0,800,240">
      </svg>
    </div>
    <div id="answer_space" class="column_6">
      <div id="answers">
        <button @click="submitAnswer(answer)"
        class="answer_button" v-for="answer in answerOrder" :key="answer" :aria-label="answer"
        >
          <img
          v-if="getFileShape()==='multiple_files'"
          class="answer_image"
          :src=getAnswerSrc(answer)
          >
          <svg v-else v-html="SVGData[answer]"
          class="answer_image"
          :viewBox="`${200*['a','b','c','d'].indexOf(answer)},280,200,200`"
          width= 100
          >
          </svg>
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
    <button v-if="questions[currentQuestion].explanation !== undefined"
    @click="toggleExplanation" id="toggle_explanation">
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
