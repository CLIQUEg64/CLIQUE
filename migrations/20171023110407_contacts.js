exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contacts', (table) => {
      table.increments()
      table.string('name')
      table.string('company')
      table.string('position')
      table.string('skills')
      table.string('dateMet')
      table.string('familiarity')
      table.string('notes')
      table.string('linkedinURL')
      table.string('email')
      table.integer('user_id')

    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('contacts')
  ])
};
