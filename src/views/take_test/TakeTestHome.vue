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
  <h1>New version!</h1>
  <div id="main_menu_container">
    <h1 v-if="props.lastAnswers!==undefined" id="test_result">
      {{ result }}%
    </h1>

    <div id="custom">
      <button @click="emit('testStarted')" class="title" id="start_button">
        {{  isSpanish ? 'Empezar prueba personalizada':'Start custom test' }}
      </button>
      <p class="description">
        {{isSpanish ? 'Toma una prueba acorde a tu nivel':'Take a test according to your level'}}
      </p>
    </div>
    <div id="standard">
      <button  @click="emit('standardTestStarted')" class="title" id="standard_test_button">
        {{  isSpanish ? 'Empezar simulacro':'Start standard test'}}
      </button>
      <p class="description">
        {{
          isSpanish ?
          `Toma una simulación de una prueba real, 50 preguntas de todos los niveles, sin decirte
          las respuestas correctas e incorrectas.`:
          `Take a simulation of a real test, 50 questions with random questions from all levels,
          and no feeedback on each question.`
        }}
      </p>
    </div>
  </div>

</template>

<style src="./text.css"></style>

<style scoped>

#main_menu_container{
  display: flex;
  flex-direction: column;
}

#test_result{
  text-align: center;
  width: 100%;
  left: 35%;
  font-size: 20vmin;
}

#custom{
  text-align: center;
  font-size: 7vmin;
}

#start_button{
  width: 80%;
  height: fit-content;
  font-size: 100%;
}

#standard{
  position: relative;
  width: 100%;
  font-size: 5vmin;
}

#standard_test_button{
  position: relative;
  left: 25%;
  font-size: 100%;
  width: 50%;
  text-align: center;
  height: 20%;
}

.description{
  text-align: center;
  font-size: 1em;
}

</style>
