const db = require('./connections')

function login(code) {
  return db('users').select().where('code', code)
}

function createUser(user) {
  const code = generateRandomString()

  user.code = code
  return db('users').insert(user).returning(['id', 'code'])
}

function generateRandomString() {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}

function getLogin() {
<<<<<<< HEAD
  return db.select().from('users')
=======
  return db.select('*').from('users')
>>>>>>> 958bb3238d3b3228f9e87f6badef8ebd8557f9be
}


module.exports = {
  login,
  createUser,
  getLogin
}
