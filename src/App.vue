<template>
  <v-app>
    <side-bar v-if="showAppBar"/>
    <h1>{{ message }}</h1>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/sideBar/SideBar.vue";
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router';
import {ref} from 'vue';

const {t} = useI18n();
const router = useRouter();
const message = t('welcome');
const showAppBar = ref(true);

router.beforeEach((to, from, next) => {

  if (to.path === '/') {
    showAppBar.value = false;

  } else {
    showAppBar.value = true;
  }
  next();
})
</script>

<style>
/* Add your styles here if needed */
</style>
