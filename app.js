const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const queries = require('./db/queries');


app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())



app.get('/', function(req, res) {
  res.render('index');
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/homepage', (req, res) => {
  res.render('homepage')
})

app.post('/', (req, res) => {
  queries.login(req.body.code)
    .then(user => {
      res.redirect('/homepage/' + user[0].id)
      console.log(req.body.code)
    })
})
<<<<<<< HEAD
app.post('/', (req, res) => {
=======
app.post('/users', (req, res) => {
>>>>>>> 958bb3238d3b3228f9e87f6badef8ebd8557f9be
  queries.createUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).send(err))

})
<<<<<<< HEAD
app.get('/', (req, res) => {
=======
app.get('/users', (req, res) => {
>>>>>>> 958bb3238d3b3228f9e87f6badef8ebd8557f9be
  queries.getLogin()
    .then(user => res.json(user))
})

app.get('/homepage/:id', (req, res) => {
  res.render('homepage')
})

app.listen(port, () => {
  console.log(`listening at ${port}`);
})
