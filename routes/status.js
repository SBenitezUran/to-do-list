const express = require('express')
const controllerStatus = require('../controllers/status')
const router = express.Router()


router.get ('/', controllerStatus.get)
router.get ('/:id', controllerStatus.getById)
router.patch ('/update/:id', controllerStatus.update)


module.exports = router