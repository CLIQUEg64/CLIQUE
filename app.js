const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
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

app.get('/webdev', (req, res) => {
  queries.getUsers()
    .then(users => {
      console.log(users)
      res.render('webdev', {users: users} )
    })
})

app.get('/contacts', (req, res) => {
  queries.getContacts()
  .then(contacts => { console.log(contacts)
  res.render('webdev', {contacts:contacts})
  })
})

app.post('/', (req, res) => {
  queries.login(req.body.code)
    .then(user => {
      res.render('homepage', {user: user[0]})
			// console.log({user: user[0]});
    })
})


app.post('/homepage', (req, res) => {
  console.log(req.body);
  var code = req.body.code;
  queries.createUser(req.body)
  .then(user => { console.log(user);
    res.render('homepage', { user: user[0] })
    // res.redirect(`/homepage/?code=${user[0].code}`)
    //need to find a way to pass user: user[0] object to the homepage route and so we can access the object in homepage.hbs
  })
});



app.listen(port, () => {
  console.log(`listening at ${port}`);
})
