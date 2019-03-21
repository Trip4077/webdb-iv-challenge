const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
    //Get All Dishes
    getDishes: () => {
        return db('dish')
    },
    //Get All Recipes
    getRecipes: () => {
        return db('recipes')
    },
    //Get Dish By ID
    getDish: id => {
        return db.select( 'category', 'recipe_name')
                 .from('dish')
                 .innerJoin('recipes', 'dish.id', 'dish_id')
                 .where('dish.id', id);
    },
    //Add Dish
    addDish: dish => {
        return db.insert(dish)
                 .into('dish')
    },
    //Add Recipe
    addRecipe: recipe => {
        return db.insert(recipe)
                 .into('recipes')
    }
}