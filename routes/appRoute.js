const express = require("express")
const router = express.Router()

const { getIndex, newMessage } = require('../controllers/appController')

router.route("/").get(getIndex).post(newMessage)

module.exports = router