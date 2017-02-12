var router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    co = require('co'),
    assert = require('assert')

co(function*() {
  var url = 'mongodb://localhost:27017/tripshare'
  var db = yield mongo.connect(url)
  db.close()
}).catch(function(err) {
  console.log(err.stack);
});

const trips = [{
  name:'Ecosse',
  dates: {
    from: '2017-08-12',
    to: '2017-09-03'
  },
  flights: [{
    from: 'Paris, FR',
    to: 'Edimburgh, UK',
    dates: {
      from: '2017-08-12T22:00:00',
      to: '2017-09-03T23:00:00'
    },
    cost: 0,
    links: []
  }],
  timeline: [{
    days: {
      from: '2017-08-12',
      to: '2017-08-13',
      hotel: {
        location: '',
        links: [''],
        cost: 0
      }
    }
  }]
}]


/* GET trips listing. */
router.get('/trips', function (req, res, next) {
  res.json(trips)
})

/* GET trip by ID. */
router.get('/trips/:id', function (req, res, next) {
  var id = parseInt(req.params.id)
  
  if (id >= 0 && id < trips.length) {
    res.send(trips[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
