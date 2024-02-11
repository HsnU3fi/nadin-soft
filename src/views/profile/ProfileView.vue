<template>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-card
            class="mx-auto pa-12 pb-8 b-r"
            width="50%"
            height="600"
            elevation="15"
            color="#000"
            variant="outlined"
        >
          <v-row justify="center">
            <div style="width: 400px">
              <v-text-field
                  prepend-inner-icon="mdi-account"
                  class="m-t"
                  clearable
                  label="Name"
                  variant="outlined"
              ></v-text-field>

            </div>

            </v-row>
        </v-card>
      </v-row>
    </v-container>

</template>

<script>
export default {
  name: "ProfileView"
}
</script>

<style scoped>

</style>