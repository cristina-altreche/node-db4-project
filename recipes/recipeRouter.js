const express = require("express");
const Recipes = require("./recipeModel");
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

module.exports = router;
