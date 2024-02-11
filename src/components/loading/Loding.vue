<template>
  <div>
    <v-overlay opacity="0.7" :value="value">
      <v-col align="center">
        <img width="280" src="../../assets/img/logo.png" alt=""/>
        <div class="loader"></div>
      </v-col>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: Boolean, default: false},

  },
  name: "Loding"
}
</script>

<style scoped>
.loader {


  width: 100px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background:#55BE4C;
  background-size: 100% 50%;
  animation:
      back 4s infinite steps(1),
      load 2s infinite;
}

@keyframes load {
  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}
@keyframes back {
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}



body {
  margin:0;
  min-height:30vh;
  display:grid;
  place-content:center;
}
</style>