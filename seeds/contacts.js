exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function() {
      // Inserts seed entries
      return knex('contacts').insert([{
        id: 1,
        name: 'Willis Kirkhope',
        company: 'Alpine Colorado',
        position: 'CEO',
        skills: 'really really strong',
        dateMet: '10/23/2017',
        familiarity: 'like a brother to me',
        notes: 'looking for developers to build his personal site and training platforms',
        linkedinURL: 'www.linkedin.com/someguy',
        email: 'wkirkhope@alpineco.com',
        user_id: 1
      }, ]);
    });
};
