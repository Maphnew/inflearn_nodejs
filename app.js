const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host    : 'localhost',
    post    : '3306',
    user    : 'maphnew',
    password: '12345678',
    database: 'jsman'
});

connection.connect();

connection.end();

app.listen(3000, () => {
    console.log("Start! express! http://localhost:3000 <<<<<< ctrl + click")
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

// url routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', (req, res) => {
    console.log(req.body.email)
    // res.send("<h1>WELCOME "+ req.body.email+"</h1>")
    res.render('email.ejs', {'email': req.body.email})
}) 

app.post('/ajax_send_email', (req,res) => {
    console.log(req.body.email)
    const responseData = {'result':'ok', 'email': req.body.email}
    res.json(responseData);
})