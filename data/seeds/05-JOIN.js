
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join_quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('join_quantity').insert([
        { 
          rec_id: 1,
          ing_id: 5,
          meas_id: 3,
          quantity: 1.0
        },
        { 
          rec_id: 1,
          ing_id: 6,
          meas_id: 5,
          quantity: 1.0
        },
        { 
          rec_id: 1,
          ing_id: 7,
          meas_id: 1,
          quantity: 2.0
        },
        { 
          rec_id: 1,
          ing_id: 8,
          meas_id: 7,
          quantity: 1.5
        },
        { 
          rec_id: 4,
          ing_id: 4,
          meas_id: 6,
          quantity: 2.0
        },
        { 
          rec_id: 4,
          ing_id: 2,
          meas_id: 1,
          quantity: 1.0
        },
        { 
          rec_id: 4,
          ing_id: 3,
          meas_id: null,
          quantity: 3.0
        },
        { 
          rec_id: 4,
          ing_id: 1,
          meas_id: 1,
          quantity: 1.0
        },
      ]);
    });
};
