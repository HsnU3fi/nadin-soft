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

       <div style="padding: 10px" class="m-t">
         <h1 style="font-size: 8vw" >{{ getHours }} :{{getMinutes}}:{{getSeconds}}</h1>
         <v-row justify="center">
           <h1 style="font-size: 20px;margin-top: 50px">
             {{message}}, User
           </h1>
         </v-row>

       </div>
     </v-row>
    </v-card>
  </v-row>

</v-container>
</template>
<script setup>
import { computed, ref } from 'vue'
const date = new Date();
const time = ref(new Date())
const message = ref('')

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
    message.value = "Good night"
  } else if (hour < 12) {
    message.value = "Good morning"
  } else if (hour < 18) {
    message.value = "Good afternoon"
  }
}

showMessage()
</script>