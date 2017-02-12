<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      TRIPS
    </h1>
    <ul class="trips">
      <li v-for="(trip, index) in trips" class="trip">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ trip.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async data () {
    let { data } = await axios.get('/api/trips')
    return {
      trips: data
    }
  },
  head () {
    return {
      title: 'Trips'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.trips
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.trip
{
  margin: 10px 0;
}
</style>
