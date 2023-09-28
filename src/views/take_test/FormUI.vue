<script setup>
import {
  defineProps, reactive, ref, defineEmits, onMounted, computed,
} from 'vue';

const props = defineProps({
  questions: Array,
});

const emit = defineEmits(['testFinished']);
const currentQuestionIndex = ref(0);
const answerHistory = reactive([]);
const verificationModal = ref(false);
const showExplanation = ref(false);
const answerOrder = ref(['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1)));
const SVGData = ref({});
const currentQuestion = computed(() => props.questions[currentQuestionIndex.value]);

const getQuestionFormat = () => {
  const declaredFormat = props.questions[currentQuestionIndex.value].format;
  return declaredFormat === undefined ? 'png' : declaredFormat;
};
const getQuestionDirectory = (questionName) => `/src/assets/test_resources/${questionName}`;
const getSVGGroupInDOM = (document, groupID, questionName) => {
  const group = document.querySelector(`#${groupID}`);
  if (group === null) {
    throw Error(`Couldn't find group ID ${groupID} in question on folder ${questionName}`);
  }
  return `<g>${group.outerHTML}</g>`;
};
const getSVGGroup = async (questionName, groupID) => {
  const parser = new DOMParser();
  const xmlString = await (await (await fetch(`${getQuestionDirectory(questionName)}/drawing.svg`))).text();
  const document = parser.parseFromString(xmlString, 'image/svg+xml');
  if (document.querySelector('parsererror')) {
    throw Error(`Couldnt read XML correctly, this is the document: ${xmlString}`);
  }
  return getSVGGroupInDOM(document, groupID, questionName);
};

const getAnswerSrc = (answer) => `${getQuestionDirectory(currentQuestion.value.name)}/${answer}.${getQuestionFormat()}`;

const getQuestionSrc = () => `${getQuestionDirectory(currentQuestion.value.name)}/question.${getQuestionFormat()}`;

const submitAnswer = (answer) => {
  if (!verificationModal.value) {
    answerHistory.push(answer);
    verificationModal.value = true;
  }
};

const updateSVGData = async () => {
  const questionName = props.questions[currentQuestionIndex.value].name;
  SVGData.value = {
    question: await getSVGGroup(questionName, 'question'),
    a: await getSVGGroup(questionName, 'a'),
    b: await getSVGGroup(questionName, 'b'),
    c: await getSVGGroup(questionName, 'c'),
    d: await getSVGGroup(questionName, 'd'),
  };
};

const getFileShape = () => {
  const { answerShape } = props.questions[currentQuestionIndex.value];
  if (answerShape === undefined) {
    return 'single_file';
  }
  return answerShape;
};

const closeModal = () => {
  verificationModal.value = false;
  showExplanation.value = false;
  if (currentQuestionIndex.value < props.questions.length - 1) {
    currentQuestionIndex.value += 1;
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
  const { explanation } = currentQuestion.value;
  if (Array.isArray(explanation)) {
    if (answerHistory.length > currentQuestionIndex.value) {
      const answerIndex = ['a', 'b', 'c', 'd'].indexOf(answerHistory[currentQuestionIndex.value]);
      return explanation[answerIndex];
    }
    return 'Cant explain yet, the question hasnt been answered';
  }
  return explanation;
};

const getQuestion = () => {
  const questionText = currentQuestion.value.question;
  if (questionText !== undefined) {
    return questionText;
  }
  if (currentQuestion.value.questionType !== undefined) {
    switch (currentQuestion.value.questionType) {
      case 'replace':
        return 'Which option is best suited to replace the question mark?';
      case 'follow_logic':
        return 'Which of the options follows the same logic?';

      default:
        throw Error('Unknown question type');
    }
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
  <h1 class="title">{{ getQuestion() }}</h1>
  <div class="row">
    <div id="test_image_wrapper">
      <img v-if="getFileShape()==='multiple_files'" id=test_image :src="getQuestionSrc()">
      <svg v-else v-html="SVGData.question" id=test_image
          viewBox="0,0,800,240">
      </svg>
    </div>
    <div id="answer_space">
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
      {{ answerHistory[currentQuestionIndex] === "d" ? "Right" : "Wrong" }}
    </h1>
    <p v-if="questions[currentQuestionIndex].explanation !== undefined" id="explanation_in_modal">
      {{ getExplanation() }}
    </p>
    <button @click="closeModal" id="close_verification_modal">Next</button>
    <button v-if="questions[currentQuestionIndex].explanation !== undefined"
    @click="toggleExplanation" id="toggle_explanation">
      {{ showExplanation ? 'Hide explanation' : 'Show explanation' }}
    </button>
    <div v-if="showExplanation" id="explanation">
      {{ getExplanation() }}
    </div>
  </div>
</template>

<style src="./responsive.css"></style>
<style scoped>
*{
  font-size: 20px;
}
.title {
  text-align: center;
  font-size: 4vmax;
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
  bottom: 0px;
  width: 100vw;
  height: 20vh;
  background-color: v-bind("answerHistory[currentQuestionIndex] === 'd' ? 'green' : 'red'");
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
  padding: 40px;
  font-size: v-bind("verificationModal ? '7vmin':(getExplanation().length>20 ? '7vmin':'4vmin')");
  overflow: auto;
  text-align: center;
}

#verification_title {
  height: 30%;
  font-size: 5vmin;
}

#close_verification_modal {
  position: relative;
  height: 20%;
  width: 90%;
  left: 5%;
}

#toggle_explanation {
  position: relative;
  left:10%;
  height: 20%;
  width:80%;
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

@media (min-aspect-ratio:10/9){

  #verification_modal {
    display: block;
    height: 35vh;
    top: 65vh;
    text-align: justify;
  }

  #close_verification_modal {
    position: absolute;
    width: 100px;
    height: 50px;
    bottom: 30px;
    right: 10px;
  }

  #toggle_explanation {
    display: none;
  }

  #explanation_in_modal {
    display: block;
    white-space: pre-line;
  }
}

@media (min-aspect-ratio:16/9) {
  .title {
    font-size: 5vh;
  }

  .answer_image{
    width: 150px;
  }

}
</style>
