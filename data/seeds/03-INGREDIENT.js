
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ing_name: 'Milk' },
        { ing_name: 'Flour' },
        { ing_name: 'Eggs' },
        { ing_name: 'Sugar' },
        { ing_name: 'Dry Pasta' },
        { ing_name: 'Tomato Sauce' },
        { ing_name: 'Parmasian Cheese' },
        { ing_name: 'Ground Beef' }
      ]);
    });
};
