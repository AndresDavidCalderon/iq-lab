<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  level: Number,
  exp: Number,
});
</script>

<template>
  <p>
    level: {{props.level }}
    exp:{{ props.exp }}/100
  </p>
</template>
