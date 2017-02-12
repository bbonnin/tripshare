<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Trip
    </h1>
    <h2 class="info">
      {{ trip.name }}
    </h2>
    <nuxt-link class="button" to="/">
      Trips
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'id',
  data ({ params, error }) {
    return axios.get('/api/trips/' + params.id)
    .then((res) => {
      return { trip: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Trip not found' })
    })
  },
  head () {
    return {
      title: `Trip: ${this.trip.name}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
