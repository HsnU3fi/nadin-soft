<template>
  <v-app-bar height="80" :elevation="2">
    <v-app-bar-nav-icon v-if="dir === 'ltr'" size="50" variant="text"
                        @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-row justify="center">
      <img class="img-size" src="../../assets/img/logo-nodin.png">
    </v-row>
    <v-app-bar-nav-icon v-if="dir==='rtl'" size="50" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      :location="location"
      :rail="rail"
      elevation="10"
      @click="rail = false"
  >


    <v-divider></v-divider>

      <v-list nav>

        <v-list-item
            class="SelectedTile"
            :dir="dir" height="50" href="/dashboard" value="dashboard">
          <img

              src="../../assets/img/dashboard-icon.png"
              alt="Dashboard Icon"
              width="35"
              height="35"
          >
          <h1 dir="ltr" class="list-item">
            {{ t('sidebar.dashboard') }}
          </h1>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="SelectedTile"
                     :dir="dir" href="/weather" value="weather">
          <img
              src="../../assets/img/weather-icon.png"
              alt="Dashboard Icon"
              width="55"
              height="40"
              style="margin-left: -8px"
          >
          <h1 dir="ltr" class="list-item">
            {{ t('sidebar.weather') }}</h1>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="SelectedTile"
                     :dir="dir" href="/todo" value="todo">
          <img
              src="../../assets/img/todo-icon.png"
              alt="Dashboard Icon"
              width="40"
              height="40"
          >
          <h1 dir="ltr" class="list-item">
            {{ t('sidebar.todo') }}</h1>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="SelectedTile"
                     :dir="dir" href="/profile" value="profile">
          <img
              src="../../assets/img/profile-icon.png"
              alt="Dashboard Icon"
              width="35"
              height="35"
          >
          <h1 dir="ltr" class="list-item">
            {{ t('sidebar.profile') }}</h1>
        </v-list-item>

      </v-list>


    <v-divider></v-divider>
  </v-navigation-drawer>

</template>

<script setup>
import {ref} from "vue";
import {useI18n} from 'vue-i18n'
import {useProfileStore} from "../../stores/profile";

const selectItem = ref(1);
const {t} = useI18n()
const drawer = ref(true)
const rial = ref(true)
const profileStore = useProfileStore();
const dir = ref('ltr')
const location = ref('left')
const getDir = async () => {
  dir.value = await profileStore.Rtl()
  if (dir.value === 'rtl') {
    location.value = 'right'
  } else {
    location.value = 'left'
  }
}
getDir();

</script>
<style lang="scss">
.img-size {
  width: 100px
}

.list-item {
  font-size: 18px;
  margin-left: 50px;
  margin-top: -35px;
}

.SelectedTile:hover {
  border-radius: 4px;
  background-color: #4ED1F1;
}

.bgsidebar {
  background-color: #55BE4C;
}
</style>