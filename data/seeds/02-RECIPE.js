
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Homestyle', dish_id: 1 },
        { recipe_name: 'Chocolate', dish_id: 2 },
        { recipe_name: 'Vegan', dish_id: 1 },
        { recipe_name: 'Red Velvet', dish_id: 2 }
      ]);
    });
};
