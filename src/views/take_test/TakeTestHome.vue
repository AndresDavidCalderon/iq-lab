<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
  level: Number,
  exp: Number,
});
const emit = defineEmits(['testStarted']);
const difficulty = ref(1);
</script>
<template>
  <button @click="emit('testStarted',difficulty)" class="title" id="start_button">
    Start Test
  </button>
  <p>
    Level:{{ props.level }}
    EXP:{{ props.exp }}/100
  </p>

</template>

<style src="./text.css"></style>

<style scoped>

#start_button{
  position: absolute;
  width: 70%;
  height: 20%;
  top: 20%;
  left: 15%;
  font-size: 7vmin;
}

@media screen and (min-width:2000px) and (max-height:1080px){
  /* to avoid overflow on ultra wide screens */
  #start_button{
    font-size: 4vmin;
  }
}

</style>
