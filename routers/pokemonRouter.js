import express from "express";

const poke = express.Router();

// PokeAPI URL
const apiBaseURL = "https://pokeapi.co/api/v2/pokemon/";

poke.get("/:pokemon", async (req, res) => {

    const pokemon = await fetch(apiBaseURL + req.params.pokemon)
    .then((data) => {
      return data.json();
    })
    // passing the "pokemon not found" response through json will cause an error.
    // catch will catch this and interperate it as pokemon not found
    .catch((err) => {
      return { error: `Pokemon '${req.params.pokemon}' not found` };
    });
  if (pokemon.name) {
    res.json({ pokedexumber: pokemon.id, name: pokemon.name });
  } else {
    res.status(400).json(pokemon);
  }
});

export default poke;
