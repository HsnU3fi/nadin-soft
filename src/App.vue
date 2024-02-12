<template>
  <v-app  :theme="theme">
    <side-bar v-if="showAppBar"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/sideBar/SideBar.vue";
import {useProfileStore} from "./stores/profile";
const profileStore = useProfileStore();
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router';
import {ref} from 'vue';
const {t} = useI18n();
const router = useRouter();
const message = t('welcome');
const theme = ref('light');
const showAppBar = ref(true);
const getTheme=JSON.parse(profileStore.getItems())
theme.value=getTheme[0].theme

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
</style>
