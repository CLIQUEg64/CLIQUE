const db = require('./connections')

function login(code) {
  return db('users').select().where('code', code).returning(['id', 'name', 'email', 'company', 'position', 'skills'])
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

function update(id, user) {
	// Update a user where email matches user email
	return db.table('users').update(user).where('id', id).returning(['id','name', 'email','company','position', 'skills','code']);
}

function getUsers() {
  return db.select('*').from('users').returning(['name', 'email', 'company', 'position', 'skills'])
}

function getContacts(users){
		return db.select('*').from('contacts')

}

function removeUser(id){
  return db.del().from('users').where('id', id);
}



module.exports = {
  login,
  createUser,
  getUsers,
  getContacts,
  update,
  removeUser
}
