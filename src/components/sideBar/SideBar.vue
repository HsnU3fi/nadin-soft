<template>

  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      elevation="10"
      app
      @click="rail = false"
  >
    <v-btn
        fixed
        right
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
      <v-list-item prepend-icon="mdi-home-city" :title="t('sidebar.dashboard')" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" :title="t('sidebar.weather')" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" :title="todo" value="users"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" :title="profile" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!--      <v-main style="height: 250px"></v-main>-->

</template>

<script setup >
import {ref} from "vue";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const drawer = ref(true)
const rial = ref(true)
// const dashboard = t('sidebar.dashboard')
const weather = t('sidebar.weather')
const profile = t('sidebar.profile')
const todo= t('sidebar.todo')

</script>