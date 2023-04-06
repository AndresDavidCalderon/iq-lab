<script setup>
const props = defineProps({
  setSection: Function,
});
function selectTake() {
  props.setSection('take_test');
}
function selectMake() {
  props.setSection('create_test');
}
</script>

<template>
  <button id="start" @click="selectTake"> Start a test</button>
  <button id="make" @click="selectMake"> Make a test</button>
</template>

<style scoped>
#start{
  position: absolute;
  width: 50vw;
  height: 100%;
}
#make{
  position: absolute;
  width: 50vw;
  left: 50%;
  height: 100%;
}
</style>
