<script setup>
const props = defineProps({
  answers: Array,
  test: Object,
});
</script>
<template>
    <h1>Test completed</h1>
    <p id="result">
        {{
        props.answers.filter((answer,index)=>{
            return test.questions[index].correct===answer
            }).length
        }}
        /
        {{ props.test.questions.length }}
    </p>
</template>

<style scoped>
#result{
    text-align: center;
    width: 40%;
    height: 10%;
    position: absolute;
    top: 40%;
    left:30%;
}
</style>
