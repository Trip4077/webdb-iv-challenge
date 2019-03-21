
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measure').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measure').insert([
        { unit: 'Cup'},
        { unit: 'Gram'},
        { unit: 'Box'},
        { unit: 'Jar'},
        { unit: 'Can'},
        { unit: 'Tablespoon'},
        { unit: 'Pounds'}
      ]);
    });
};
