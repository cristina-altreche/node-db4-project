const express = require("express");
const Recipes = require("./recipeModel");
const { restart } = require("nodemon");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id/shopping_list", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then((shoppingList) => {
      res.status(200).json(shoppingList);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get(":id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
