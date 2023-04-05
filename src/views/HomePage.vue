<script setup>
  const props=defineProps({
    set_section:Function
  })
  function select_take(){
    props.set_section("take_test")
  }
  function select_make(){
    props.set_section("create_test")
  }
</script>

<template>
  <button id="start" @click="select_take"> Start a test</button>
  <button id="make" @click="select_make"> Make a test</button>
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