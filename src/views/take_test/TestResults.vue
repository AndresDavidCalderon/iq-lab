<script setup>
const props = defineProps({
  answers: Array,
  questions: Array,
});

const emit = defineEmits(['testAgain']);

</script>
<template>
    <h1 class="title">Test completed</h1>
    <p id="result">
        {{
        Math.round(props.answers.filter((answer)=>answer=="d").length*100/props.questions.length)
        }}%
    </p>
    <button @click="emit('testAgain')" id="test_again">Do another test</button>
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

#test_again{
    position: absolute;
    width: 40vw;
    height: 10vh;
    top: 70vh;
    left: 30vw;
    font-size: 2vw;
}

</style>
