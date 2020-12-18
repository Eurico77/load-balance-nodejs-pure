exports.up = knex => {
   return knex.schema.createTable('lojas', table => {
       table.increments('id').primary()
       table.string('name').notNull()
   })
}

exports.down = knex => {
   return knex.schema.dropTable('lojas')
};
