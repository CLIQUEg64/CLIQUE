exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([
			{
      id: 1,
      company: 'galvanize',
      email: 'jrobbinsd@galvanize.com',
      name: 'jake robbins',
      position: 'Cripple in Chief',
      skills: 'sitting, moping, breaking own bones, coding',
      code: '1111'
    },
		{
		id: 2,
		company: 'galvanize',
		email: 'landonwshields@galvanize.com',
		name: 'Landon Shields',
		position: 'Progammer',
		skills: 'coding, dancing, giving no damns',
		code: '2222'
	}
	]);
  });
};
