import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const pokemon = pokemonList[index];
  const nextPokemon = () => {
    setIndex(index + 1);
  };
  const previousPokemon = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      <button onClick={nextPokemon}>Next Pokemon</button>
      <button onClick={previousPokemon}>Previous Pokemon</button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
