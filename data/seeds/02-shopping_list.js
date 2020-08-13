exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("shopping_list")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("shopping_list").insert([
        { ingredient_name: "Pop Tart", quantity: 2, recipe_id: 2 },
        { ingredient_name: "Milk", quantity: 1, recipe_id: 1 },
        { ingredient_name: "Cereal", quantity: 1, recipe_id: 1 },
        { ingredient_name: "Ham", quantity: 2, recipe_id: 3 },
        { ingredient_name: "Cheese", quantity: 1, recipe_id: 3 },
        { ingredient_name: "Bread", quantity: 2, recipe_id: 3 },
      ]);
    });
};
