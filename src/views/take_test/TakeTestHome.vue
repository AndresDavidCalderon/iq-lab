<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['testSelected']);
const difficulty = ref(1);
const setDifficulty = (event) => {
  difficulty.value = event.selectedIndex + 1;
};
</script>
<template>
  <button @click="emit('testSelected',difficulty)" class="title" id="start_button">
    Start Test
  </button>
  <select @changed="setDifficulty($event)" v-model="difficulty" required id="difficulty">
    <option value=1>Easy</option>
    <option value=2>Medium</option>
  </select>

</template>

<style src="./text.css"></style>

<style scoped>

#start_button{
  position: absolute;
  width: 70%;
  height: 20%;
  top: 20%;
  left: 15%;
  font-size: 6vw;
}

@media screen and (min-width:2000px) and (max-height:1080px){
  /* to avoid overflow on ultra wide screens */
  #start_button{
    font-size: 4vw;
  }
}

#difficulty{
  position: absolute;
  width: 30%;
  height: 10%;
  left: 35%;
  top: 50%;
  font-size: 4vw;
}

</style>
