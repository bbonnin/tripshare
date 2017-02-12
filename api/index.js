var router = require('express').Router()

// Add TRIPS routes
router.use(require('./trips'))

module.exports = router
