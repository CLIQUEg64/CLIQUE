exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function() {
      // Inserts seed entries
      return knex('contacts').insert([
				{
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
      },
			{
			id: 2,
			name: 'RJ Kirkhope',
			company: 'Mythic',
			position: 'CEO',
			skills: 'graphic design',
			dateMet: '10/23/2017',
			familiarity: 'like family',
			notes: 'looking for developers to build his personal site and training platforms',
			linkedinURL: 'www.linkedin.com/someguy',
			email: 'wkirkhope@alpineco.com',
			user_id: 1
		},
	{
	id: 3,
	name: 'Jordan Majdolashrafi',
	company: 'Blue Penguin',
	position: 'CTO',
	skills: '',
	dateMet: '10/23/2017',
	familiarity: 'aquantaince',
	notes: 'recruiting for startup expansion',
	linkedinURL: 'www.linkedin.com/someguy',
	email: 'wkirkhope@alpineco.com',
	user_id: 2
},
		]);
    });
};
