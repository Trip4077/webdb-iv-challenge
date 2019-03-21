
exports.up = function(knex, Promise) {
  return knex.schema.createTable('join_quantity', tbl => {
      tbl.increments();
      tbl.integer('rec_id').notNullable();
      tbl.integer('meas_id').notNullable();
      tbl.integer('ing_id').notNullable()
      tbl.float('quantity').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('join_quantity');
};
