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
      <v-list-item href="/dashboard" prepend-icon="mdi-view-dashboard" value="dashboard">
        <h1 style="font-size:18px">{{ t('sidebar.dashboard') }}</h1>
      </v-list-item>
      <v-list-item href="/weather" prepend-icon="mdi-weather-snowy-rainy" value="weather">
        <h1 style="font-size:18px">{{ t('sidebar.weather') }}</h1>
      </v-list-item>
      <v-list-item href="/todo" prepend-icon="mdi-book-open-page-variant" value="todo">
        <h1 style="font-size:18px">{{ t('sidebar.todo') }}</h1>
      </v-list-item>
      <v-list-item href="/profile" prepend-icon="mdi-face" value="profile">
        <h1 style="font-size:18px">{{ t('sidebar.profile') }}</h1>
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