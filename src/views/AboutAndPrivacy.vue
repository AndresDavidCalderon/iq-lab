<script setup>
const emit = defineEmits(['backPressed']);
const isSpanish = window.navigator.language.startsWith('es');
</script>

<template>
  <h1 class="title">
    {{isSpanish ?
    'Acerca de IQ lab':
    'About IQ lab'
    }}
  </h1>
  <div id="about_buttons">
    <h2>
      {{ isSpanish?
      `IQ lab fue hecho con amor por Andres David Calderon, y posible gracias a
      proyectos de codigo abirto como vue.js` :
      `
      IQ lab was made with love by Andres David Calderon,
      and made possible thanks to open source projects like vue.js.

      It's provided for free, and without any warranty.
      `
      }}
    </h2>
    <button class="title about_button styled_button">
      {{isSpanish ? 'Politica de privacidad':'Privacy policy'}}
    </button>
  </div>
  <button
    @click="emit('backPressed')"
    id="home_button"
    class="styled_button"
  >
  </button>
</template>

<style>
#about_buttons{
  position: absolute;
  left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.about_button{
  margin-top: 2%;
  height: 10vh;
  font-size: 5vmin;
}

</style>
