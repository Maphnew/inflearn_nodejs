const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const main = require('./router/main')

const connection = mysql.createConnection({
    host    : 'localhost',
    post    : '3306',
    user    : 'maphnew',
    password: '12345678',
    database: 'jsman'
});

connection.connect();

app.listen(3000, () => {
    console.log("Start! express! http://localhost:3000 <<<<<< ctrl + click")
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use('/main', main)

// url routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})


app.post('/email_post', (req, res) => {
    console.log(req.body.email)
    // res.send("<h1>WELCOME "+ req.body.email+"</h1>")
    res.render('email.ejs', {'email': req.body.email})
}) 

app.post('/ajax_send_email', (req,res) => {
    const email = req.body.email;
    const responseData = {};

    const query = connection.query(`select name from user where email="${email}"`, (err,rows) => {
        if(err) throw err;
        if(rows[0]) {
            // console.log(rows[0].name)
            responseData.result="ok";
            responseData.name=rows[0].name;

        }else{
            // console.log(`none :  ${rows[0]}`)
            responseData.result="none";
            responseData.name="";

        }
        res.json(responseData);
    })
    // const responseData = {'result':'ok', 'email': req.body.email}
    
})