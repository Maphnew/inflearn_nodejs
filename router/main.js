const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

console.log("main js loaded")

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"))
})

module.exports = router;