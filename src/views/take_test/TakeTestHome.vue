<script setup>
import { computed } from 'vue';

const emit = defineEmits(['testStarted', 'standardTestStarted']);
const props = defineProps({
  lastAnswers: Array,
});
const result = computed(() => (props.lastAnswers === undefined ? 0 : Math.round((props.lastAnswers.filter((answer) => answer === 'd').length / props.lastAnswers.length) * 100)));
const isSpanish = window.navigator.language.startsWith('es');
</script>
<template>
  <h1 v-if="props.lastAnswers!==undefined" id="test_result">
    {{ result }}
  </h1>
  <div id="custom">
    <button @click="emit('testStarted')" class="title" id="start_button">
      {{  isSpanish ? 'Empezar prueba personalizada':'Start custom test' }}
    </button>
    <p class="description">
      Take a test according to your level
    </p>
  </div>
  <div id="standard">
    <button  @click="emit('standardTestStarted')" class="title" id="standard_test_button">
      {{  isSpanish ? 'Empezar simulacro':'Start standard test'}}
    </button>
    <p class="description">
      Take a simulation of a real test, 50 questions with random questions from all levels,
      and no feeedback on each question.
    </p>
  </div>

</template>

<style src="./text.css"></style>

<style scoped>

button{
  position: absolute;
}

#test_result{
  position: absolute;
  text-align: center;
  width: 30%;
  left: 35%;
  font-size: 20vmin;
}

#custom{
  text-align: center;
  position: absolute;
  top: v-bind("lastAnswers===undefined ? '20vh':'40vh'");
  width: 70vw;
  height: 30vh;
  left: 15%;
  font-size: 7vmin;
}

#start_button{
  position: static;
  width: 100%;
  height: fit-content;
  font-size: 100%;
}

#standard{
  position: absolute;
  width: 80vw;
  height: v-bind("lastAnswers===undefined ? '40vh':'30vh'");
  top: v-bind("lastAnswers===undefined ? '60vh':'70vh'");
  left: 10vw;
  font-size: 5vmin;
}

#standard_test_button{
  position: relative;
  font-size: 100%;
  left: 15%;
  width: 70%;
  height: 20%;
}

.description{
  text-align: center;
  font-size: 80%;
}

@media screen and (min-width:2000px) and (max-height:1080px){
  /* to avoid overflow on ultra wide screens */
  #start_button{
    font-size: 4vmin;
  }
}

</style>
