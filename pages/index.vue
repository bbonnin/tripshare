<template>
  <section class="container">
    <h1 class="title">
      TRIPS
    </h1>
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <ul class="trips">
          <li v-for="(trip, index) in trips" class="trip">
            <nuxt-link :to="{ name: 'id', params: { id: index }}">
              {{ trip.name }}
            </nuxt-link>
          </li>
        </ul>
      </md-layout>
    </md-layout>
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
