import express from "express";

const poke = express.Router();

// PokeAPI URL
const apiBaseURL = "https://pokeapi.co/api/v2/pokemon/";

//declare validator functions
const validatePokemon = (req, res, next) => {
  // fetch the pokemon data from PokeAPI
  const pokeAPI = fetch(apiBaseURL + req.params.pokemon).then(async (data) => {
    // parse the response into text format
    // API responds with "Not Found" in text if pokemon does not exist
    const resText = await data.text();

    // if response is "Not Found" raise error and pass to error handler
    if (resText == "Not Found") {
      next(new Error(`Pokemon '${req.params.pokemon}' not found`));
    } else {
    // Convert response text to JSON and attach to req object 
      req.pokeApiResult = JSON.parse(resText);
      console.log(Object.keys(req));
      next();
    }
  });
};

const errorHandlePokemon = (err, req, res, next) => {
  res.status(400).json({ error: err.message });
};

poke.get("/:pokemon", validatePokemon, errorHandlePokemon, async (req, res) => {
  res.json({
    pokedexumber: req.pokeApiResult.id,
    name: req.pokeApiResult.name,
  });
});

export { poke };
