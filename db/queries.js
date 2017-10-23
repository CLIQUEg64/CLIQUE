const db = require('./connections')

function login(code){
	return db('users').select().where('code', code)
