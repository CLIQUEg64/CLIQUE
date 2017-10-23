const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const queries = require('./db/queries')

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index');
})
app.get('/login', (req, res) => {
	res.render('login.hbs')
})

app.post('/', (req, res)=>{
	queries.login(req.body.code)
	.then(user => {
		res.redirect('/homepage/' + user[0].id)
	})
})

app.listen(port, () => {
	console.log(`listening at ${port}`);
})
