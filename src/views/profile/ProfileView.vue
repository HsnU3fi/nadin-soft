<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-card

          class="mx-auto pa-12 pb-8 b-r br"
          width="70%"
          height="600"
          elevation="15"
          variant="outlined"
      >
        <v-row justify="center">
          <div style="width: 350px">
            <v-text-field
                :dir="dir"
                color="#4ED1F1"
                prepend-inner-icon="mdi-account"
                class="m-t"
                clearable
                v-model="name"
                :label="t('profile.name')"
                variant="outlined"
            ></v-text-field>

          </div>


        </v-row>
        <v-row justify="center">
          <div style="width: 180px;padding: 10px">
            <v-autocomplete
                :dir="dir"
                color="#4ED1F1"
                :label="t('profile.locale')"
                v-model="locale"
                :items="['en','fa']"
                variant="outlined"
            ></v-autocomplete>

          </div>
          <div style="width: 180px;padding: 10px">
            <v-autocomplete
                :dir="dir"
                color="#4ED1F1"
                :label="t('profile.theme')"
                v-model="theme"
                :items="['dark', 'light']"
                variant="outlined"
            ></v-autocomplete>

          </div>
        </v-row>
        <v-row justify="center">
          <v-btn @click="saveInLocalStorage" elevation="5" style="margin-top: 50px" width="150" height="50"
                 color="#4ED1F1" class="b-r">
            <h1 style="font-size: 15px;">
              {{ t('profile.save') }}
            </h1>
          </v-btn>

        </v-row>
      </v-card>
    </v-row>
    <loading :value="loading"/>


  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
import {useProfileStore} from "../../stores/profile";
import Loading from "@/components/loading/Loading.vue";

const profileStore = useProfileStore();
const getItem = ref({})
const locale = ref('')
const theme = ref('')
const name = ref('')
const dir = ref('ltr')
const loading = ref(true)
const getItemLocalStorage = async () => {
  dir.value = await profileStore.Rtl()
  getItem.value = await JSON.parse(profileStore.getItems())
  locale.value = getItem.value[0].locale
  theme.value = getItem.value[0].theme
  name.value = getItem.value[0].name
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

const saveInLocalStorage = async () => {
  loading.value = true
  var items = [
    {
      name: name.value,
      locale: locale.value,
      theme: theme.value
    }
  ]
  await profileStore.saveInLocalStorage(items)
  location.reload();
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
getItemLocalStorage()
</script>

<style scoped>

</style>