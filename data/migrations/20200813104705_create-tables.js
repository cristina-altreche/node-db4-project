exports.up = function (knex) {
  //many to many relationship
  //1 recipe to many ingredients
  //1 ingredient to many recipes
  //3rd table to hold recipe_id and ingredient_id
};

exports.down = function (knex) {};
