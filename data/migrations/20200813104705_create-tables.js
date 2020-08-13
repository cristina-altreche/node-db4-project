exports.up = function (knex) {
  //many to many relationship
  //1 recipe to many ingredients
  //1 ingredient to many recipes
  //3rd table to hold recipe_id and ingredient_id foreign keys
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name")
      .notNullable();
    })
    .createTable("shopping_list", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name");
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE");
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.string("step").notNullable();
      tbl.integer("step_number").notNullable();
      tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("shopping_list")
    .dropTableIfExists("recipes");
};

