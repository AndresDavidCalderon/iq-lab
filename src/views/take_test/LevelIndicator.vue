<script setup>
import { defineProps } from 'vue';
import 'vue3-circle-progress/dist/circle-progress.css';
import CircleProgress from 'vue3-circle-progress';

const props = defineProps({
  level: Number,
  exp: Number,
  levelUp: Boolean,
  themeColor: String,
});

const language = window.navigator.language.slice(0, 1);
</script>

<template>
  <div id="container">
    <div id="basic_info">
      <CircleProgress :percent=props.exp :fill-color="themeColor" :size=70>
      </CircleProgress>
      <h2 id="level_number">
        {{language==='es '? 'Nivel':'Level' }} {{ props.level }}/4
      </h2>
    </div>
    <br>
    {{props.levelUp ?
    (language==='es' ?
     'You leveled up, now you will be getting more advanced questions.':
    'Subiste de nivel, recibirás preguntas mas dificiles.'
    ):
    ''
     }}
  </div>
</template>

<style scoped>
#container{
  width: 100%;
  left: 0;
  bottom: 1vmin;
  text-align: center;
}

#basic_info{
  display: flex;
  justify-content: center;
  align-items: center;
}

#level_number{
  font-size: 4vmin;
  padding-left: 10px;
}

</style>
