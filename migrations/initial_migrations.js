exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table) {
		table.increments();
		table.string('first_name').notNullable();
		table.string('last_name').notNullable();
		table.string('email').notNullable().unique();
		table.string('session_key', 128).index();
		table.string('pass_hash', 256).notNullable();
		table.string('pass_salt', 128).notNullable();
		table.timestamps();
	});
};

exports.down = function(knex, Promise) {
  
};
