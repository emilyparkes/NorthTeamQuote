
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.binary('hash')
  })
}

exports.down = knex => knex.schema.dropTable('users')
