const db = require('./connections')

function login(code) {
  return db('users').select().where('code', code).returning(['id', 'code'])
}

function createUser(user) {
  const code = generateRandomString()

  user.code = code
  return db('users').insert(user).returning(['id', 'code', 'name', 'email','company', 'position', 'skills'])
}

function generateRandomString() {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}

function getLogin() {
  return db.select('*').from('users')
}


module.exports = {
  login,
  createUser,
  getLogin
}
