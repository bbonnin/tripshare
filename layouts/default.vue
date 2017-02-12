<template>
  <div>
    <md-toolbar>
      <h1 class="md-title title"><md-icon>flight_takeoff</md-icon> Tripshare</h1>
      <nuxt-link class="md-button md-primary" to="/">Trips</nuxt-link>
    </md-toolbar>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import '~plugins/vue-material' //Comment this line in case of error 'document is not defined'
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  /*text-align: center;*/
}

.title {
  /*flex: 1;*/
}
</style>
