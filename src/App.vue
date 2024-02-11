<template>
  <v-app>
    <h1>{{ message }}</h1>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const message = t('welcome') // Assuming 'account_is_not_exist' is the correct key in your translations
</script>

<style>
/* Add your styles here if needed */
</style>
