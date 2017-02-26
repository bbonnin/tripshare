<template>
  <section class="container">
    <md-layout md-gutter>
      <md-layout md-flex="70" md-flex-offset="15">
        <md-whiteframe md-tag="section" class="trip-panel">
          <h1 class="md-title trips-title">Trips</h1>
          <md-list>
            <md-list-item v-for="(trip, index) in trips">
              <div class="md-list-item-container">
                <md-icon>language</md-icon> 
                <span>{{ trip.name }}</span>
                <md-chip :class="'trip-price-' + trip.type">{{ trip.total }} €</md-chip>
                <div style="margin-left:20px">
                <nuxt-link :to="{ name: 'id', params: { id: trip.id }}" 
                    tag="button"
                    class="md-button md-fab md-mini md-primary md-icon-button md-list-action md-theme-default">
                  <md-icon class="trip-action">edit</md-icon>
                </nuxt-link>
                </div>
              </div>
            </md-list-item>
          </md-list>
        </md-whiteframe>
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
.trip-price-operator {
  background-color: #ff5722!important;
  color: rgba(255, 255, 255, .87);
}

.trip-action {
  color: rgba(255, 255, 255, .87);
  margin: auto;
}

.trips-title {
  color: rgba(0, 0, 0, 0.57);
  padding-left: 15px;
}

.trip-panel {
  width: 100%;
}

.trips {
  list-style: none;
  margin: 0;
  padding: 0;
}

.trip {
  margin: 10px 0;
}
</style>
