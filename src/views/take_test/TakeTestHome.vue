<script setup>
import { ref } from 'vue';

const emit = defineEmits(['testStarted', 'standardTestStarted']);
const difficulty = ref(1);
const isSpanish = window.navigator.language.startsWith('es');
</script>
<template>
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

#start_button{
  top: 20%;
  width: 70%;
  height: 20%;
  left: 15%;
  font-size: 7vmin;
}

#standard_test_button{
  width: 30%;
  height: 8%;
  top: 60%;
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
