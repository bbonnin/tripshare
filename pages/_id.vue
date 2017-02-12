<template>
  <section class="container">
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <md-card class="trip-card">
          <md-card-header>
            <div class="md-title">{{ trip.name }}</div>
            <!--<div class="md-subhead">Subtitle here</div>-->
          </md-card-header>

          <md-card-content>
            Description...
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </md-layout>
    </md-layout>
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
.trip-card {
  width: 100%;
}
</style>
