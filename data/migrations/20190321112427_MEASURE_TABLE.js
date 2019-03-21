
exports.up = function(knex, Promise) {
  return knex.schema.createTable('measure', tbl => {
      tbl.increments();
      tbl.string('unit')
         .notNullable()
         .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('measure');
};
