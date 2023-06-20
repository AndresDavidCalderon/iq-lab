<script setup>
const props = defineProps({
  answers: Array,
  questions: Array,
});
</script>
<template>
    <h1 class="title">Test completed</h1>
    <p id="result">
        {{
        props.answers.filter((answer)=>answer=="d").length*100/props.questions.length
        }}%
    </p>
</template>

<style scoped src="./text.css"></style>

<style scoped>
.title{
    text-align: center;
}
#result{
    text-align: center;
    width: 40%;
    margin-top: 25vh;
    position: absolute;
    left:30%;
    font-size: 20vmin;
}
</style>
