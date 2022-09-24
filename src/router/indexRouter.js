const express = require('express')
const router = express.Router()
const {
    viewData
} = require('../controller/indexController')

router.get('/', viewData)


module.exports = router