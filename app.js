const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const queries = require('./db/queries');
const methodOverride = require('method-override')


app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))


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
      // console.log(users)
			queries.getContacts(users)
				.then(contacts => {
					// console.log((contacts));
      res.render('webdev', { users: users, contacts:contacts
			})
      })
    })
})

app.get('/contacts', (req, res) => {
  queries.getContacts()
    .then(contacts => {
      console.log(contacts)
      res.render('webdev', {
        contacts: contacts
      })
    })
})

app.post('/', (req, res) => {
  queries.login(req.body.code)
    .then(user => {
      res.render('homepage', {
        user: user[0]
      })
      // console.log({user: user[0]});
    })
})


app.post('/homepage', (req, res) => {
  console.log(req.body);
  var code = req.body.code;
  queries.createUser(req.body)
    .then(user => {
      console.log(user);
      res.render('homepage', {
        user: user[0]
      })
      // res.redirect(`/homepage/?code=${user[0].code}`)
      //need to find a way to pass user: user[0] object to the homepage route and so we can access the object in homepage.hbs
    })
});

app.put('/:id', (req, res, next) => {
  // console.log('Hello');
	const id = req.params.id;
	queries.update(id, req.body)
  // .then(() => res.sendStatus(200))
	// 	.catch(err => next(err))
  // })
		.then(user => { console.log(user)
    res.render('homepage',{ user: user[0] })
  })
		.catch(err => next(err));
});


app.delete('/:id', (req, res, next) => {
  console.log('hello');
  const id = req.params.id;
  queries.removeUser(id)
    .then(user => { console.log(user)
    res.redirect('/')
})
})

app.listen(port, () => {
  console.log(`listening at ${port}`);
})
