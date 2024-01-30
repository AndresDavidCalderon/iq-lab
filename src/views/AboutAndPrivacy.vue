<script setup>
import { ref } from 'vue';

const emit = defineEmits(['backPressed']);
const isSpanish = window.navigator.language.startsWith('es');
const showingPolicy = ref(false);

const showPolicy = () => {
  showingPolicy.value = true;
};

const goBack = () => {
  if (showingPolicy.value) {
    showingPolicy.value = false;
  } else {
    emit('backPressed');
  }
};

</script>

<template>
  <h1 v-if="!showingPolicy" class="title">
    {{ isSpanish ?
      'Acerca de IQ lab' :
      'About IQ lab'
    }}
  </h1>
  <div v-if="!showingPolicy" id="about_buttons">
    <h2>
      {{ isSpanish ?
        `IQ lab fue hecho con amor por Andres David Calderon, y posible gracias a
      proyectos de codigo abirto como vue.js` :
        `
      IQ lab was made with love by Andres David Calderon,
      and made possible thanks to open source projects like vue.js.

      It's provided for free, and without any warranty.
      `
      }}
    </h2>
    <button class="title about_button styled_button" @click='showPolicy'>
      {{ isSpanish ? 'Politica de privacidad' : 'Privacy policy' }}
    </button>
  </div>
  <div v-if="showingPolicy" id="privacy_policy_text">
    <h1 id="page_title" style="text-align: center;">IQ lab privacy policy</h1>
    <h2>Sumamary</h2>
    <p>
      The app this applies to is IQ lab,
      (unique code io.andresdavidcalderon.github.iq), "The app" from now on.
      <br>
      Andres David Calderon, identified in the play store as Andres David,
       is the developer of the app, and does not
      recieve data other than the one collected by google play.
      <br>
      Github is the company behind github pages, the hosting service
      used to share the files the app needs.
      Your device contacts github every time you interact with the app
      and you have an internet connection,
      and your IP is logged and stored for security purposes, the only
      entity who can access this data is
      github and who they may decide to share it with, the developer does not have access to it.

    </p>
    <h2>Data collected by google play</h2>
    When you download the app from the play store, the fact that you downloaded the app and
    information about your device, including:
    <ul>
      <li>
        Android version
      </li>
      <li>
        Amount of RAM
      </li>
      <li>
        CPU
      </li>
      <li>
        GPU
      </li>
      <li>
        Highest version supported for OpenGL ES and Vulkan
      </li>
      <li>
        ABI
      </li>
      <li>
        form factor
      </li>
      <li>
        Screen size and density
      </li>
    </ul>
    While the developer recieves this data, the entity that collects it
    is the one managing the store front. As such, if you want to manage it,
    you will have to use google's tools.
    This data is collected to allow the developer to improve the app and fix errors within it.
    <h2>Data collected by the app</h2>
    <p>
      The app stores 2 types of data:
    <ul>
      <li>
        Cache:
        When your device gets the resources needed to use the app
        (by contacting github) it creates a copy
        of those resources and stores them in your device, enabling offline usage.
      </li>
      <li>
        Progress:
        The app stores your current level (displayed at the top of the screen when starting the app)
        and the amount of experience you have
        (displayed as the fill part of the circle at the top of the screen
        when starting the app). The app stores this to enable saving your progress.
      </li>
    </ul>
    </p>
    <h2> Data collected by github. </h2>
    When you use the app with an internet connection, it contacts github, github then
    logs and stores your public IP
    address
    for security purposes. The developer does not have access to this data.
    You can see <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"> the privacy
      statement of github</a>
    by clicking the link, and/or contact them on <a href="https://support.github.com/">their support page</a> if you want
    to manage your data.

    The app contacts github to get the resources it needs to function,
    such as code, images and fonts.
    <h2>Contact</h2>
    If you have any inquiries or questions, you can contact the developer on the email:
    <br>
    andresdavidcalderonjimenez@gmail.com

  </div>
  <button @click="goBack" id="home_button" class="styled_button">
  </button>
</template>

<style>
#about_buttons {
  position: absolute;
  left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.about_button {
  margin-top: 2%;
  height: 10vh;
  font-size: 5vmin;
}
</style>
