<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-card
          class="mx-auto b-r br"
          width="70%"
          height="600"
          elevation="15"
          variant="outlined"
      >
        <v-row justify="center" align="center">

          <div  class="m-t p-10">
            <h1 class="font1">{{ getHours }} :{{ getMinutes }}:{{ getSeconds }}</h1>
            <v-row justify="center">
              <h1 class="font2">
                {{ message }}, {{ name[0].name }}
              </h1>
            </v-row>

          </div>
        </v-row>
      </v-card>
    </v-row>
    <loading :value="loading"/>

  </v-container>
</template>
<script setup>
import Loading from "@/components/loading/Loading.vue";
import {useI18n} from 'vue-i18n'
const {t} = useI18n()
import {computed, ref} from 'vue'
const date = new Date();
const time = ref(new Date())
const message = ref('')
const name = ref('')
const loading = ref(true)


setInterval(() => {
  time.value = new Date()
}, 1000)

const getSeconds = computed(() =>
    time.value.getSeconds().toString().padStart(2, '0'),
)
const getMinutes = computed(() =>
    time.value.getMinutes().toString().padStart(2, '0'),
)
const getHours = computed(() =>
    time.value.getHours().toString().padStart(2, '0'),
)
const showMessage = () => {
  const hour = parseInt(getHours.value)

  if (hour < 6) {
    message.value = t('home.gn')
  } else if (hour < 12) {
    message.value = t('home.gm')
  } else if (hour < 18) {
    message.value = t('home.ga')
  } else if (hour > 18 < 24) {
    message.value = t('home.gn')

  }
}
name.value = JSON.parse(localStorage.getItem('profile'))
showMessage()
setTimeout(() => {
  loading.value = false
},3000)
</script>

<style lang="scss">
.font1{
  font-size: 8vw
}
.font2{
  font-size: 20px;margin-top: 50px
}
</style>