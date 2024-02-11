<!--<template>-->
<!--  <div>-->
<!--    <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        absolute-->
<!--        temporary-->
<!--        app-->
<!--        dark-->
<!--        color="#2C2F37"-->
<!--        width="85%"-->
<!--    >-->
<!--      <v-row style="margin: 15px;" justify="end" align="end">-->
<!--        <v-btn icon right @click="drawer=false">-->
<!--          <v-icon>-->
<!--            mdi-close-->
<!--          </v-icon>-->
<!--        </v-btn>-->
<!--      </v-row>-->

<!--      <v-list-item-group-->
<!--          active-class="bgsidebar"-->
<!--          dark-->
<!--      >-->
<!--        <v-list-item-->
<!--            class="SelectedTile"-->
<!--            link-->
<!--            to="/"-->
<!--            style="height: 30px"-->
<!--        >-->
<!--          <v-list-item-icon style="margin-top: 8px">-->
<!--            <v-icon size="20"> mdi-account </v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content>-->
<!--            <span style="font-weight: bold; font-size: 13px">Authors</span>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->


<!--        <v-list nav dense>-->
<!--          <v-list-item-->
<!--              class="SelectedTile"-->
<!--              link-->
<!--              to="/book"-->
<!--              style="height: 30px"-->
<!--          >-->
<!--            <v-list-item-icon style="margin-top: 8px">-->
<!--              <v-icon size="20"> mdi-book-open-page-variant </v-icon>-->
<!--            </v-list-item-icon>-->
<!--            <v-list-item-content>-->
<!--              <span style="font-weight: bold; font-size: 13px">Books</span>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->


<!--        </v-list>-->

<!--      </v-list-item-group>-->
<!--    </v-navigation-drawer>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--//======================================================================================================================-->

<!--export default {-->
<!--  props: {-->
<!--    drawer: {type: Boolean}-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      flagList: true-->
<!--    }-->
<!--  },-->

<!--//======================================================================================================================-->



<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--.SelectedTile:hover {-->
<!--  border-radius: 4px;-->
<!--  background-color: #55BE4C;-->
<!--}-->

<!--.bgsidebar {-->
<!--  background-color: #55BE4C;-->
<!--}-->

<!--.v-navigation-drawer&#45;&#45;mini-variant, .v-navigation-drawer {-->
<!--  overflow: visible !important;-->
<!--}-->

<!--</style>-->
