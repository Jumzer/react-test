function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const nextPokemon = () => {
    pokemonIndex < pokemonList.length - 1
      ? setPokemonIndex(pokemonIndex + 1)
      : setPokemonIndex(0);
  };
  const previousPokemon = () => {
    pokemonIndex > 0
      ? setPokemonIndex(pokemonIndex - 1)
      : setPokemonIndex(pokemonList.length - 1);
  };
  return (
    <div>
      <button onClick={nextPokemon}>Next Pokemon</button>
      <button onClick={previousPokemon}>Previous Pokemon</button>
    </div>
  );
}

export default Navbar;
