<script setup>
const props = defineProps({
  total: Number,
  progress: Number,
});
</script>

<template>
  <div id="bar">
    <div id="progress">
    </div>
    <p id="progress_in_text">
      {{ `${props.progress}/${props.total}` }}
    </p>
  </div>
</template>

<style>
#bar{
  position: absolute;
  top: 1vmin;
  width: 80vw;
  left: 5vw;
  height: 3vmin;
  background-color: gray;
}
#progress{
  width: v-bind('`${(props.progress/props.total)*100}%`');
  height: 100%;
  background-color: #97DB45;
}
#progress_in_text{
  position: absolute;
  width: 10vw;
  right: -13vw;
  top:-20px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  font-size: 5vmin;
}

@media only screen and (min-aspect-ratio:9/16){
  #progress_in_text{
    font-size: 3vmin;
    right: -8vw;
    top:-75%;
  }
}

</style>
