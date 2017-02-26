var router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    co = require('co'),
    assert = require('assert')

function logErr(err) {
  console.log(err.stack)
}

co(function*() {
  let url = 'mongodb://localhost:27017/tripshare'
  db = yield mongo.connect(url)
  //db.close()
}).catch(logErr);


/* GET trips listing. */
router.get('/trips', function (req, res, next) {
  co(function*() {
    let trips = yield db.collection('trips').find().limit(20).toArray()
    trips.forEach(trip => {
      trip.id = trip._id.toString()
      delete trip._id
    })
    res.json(trips)
  }).catch(logErr)
})

/* GET trip by ID. */
router.get('/trips/:id', function (req, res, next) {
  co(function*() {
    let id = req.params.id
    let trip = yield db.collection('trips').findOne({ _id: new ObjectId(id) })
    if (trip) {
      trip.id = trip._id.toString()
      delete trip._id
      res.send(trip)
    } else {
      res.sendStatus(404)
    }
  }).catch(logErr)
})

module.exports = router
