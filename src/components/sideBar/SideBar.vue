<template>
  <v-app-bar height="80" :elevation="2">

    <template v-slot:prepend>
      <v-app-bar-nav-icon size="50" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-row justify="center">
      <img  style="width: 250px;" src="../../assets/img/nodin.png">

    </v-row>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      elevation="10"
      @click="rail = false"
  >

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item height="50" href="/dashboard" value="dashboard">
          <img
              src="../../assets/img/dashboard-icon.png"
              alt="Dashboard Icon"
              width="35"
              height="35"
          >
          <h1 style="    font-size: 18px;
    margin-left: 50px;
    margin-top: -35px;
};">
            {{ t('sidebar.dashboard') }}
          </h1>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item href="/weather"  value="weather">
        <img
            src="../../assets/img/weather-icon.png"
            alt="Dashboard Icon"
            width="55"
            height="40"
            style="margin-left: -8px"
        >
        <h1 style="    font-size: 18px;
    margin-left: 50px;
    margin-top: -35px;
};">{{ t('sidebar.weather') }}</h1>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item href="/todo" value="todo">
        <img
            src="../../assets/img/todo-icon.png"
            alt="Dashboard Icon"
            width="40"
            height="40"

        >
        <h1 style="    font-size: 18px;
    margin-left: 50px;
    margin-top: -35px;
};">
          {{ t('sidebar.todo') }}</h1>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item href="/profile"  value="profile">
        <img
            src="../../assets/img/profile-icon.png"
            alt="Dashboard Icon"
            width="35"
            height="35"

        >
        <h1 style="    font-size: 18px;
    margin-left: 50px;
    margin-top: -35px;
};">{{ t('sidebar.profile') }}</h1>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

  </v-navigation-drawer>
  <!--      <v-main style="height: 250px"></v-main>-->

</template>

<script setup>
import {ref} from "vue";
import {useI18n} from 'vue-i18n'

const {t} = useI18n()

const drawer = ref(true)
const rial = ref(true)


</script>