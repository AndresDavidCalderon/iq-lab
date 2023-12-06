<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  level: Number,
  exp: Number,
  adwardedExp: Number,
  levelUp: Boolean,
});
</script>

<template>
  <p>
    level: {{props.level }}
    exp:{{ props.exp }}/100

    {{ adwardedExp===0 ? '':`You gained ${adwardedExp} experience!` }}
    {{ props.levelUp ? 'You leveled up! now you will be getting more advanced questions.':'' }}
  </p>
</template>
