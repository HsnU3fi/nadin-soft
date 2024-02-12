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
        <v-autocomplete
            label="Enter City"
            :items="cityList"
            item-title="city"
            item-value="city"
            v-model="selectedCity"
            @click="getObj"
        ></v-autocomplete>
        <v-row justify="center">
          <h1 style="font-size: 6vw">
            {{temperature}} °C
          </h1>
        </v-row>
        <v-row justify="center">
          <h1 style="font-size: 7vw">
            {{temperature}} °C
          </h1>
        </v-row>
        <v-row justify="center">
          <h1 style="font-size: 30px">
            {{temperature}} °C
          </h1>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import {useWeatherStore} from "../../stores/weather";
import { ref} from "vue";

const cityList = ref([]);
const selectedCity = ref('');
const temperature = ref();
const weatherStore = useWeatherStore();

cityList.value = weatherStore.listCity();

const getObj = async () => {
  for (var i in cityList.value) {
    if (cityList.value[i].city === selectedCity.value) {
      console.log('cityList.value[i]')
      const result = await weatherStore.getWeather(cityList.value[i])
      console.log(result.data.current_weather.temperature)

      temperature.value=result.data.current_weather.temperature
      temperature.value = `${result.data.current_weather.temperature} ${result.data.current_weather.current_weather_units.temperature}`;
      console.log('temperature.value')
      console.log(temperature.value)
    }

  }
}
getObj()
console.log('City List:', cityList.value);
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
