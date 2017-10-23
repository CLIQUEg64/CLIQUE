const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port, () => {
	console.log(`listening at ${port}`);
})
