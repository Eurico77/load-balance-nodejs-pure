exports.up = knex => {
   return knex.schema.createTable('produtos', table => {
       table.increments('id').primary()
       table.string('name').notNull()
       table.string('segmento').notNull()
   })
}

exports.down = knex => {
   return knex.schema.dropTable('produtos')
};
