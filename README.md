# Inflearn_nodejs web development
NodeJS_Begin

## Section 1. Start nodeJS + Express web server
### How to Start NodeJS with npm
1. npm init - package.json
2. npm install express - package-lock.json, node_modules

### Run node server!
1. create app.js
2. import express server & use listen port 3000
3. check browser : $ node app.js
4. sudo npm install nodemon -g(global)
5. nodemon app.js
6. apply changes to check nodemon

### First page! URL Routing
1. app.get('/', (req, res) => {})
2. res.send(<h1>Hi there!!</h1>)
3. create /public/main.html with lorem thing
4. res.sendFile(__dirname +"/public/main.html")

### Static directory
1. create main.js and check browser error
2. app.use(express.static('public'))
3. add image on html
4. app.get('/main', (req, res) => {})
5. check browser localhost:3000/main

## Section2. Request, Response Basic

### POST Request
1. app.post('/email_post', (req, res) = > {})
2. npm install body-parser
3. import body-parser
4. app.use(bodyParser.json())
5. app.use(bodyParser.urlencoded({encoded:true}))
6. res.send("<h1>WELCOME " + req.body.email + "</h1>")
7. create form.html
8. input email and submit
9. check browser "WELCOME abc@abc.com"

### View engine Response
1. npm install ejs --save
2. create /views/email.ejs
3. app.set('view engine', 'ejs')
4. res.render('email.ejs', {'email': req.body.email})
5. check browser
6. search Express view engin & browse express web site

### JSON & AJAX
1. create button .ajaxsend
2. script .ajaxsend.addEventListener('click', ()=> {})
3. create function sendAjax(url(ajax_send_email), inputdata){}
4. XMLHttoRequest().open('POST', url)
5. xhr.setRequestHeader('Content-Type', 'application/json');
6. xhr.send(data);
7. xhr.addEventListener('load', ()=> {})
8. result = JSON.parse(xhr.responseText)
9. .result.innerHTML = result.email
10. app.post('/ajax_send_email', (req,res) => {})
11. responseData = {'result':'ok', 'email':req.body.email}
12. res.json(responseData)

### Assignment
DONE!
https://github.com/Maphnew/nodeJS_Assignment01.git

* 2019.08.29(THU)


## Section 3. Database connection!
### Set Mysql 
1. sudo apt-get install mysql-server
2. sudo mysql_secure_installation
3. mysql -u - root -p
4. create database jsman;
5. use jsman;
6. create table user(email VARCHAR(32) NOT NULL, name VARCHAR(32) NOT NULL, password VARCHAR(32) NOT NULL);
7. insert into (email, name, password) values (ksc@ksc@.com, ksc, 1234);
    create usr 'maphnew'@;localhost' identified by '12345678';
    grant all privileges on *.* to 'maphnew'@'localhost';
8. npm install mysql --save
9. const mysql = require('mysql')
10. search 'express mysql' and type connection thing on app.js with 'maphnew' infomation
11. check nodemon 
12. 

### Run Mysql
1. app.post('/ajax_send_email', (req, res) => {
    SET error, exist row[0], email, responseData, query connection, result, name from email, res.json(responseData) 
})

2. check rows[0], rows[0].name, if exist rows[0] response name from browser

## Section 4. Router Modulization

### Routing modulization
1. mkdir router and make main.js
2. mv to main.js app.get('/main', (req,res) => {})
3. import express, app, router into main.js
4. app.get('/main') --> router.get('/')
5. module.exports = router;
6. path.join thing
7. app.js const main = require("./router/main")
    app.use('/main', main)

### Routing modulization 2 (DataBase)
1.