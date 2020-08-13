const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("shopping_list").where("recipe_id", id);
}

function getInstructions(id) {
  return db("instructions").where("recipe_id", id);
}
