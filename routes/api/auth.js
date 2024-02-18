const express = require('express')
const route = express.Router()
const registrationcontroller = require("../../controllers/registrationcontroller")

route.get('/registration', registrationcontroller)


module.exports = route;