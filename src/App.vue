<template>
  <v-app :theme="theme">
    <side-bar v-if="showAppBar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/sideBar/SideBar.vue";
import { useProfileStore } from "./stores/profile";
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const profileStore = useProfileStore();
const { t } = useI18n();
const router = useRouter();
const theme = ref('light');
const showAppBar = ref(true);

const storedTheme = profileStore.getItems();
if (storedTheme) {
  try {
    const parsedTheme = JSON.parse(storedTheme);
    theme.value = parsedTheme[0]?.theme || 'light';
  } catch (error) {
    console.error('Error parsing theme from local storage:', error);
  }
}

router.beforeEach((to, from, next) => {
  showAppBar.value = to.path !== '/';
  next();
});
</script>

<style>
</style>
