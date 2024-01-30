<script setup>
import {
  reactive, ref, onMounted, computed,
} from 'vue';

import FeedBack from './FeedBack.vue';
import ProgressBar from './ProgressBar.vue';

const props = defineProps({
  questions: Array,
  testType: String,
  themeColor: String,
});

const emit = defineEmits(['testFinished', 'testCanceled']);
const currentQuestionIndex = ref(0);
const answerHistory = reactive([]);
const verificationModal = ref(false);
const showExplanation = ref(false);
const answerOrder = ref(['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1)));
const SVGData = ref({});
const currentQuestion = computed(() => {
  const originalTest = props.questions[currentQuestionIndex.value];
  const newTest = {};
  // We loop through all of the properties of the question,
  // and if there is a spanish alternative, and we are in spanish, then replace it with it.
  Object.keys(originalTest).forEach((element) => {
    if (originalTest[`${element}_ES`] !== undefined && window.navigator.language.startsWith('es')) {
      newTest[element] = originalTest[`${element}_ES`];
    } else {
      newTest[element] = originalTest[element];
    }
  });
  return newTest;
});
const fontSize = computed(() => (currentQuestion.value.statement !== undefined ? `${Math.max(Math.min(1300 / currentQuestion.value.statement.length, 10), 2)}vmin` : 0));

const getQuestionFormat = () => {
  const declaredFormat = currentQuestion.value.format;
  return declaredFormat === undefined ? 'png' : declaredFormat;
};

const getQuestionDirectory = (questionName) => `test_resources/${questionName}`;

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
const showNextQuestion = () => {
  if (currentQuestionIndex.value < props.questions.length - 1) {
    currentQuestionIndex.value += 1;
    answerOrder.value = ['a', 'b', 'c', 'd'].sort(() => ((Math.random() > 0.5) ? -1 : 1));
    if (getFileShape() === 'single_file' && currentQuestion.value.questionType !== 'text') {
      updateSVGData();
    }
  } else {
    emit('testFinished', answerHistory);
  }
};

const submitAnswer = (answer) => {
  answerHistory.push(answer);
  if (props.testType === 'standard') {
    showNextQuestion();
  } else if (!verificationModal.value) {
    verificationModal.value = true;
  }
};

const closeModal = () => {
  verificationModal.value = false;
  showExplanation.value = false;
  showNextQuestion();
};

const getExplanation = () => {
  const { explanation } = currentQuestion.value;
  if (explanation === undefined) {
    return '';
  }
  if (Array.isArray(explanation)) {
    if (answerHistory.length > currentQuestionIndex.value) {
      const answerIndex = ['a', 'b', 'c', 'd'].indexOf(answerHistory[currentQuestionIndex.value]);
      return explanation[answerIndex];
    }
    return 'Cant explain yet, the question hasnt been answered';
  }
  return explanation;
};

const questionTypes = {
  replace: 'Which option is best suited to replace the question mark?',
  follow_logic: 'Which of the options follows the same logic?',
  image_piece: 'The next image had a piece taken out, which option would replace it?',
  text: 'According to the following statement, select one of the options.',
  cube: 'Which option represents a posible result from folding the following figure into a cube? Take into account possible rotations',
};
const questionTypesES = {
  replace: '¿Que opción reemplaza mejor el signo de interrogación?',
  follow_logic: '¿Cual de las opciones siguie la misma logica?',
  image_piece: 'A la siguiente imagen se le sacó un pedazo, ¿Que opción lo reemplaza?',
  text: 'Lea el siguiente enunciado y seleccione una opción.',
  cube: 'Que opción representa un posible resultado de doblar la siguiente figura para formar un cubo? Toma en cuenta que puede ser rotado.',
};

const getQuestion = () => {
  const questionText = currentQuestion.value.question;
  if (questionText !== undefined) {
    return questionText;
  }
  const isSpanish = window.navigator.language.startsWith('es');
  if (currentQuestion.value.questionType !== undefined) {
    const diccionary = isSpanish ? questionTypesES : questionTypes;
    if (diccionary[currentQuestion.value.questionType] !== undefined) {
      return diccionary[currentQuestion.value.questionType];
    }
    return 'Unknown question type';
  }
  return isSpanish ? '¿Que opción sigue en esta secuencia?' : 'Which option logically follows this sequence?';
};

onMounted(() => {
  const questionFormat = getFileShape();
  if (questionFormat === 'single_file' && currentQuestion.value.questionType !== 'text') {
    updateSVGData();
  }
});

</script>

<template>
  <ProgressBar
    :total="props.questions.length"
    :progress="answerHistory.length"
    :themeColor="themeColor">
  </ProgressBar>
  <h1 class="title">{{ getQuestion() }}</h1>
  <div class="row">
    <p id='statement' v-if="currentQuestion.questionType==='text'">
      {{currentQuestion.statement}}
    </p>
    <div id="test_image_wrapper" v-if="currentQuestion.name!==undefined">
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
          v-if="getFileShape()==='multiple_files' && !Array.isArray(currentQuestion.answers)"
          class="answer_image"
          :src=getAnswerSrc(answer)
          >
          <svg v-else-if="!Array.isArray(currentQuestion.answers)" v-html="SVGData[answer]"
          class="answer_image"
          :viewBox="`${200*['a','b','c','d'].indexOf(answer)},280,200,200`"
          width= 100
          >
          </svg>
          {{ Array.isArray(currentQuestion.answers) ?
           currentQuestion.answers[['a','b','c','d'].indexOf(answer)]
           : '' }}
        </button>
      </div>
    </div>
    <FeedBack
     v-if="verificationModal"
     @closed="closeModal"
     :last-answer="answerHistory[currentQuestionIndex]"
     :explanation="getExplanation()"
     :themeColor="themeColor"
     ></FeedBack>
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

#statement{
  font-size: v-bind('fontSize');

  position: relative;
  width: 90vw;
  max-height: 80vh;
  left: 5vw;

  overflow: auto;
  text-align: justify;
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
  width: v-bind("verificationModal ? '100px' : '150px'");
  height: auto;
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

/*Screen size overrides*/

@media(min-aspect-ratio:12/16){
.answer_image {
  width: v-bind("verificationModal ? '8vw' : '15vw'");
}
}
@media(max-aspect-ratio:9/16){
.answer_image {
  width: 30vw;
}
}
</style>
