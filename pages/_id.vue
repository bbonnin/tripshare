<template>
  <section class="container">
    <md-layout md-gutter>
      <md-layout md-flex="70" md-flex-offset="15">
        <md-table-card class="trip-card">
          <md-card-header>
            <div class="md-title">{{ trip.name }} <md-chip>{{ trip.total }} €</md-chip></div>
            <div class="md-subhead">{{ trip.operator }}</div>
          </md-card-header>

          <md-card-content v-show="trip.type === 'operator'">
            <div class="center"><md-image v-show="trip.img" :md-src="trip.img"></md-image></div>
            <h3>Links</h3>
            <md-list>
              <md-list-item v-for="(link, index) in trip.links">
                <a class="small-font" target="_blank" :href="link">{{ link }}</a>
              </md-list-item>
            </md-list>
          </md-card-content>

          <md-card-content v-show="trip.type !== 'operator'">
            <md-tabs>
              <md-tab md-label="Flights">          
                <md-table>
                  <md-table-header>
                    <md-table-row>
                      <md-table-head>From</md-table-head>
                      <md-table-head>To</md-table-head>
                      <md-table-head>Price</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                  </md-table-header>
                  <md-table-body>
                    <md-table-row v-for="(flight, index) in trip.flights">
                      <md-table-cell>{{ flight.from }}</md-table-cell>
                      <md-table-cell>{{ flight.to }}</md-table-cell>
                      <md-table-cell>{{ flight.cost }} €</md-table-cell>
                      <md-table-cell>
                        <a v-show="flight.link" :href="flight.link" target="_blank">
                          See
                        </a>
                      </md-table-cell>
                    </md-table-row>
                  </md-table-body>
                </md-table>
              </md-tab>
              <md-tab md-label="Hostels">
                <md-table>
                  <md-table-header>
                    <md-table-row>
                      <md-table-head>Name</md-table-head>                    
                      <md-table-head>Location</md-table-head>
                      <md-table-head>#Nights</md-table-head>
                      <md-table-head>Breakfast Incl.</md-table-head>
                      <md-table-head>Price</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                  </md-table-header>
                  <md-table-body>
                    <md-table-row v-for="(hostel, index) in trip.hostels">
                      <md-table-cell>{{ hostel.name }}</md-table-cell>
                      <md-table-cell>{{ hostel.location }}</md-table-cell>
                      <md-table-cell>{{ hostel.nights }}</md-table-cell>
                      <md-table-cell><md-icon v-show="hostel.breakfast_included">check</md-icon></md-table-cell>
                      <md-table-cell>{{ hostel.cost }}</md-table-cell>
                      <md-table-cell>
                        <a v-show="hostel.link" :href="hostel.link" target="_blank">
                          See
                        </a>
                      </md-table-cell>
                    </md-table-row>
                  </md-table-body>
                </md-table>
              </md-tab>
              <md-tab md-label="Cars">
                <md-table>
                  <md-table-header>
                    <md-table-row>
                      <md-table-head>From</md-table-head>
                      <md-table-head>To</md-table-head>
                      <md-table-head>Price</md-table-head>
                      <md-table-head></md-table-head>
                    </md-table-row>
                  </md-table-header>
                  <md-table-body>
                    <md-table-row v-for="(car, index) in trip.cars">
                      <md-table-cell>{{ car.from }}</md-table-cell>
                      <md-table-cell>{{ car.to }}</md-table-cell>
                      <md-table-cell>{{ car.cost }} €</md-table-cell>
                      <md-table-cell>
                        <a v-show="car.link" :href="car.link" target="_blank">
                          See
                        </a>
                      </md-table-cell>
                    </md-table-row>
                  </md-table-body>
                </md-table>
              </md-tab>
            </md-tabs>
          </md-card-content>

          <md-card-actions>
            <nuxt-link class="md-button md-primary" to="/">Back to trips</nuxt-link>
          </md-card-actions>
        </md-table-card>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import _ from 'lodash'

export default {
  name: 'id',
  data ({ params, error }) {
    return axios.get('/api/trips/' + params.id)
    .then((res) => {
      var trip = res.data;
      if (!trip.total) {
        trip.total = 0;
        [ 'flights', 'hostels', 'cars' ].forEach(item => {
          if (trip[item]) {
            trip.total += _.sumBy(trip[item], 'cost')
          }
        })
      }
      return { trip: trip }
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
.small-font {
  font-size: smaller;
}

.center {
  text-align: center;
}

.title {
  margin-top: 30px;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}

.trip-card {
  width: 100%;
}
</style>
