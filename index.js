const db = require('./data/dbHelpers');

const recipe = {
    recipe_name: 'Teriyaki',
    dish_id: 4
}

db.addRecipe(recipe)
    .then(id => {
        console.log(id[0])
    })
    .catch(err => {
        console.log(err);
    })

db.getRecipes()
    .then(dishes => {
        console.log(dishes)
    })
    .catch(err => {
        console.log(err);
    })

db.getDish(4)
    .then(dishes => {
        console.log(dishes)
    })
    .catch(err => {
        console.log(err);
    })