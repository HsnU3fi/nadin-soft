<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-card
          class="mx-auto b-r br"
          width="70%"
          height="600"
          elevation="15"
          color="#000"
          variant="outlined"
      >
        <v-row justify="center">
        <div style="width: 50%;margin-top: 50px">
        <v-autocomplete
            :label="t('weather.city')"
            color="#4ED1F1"
            variant="outlined"
            :items="cityList"
            item-title="city"
            item-value="city"
            v-model="selectedCity"
        >
          <template v-slot:append>
              <img
                  style="cursor: pointer"
                  height="48"
                  width="48"
                  src="../../assets/img/search.png"
                  alt="search"
                  @click="getObj"
              >
          </template>


        </v-autocomplete>

        </div>
        </v-row>
        <v-row justify="center">
          <h1 style="font-size: 5vw;margin-top: 20px">
            {{ city }}
          </h1>
        </v-row>
        <v-row justify="center">
          <h1 style="font-size: 6vw">
            {{ temperature + c }}
          </h1>
        </v-row>
        <v-row justify="center">
          <h1 style="font-size: 30px">
            {{ dayOfWeek }}
          </h1>
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
import {useWeatherStore} from "../../stores/weather";
import {ref} from "vue";
const loading = ref(true)
const cityList = ref([]);
const selectedCity = ref('');
const temperature = ref('');
const c = ref('');
const city = ref();
const dayOfWeek = ref();
const weatherStore = useWeatherStore();

cityList.value = weatherStore.listCity();

const getObj = async () => {
  loading.value=true
  for (var i in cityList.value) {
    if (cityList.value[i].city === selectedCity.value) {
      const result = await weatherStore.getWeather(cityList.value[i])
      const date = new Date(result.data.current_weather.time);
      dayOfWeek.value = date.toLocaleDateString('en-US', { weekday: 'long' });
      c.value = result.data.current_weather_units.temperature
      temperature.value = result.data.current_weather.temperature
      city.value = cityList.value[i].city

    }

  }
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

setTimeout(() => {
  loading.value = false
}, 3000)
</script>

<style scoped>
</style>
