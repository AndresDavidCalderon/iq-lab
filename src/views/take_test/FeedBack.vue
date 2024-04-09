<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closed']);
const props = defineProps({
  lastAnswer: String,
  explanation: String,
  themeColor: String,
});

const showExplanation = ref(false);
const isSpanish = window.navigator.language.startsWith('es');

const toggleExplanation = () => {
  showExplanation.value = !showExplanation.value;
};
</script>

<template>
  <div id="verification_modal">
    <div id="verification_column_container">
      <h1 id="verification_title">
        {{
          lastAnswer === "d" ?
          (isSpanish ? "Correcto" : "Right"):
          (isSpanish ? "Incorrecto" : "Wrong")
        }}
      </h1>
      <p v-if="props.explanation!==''" id="explanation_in_modal">
        {{ props.explanation }}
      </p>
    </div>
    <button @click="emit('closed')" id="close_verification_modal">
      {{isSpanish ? 'Siguiente':'Next'}}
    </button>
    <button v-if="props.explanation!==''"
        @click="toggleExplanation" id="toggle_explanation">
        {{
        showExplanation ?
        (isSpanish ? 'Ocultar explicación':'Hide explanation') :
        (isSpanish ? 'Mostrar explicación':'Show explanation')
        }}
    </button>
    <div v-if="showExplanation" id="explanation">
      {{ props.explanation }}
    </div>
  </div>
</template>

<style>

#explanation_in_modal {
  display: none;
}

#verification_modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  background-color: v-bind("props.lastAnswer==='d' ? themeColor:'red'");
  color: white;
  padding: 10px;
  font-size: 3vmin;
  text-align: center;
  gap: 1vh;
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
  top: 20vh;
  height: 50vh;
  width: 100vw;
  background-color: inherit;
  white-space: pre-line;
  padding: 40px;
  font-size: v-bind("`${Math.max(Math.min(800/explanation.length,10),6)}vmin`");
  overflow: auto;
  text-align: center;
}

#verification_title {
  height: 3vh;
  font-size: 5vmin;
  color: black;
}

#close_verification_modal {
  position: relative;
  height: 4vh;
  width: 90%;
  left: 5%;
  box-shadow: 5px 5px 5px #1C1D1D;
}

#toggle_explanation {
  position: relative;
  left:10%;
  height: 3vh;
  width:80%;
  box-shadow: 5px 5px 5px #1C1D1D;
}

@media (min-aspect-ratio:10/9){

#verification_title{
  height: auto;
  margin: 4px;
}

#verification_column_container{
  display: flex;
  flex-direction: column;
}

#verification_modal {
  display: flex;
  flex-direction: row;
  bottom:0;
  text-align: justify;
  height: auto;
  justify-content: space-between;
  align-items: end;
}

#close_verification_modal {
  display: block;
  width: 100px;
  height: 50px;
  left: 0;
}

#toggle_explanation {
  display: none;
}

#explanation_in_modal {
  display: block;
  white-space: pre-line;
  overflow: v-bind("explanation.length>200 ? 'auto' : 'visible'");
  height: v-bind("explanation.length>200 ? 'auto':'40%'");
  font-size: v-bind("explanation.includes('\n') ? '1.5vmax':'2vmax'");
}
}

</style>
