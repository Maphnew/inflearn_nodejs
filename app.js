const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Start! express! http://localhost:3000 <<<<<< ctrl + click")
});

app.use(express.static('public'))

// url routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})