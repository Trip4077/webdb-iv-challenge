
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
      tbl.increments();
      tbl.string('category')
         .notNullable()
         .unique()
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish')
};
