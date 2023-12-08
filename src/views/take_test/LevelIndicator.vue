<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  level: Number,
  exp: Number,
  adwardedExp: Number,
  levelUp: Boolean,
});

const language = window.navigator.language.slice(0, 1);
</script>

<template>
  <p>
    level: {{props.level }}
    exp:{{ props.exp }}/100
    <br>
    {{ language!=='es' ?
    (adwardedExp===0 ? '':`You gained ${adwardedExp} experience`):
    (adwardedExp===0 ? '':`Ganaste ${adwardedExp} de experiencia`)
     }}
    <br>
    {{props.levelUp ?
    (language!=='es' ?
     'You leveled up, now you will be getting more advanced questions.':
    'Subiste de nivel, recibirás preguntas mas dificiles.'
    ):
    ''
     }}
  </p>
</template>
