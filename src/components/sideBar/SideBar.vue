<template>

  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      elevation="10"
      @click="rail = false"
  >
    <v-btn


        elevation="10"
        top
        height="28"
        width="28"
        color="#494B50"
        fab
        @click="rail = !rail"
        :style="{ top: '30px', transform: 'translate(95%, -50%)' }"
    >
      <v-icon size="25" color="#FFF">{{
          mini ? "mdi-chevron-right" : "mdi-chevron-left"
        }}
      </v-icon>
    </v-btn>
    <v-list-item>
      <template v-slot:append>
        <v-btn
            style="position: absolute;z-index: 2"
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

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
};">{{ t('sidebar.todo') }}</h1>
      </v-list-item>
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