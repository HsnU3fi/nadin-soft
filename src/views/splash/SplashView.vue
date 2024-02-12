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
      locale: "En",
      theme: 'Light',
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

.bg {
  background: rgb(234, 253, 254);
  background: linear-gradient(188deg, rgba(234, 253, 254, 1) 40%, rgba(255, 255, 255, 1) 56%, rgba(246, 218, 254, 1) 84%);
}
</style>
