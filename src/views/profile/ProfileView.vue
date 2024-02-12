<template>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-card

            class="mx-auto pa-12 pb-8 b-r br"
            width="70%"
            height="600"
            elevation="15"
            color="#000"
            variant="outlined"
        >
          <v-row justify="center">
            <div style="width: 350px">
              <v-text-field
                  color="#4ED1F1"
                  prepend-inner-icon="mdi-account"
                  class="m-t"
                  clearable
                  label="Name"
                  variant="outlined"
              ></v-text-field>

            </div>


            </v-row>
          <v-row justify="center">
            <div style="width: 180px;padding: 10px">
              <v-autocomplete
                  color="#4ED1F1"
                  label="Locale"
                  :items="['En','Fa']"
                  variant="outlined"
              ></v-autocomplete>

            </div>
            <div style="width: 180px;padding: 10px">
              <v-autocomplete
                  color="#4ED1F1"
                  label="Theme"
                  :items="['Dark', 'Light']"
                  variant="outlined"
              ></v-autocomplete>

            </div>
          </v-row>
          <v-row justify="center">
            <v-btn elevation="5" style="margin-top: 50px" width="150" height="50" color="#4ED1F1" class="b-r">
              <h1 style="font-size: 15px;">
                Save
              </h1>
            </v-btn>

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