<script setup>
const emit = defineEmits(['test_selected']);
const props = defineProps({
  tests: Array,
});
</script>
<template>
    <button class="test_item"
    v-for="test in props.tests"
    :key="test"
    @click="emit('test_selected',test)"
    >
       {{ test }}
    </button>
</template>

<style scoped>
.test_item{
    width: calc(100vw - 20px);
    margin: 10px;
}
</style>
