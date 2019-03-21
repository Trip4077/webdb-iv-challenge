const db = require('./data/dbHelpers');

const dish= {
    category: 'Chinese'
}

db.addDish(dish)
    .then(id => {
        console.log(id[0])
    })
    .catch(err => {
        console.log(err);
    })

db.getDishes()
    .then(dishes => {
        console.log(dishes)
    })
    .catch(err => {
        console.log(err);
    })