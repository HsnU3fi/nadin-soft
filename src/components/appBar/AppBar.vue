<template>
  <div>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <img  style="width: 50px" src="../../assets/img/logo-nodin.png">
      </template>

      <v-app-bar-title>
        <h1 style="font-size: 20px">Nodin Soft</h1>
      </v-app-bar-title>
    </v-app-bar>
    <side-bar/>
  </div>
</template>
<script>

import SideBar from "../sideBar/SideBar.vue";

export default {
  components: {SideBar}
}

</script>