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
app.post('/users', (req, res) => {
  queries.createUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).send(err))

})

app.get('/users', (req, res) => {
  queries.getLogin()
    .then(user => res.json(user))
})

app.get('/homepage/:id', (req, res) => {
  res.render('homepage')
})

app.listen(port, () => {
  console.log(`listening at ${port}`);
})
