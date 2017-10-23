exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments().primary
      table.string('email')
      table.string('code')
      table.string('name')
      table.string('company')
      table.string('position')
      table.string('skills')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
