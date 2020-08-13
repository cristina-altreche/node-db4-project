exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step: "Remove wrapping and put pop tarts in toaster at medium heat.",
          step_number: 1,
          recipe_id: 2,
        },
        {
          step: "Remove pop tarts from toaster and enjoy.",
          step_number: 2,
          recipe_id: 2,
        },
        { step: "Pour cereal in bowl.", step_number: 1, recipe_id: 1 },
        { step: "Pour milk in bowl and enjoy.", step_number: 2, recipe_id: 1 },
        {
          step: "Grab bread and place ham on top.",
          step_number: 1,
          recipe_id: 3,
        },
        {
          step: "Grab cheese and place on top of ham. Close sandwhich Enjoy!.",
          step_number: 2,
          recipe_id: 3,
        },
      ]);
    });
};
