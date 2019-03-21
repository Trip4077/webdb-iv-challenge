
exports.up = function(knex, Promise) {
  return knex.schema.createTable('join_quantity', tbl => {
      tbl.increments();
      tbl.integer('rec_id')
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
      tbl.integer('meas_id')
          .references('id')
          .inTable('measure')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      tbl.integer('ing_id')
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
      tbl.float('quantity').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('join_quantity');
};
