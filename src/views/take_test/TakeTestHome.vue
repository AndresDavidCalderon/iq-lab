<script setup>
import { computed } from 'vue';

const emit = defineEmits(['testStarted', 'standardTestStarted', 'aboutSelected']);
const props = defineProps({
  lastAnswers: Array,
  themeColor: String,
  selectedColor: String,
});
const result = computed(() => (props.lastAnswers === undefined ? 0 : Math.round((props.lastAnswers.filter((answer) => answer === 'd').length / props.lastAnswers.length) * 100)));
const isSpanish = window.navigator.language.startsWith('es');
</script>
<template>
  <div id="main_menu_container">
    <h1 v-if="props.lastAnswers!==undefined" id="test_result">
      <h2 id="result_title">{{isSpanish ? 'Tu resultado fue:' : 'Your result is:'}}</h2>
      {{ result }}%
    </h1>

    <div id="custom">
      <p class="description">
        {{isSpanish ? 'Toma una prueba acorde a tu nivel':'Take a test according to your level'}}
      </p>
      <button @click="emit('testStarted')" class="title styled_button" id="start_custom_button">
        {{  isSpanish ? 'Empezar prueba personalizada':'Start custom test' }}
      </button>
    </div>
    <div id="standard">
      <p class="description">
        {{
          isSpanish ?
          `Toma una simulación de una prueba real, 50 preguntas de todos los niveles, sin decirte
          las respuestas correctas e incorrectas.`:
          `Take a simulation of a real test, 50 questions with random questions from all levels,
          and no feeedback on each question.`
        }}
      </p>
      <button  @click="emit('standardTestStarted')"
      class="title styled_button"
      id="standard_test_button">
        {{  isSpanish ? 'Empezar simulacro':'Start standard test'}}
      </button>
    </div>
    <button class="styled_button" id="info_button" @click="emit('aboutSelected')">
      {{isSpanish ? 'Acerca de IQ lab':'About IQ lab'}}
    </button>
  </div>

</template>

<style src="./text.css"></style>

<style scoped>

#main_menu_container{
  display: flex;
  flex-direction: column;
}

#result_title{
  font-size: 5vmin;
}

#test_result{
  text-align: center;
  width: 100%;
  font-size: 20vmin;
  margin: 5px;
}

#custom{
  text-align: center;
  font-size: 7vmin;
}

#start_custom_button{
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

#info_button{
  position: absolute;
  right: 2%;
  bottom:2%;
}

</style>
