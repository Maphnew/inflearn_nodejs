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
1. 