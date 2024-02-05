<script setup>
const emit = defineEmits(['exitIntro']);
const isSpanish = window.navigator.language.startsWith('es');

</script>
<template>
  <div id="level_intro">
    <h1 id="level_title">
      {{ isSpanish ?
       'Ese es tu nivel' :
      'That above is your level' }}
    </h1>
    <p id="level_description">
      {{ isSpanish ?
       'Mientras mas alto el nivel, mas dificiles las preguntas.' :
      'The higher the level the harder the questions' }}
      <br>
      {{ isSpanish ?
       'Para subir de nivel, responde preguntas correctamente.' :
      'To level up, answer questions correctly' }}
    </p>
    <button @click="emit('exitIntro')" id="exit_intro" class="title styled_button">
      {{ isSpanish ?
       'Listo' :
      'Next' }}
    </button>
  </div>
</template>

<style src="./take_test/text.css"></style>
<style scoped>
#level_intro{
  text-align: center;
  position: absolute;
  width: 90vw;
  left: 5%;
}
#level_title{
  font-size: 10vmin;
}
#level_description{
  font-size: 7vmin;
}
#exit_intro{
  width: 40%;
  font-size: 7vmin;
}

</style>
