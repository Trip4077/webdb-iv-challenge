
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.integer('dish_id')
         .notNullable();
      tbl.string('recipe_name')
         .notNullable()
         .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
