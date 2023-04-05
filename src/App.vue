<script setup>
    import {reactive, ref} from "vue"
    import Home from "./views/HomePage.vue"
    import TakeTest from "./views/take_test/TakeTest.vue"
    import CreateTest from "./views/create_test/CreateTest.vue"
    const tests=reactive([
        {name:"default",id:0}
    ])
    const current_section=ref("home")
    function set_section(screen){
        current_section.value=screen
    }
</script>
<template>
    <Home v-if="current_section=='home'" :change_section="set_section"></Home>
    <CreateTest v-if="current_section=='create_test'"></CreateTest>
    <TakeTest v-if="current_section=='take_test'" :tests="tests"></TakeTest>
</template>