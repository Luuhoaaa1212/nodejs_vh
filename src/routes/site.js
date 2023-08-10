var express = require('express')
var router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/seach',siteController.seach)
router.use('/',siteController.index)

module.exports = router;