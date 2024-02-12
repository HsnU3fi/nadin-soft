<template>

  <v-container class="fill-height">
    <v-row
        justify="center" align="center">
      <div class="fade-in-image">
        <img style="width: 350px" src="../../assets/img/logo-nodin.png">
      </div>
    </v-row>
  </v-container>

</template>

<script setup>
const goToHomePage = () => {
  const items = [
    {
      locale: "en",
      theme: 'light',
      name: 'User'
    }
  ]
  localStorage.setItem("profile", JSON.stringify(items));
  localStorage.setItem("todo", JSON.stringify([]));
  window.location = '/dashboard'
}

setTimeout(() => {
  goToHomePage()
}, 4000)

</script>

<style scoped>

</style>
