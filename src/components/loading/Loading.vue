<template>
  <v-overlay  v-model="value" class="align-center justify-center" contained>
    <img class="img" src="../../assets/img/logo-nodin.png">
    <v-row justify="center" align="center">
      <div class="loader"></div>
    </v-row>
  </v-overlay>
</template>

<script >
//======================================================================================================================
import {defineComponent} from 'vue';
export default defineComponent({
  props: {
    value: {type: Boolean, default: false},
  },
  name: "Loading"
});
</script>

<style lang="scss">
.loader {
  width: 100px;
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%, #0000 71%);
  -webkit-mask: var(--_g), var(--_g), var(--_g);
  -webkit-mask-size: 25% 40%;
  background: #4ED1F1;
  background-size: 100% 50%;
  animation: back 4s infinite steps(1), load 2s infinite;
}

@keyframes load {
  0% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%;
  }
  16.67% {
    -webkit-mask-position: 0% 100%, 50% 0%, 100% 0%;
  }
  33.33% {
    -webkit-mask-position: 0% 100%, 50% 100%, 100% 0%;
  }
  50% {
    -webkit-mask-position: 0% 100%, 50% 100%, 100% 100%;
  }
  66.67% {
    -webkit-mask-position: 0% 0%, 50% 100%, 100% 100%;
  }
  83.33% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 100%;
  }
  100% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%;
  }
}

@keyframes back {
  0%, 100% {
    background-position: 0% 0%, 0% 100%;
  }
  25% {
    background-position: 100% 0%, 0% 100%;
  }
  50% {
    background-position: 100% 0%, 100% 100%;
  }
  75% {
    background-position: 0% 0%, 100% 100%;
  }
}
.img{
  width: 150px;margin-bottom: 50px
}
body {
  margin: 0;
}
</style>
