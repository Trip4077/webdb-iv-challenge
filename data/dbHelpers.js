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
}