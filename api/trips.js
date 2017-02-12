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


/* GET trips listing. */
router.get('/trips', function (req, res, next) {
  res.json([])
})

/* GET trip by ID. */
router.get('/trips/:id', function (req, res, next) {
  var id = req.params.id
  res.sendStatus(404)
})

module.exports = router
