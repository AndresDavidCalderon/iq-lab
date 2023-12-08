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
  <button @click="emit('testStarted')" class="title" id="start_button">
    {{  isSpanish ? 'Empezar prueba personalizada':'Start custom test' }}
  </button>
  <button  @click="emit('standardTestStarted')" class="title" id="standard_test_button">
    {{  isSpanish ? 'Empezar simulacro':'Start standard test'}}
  </button>

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

#start_button{
  top: v-bind("lastAnswers===undefined ? '30%':'50%'");
  width: 70%;
  height: 20%;
  left: 15%;
  font-size: 7vmin;
}

#standard_test_button{
  width: 30%;
  height: 8%;
  top: v-bind("lastAnswers===undefined ? '60%':'80%'");
  left: 35%;
  font-size: 5vmin;
}

@media screen and (min-width:2000px) and (max-height:1080px){
  /* to avoid overflow on ultra wide screens */
  #start_button{
    font-size: 4vmin;
  }
}

</style>
