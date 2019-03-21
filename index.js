const db = require('./data/dbHelpers');

db.getDish(2)
    .then(dish => {
        console.log(dish);
    })
    .catch(err => {
        console.log(err);
    })