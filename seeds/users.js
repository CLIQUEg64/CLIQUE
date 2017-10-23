exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([{
      id: 1,
      company: 'galvanize',
      email: 'jrobbinsd@galvanize.com',
      name: 'jake robbins',
      position: 'Cripple in Chief',
      skills: 'sitting, moping, breaking own bones, coding',
      code: '1111'
    }]);
  });
};
