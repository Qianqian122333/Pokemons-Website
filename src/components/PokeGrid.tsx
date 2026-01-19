import { Text } from "@chakra-ui/react";
import usePokemons from "../hooks/usePokemons";

const PokeGrid = () => {
  const { pokemons, error } = usePokemons();
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      {error && <Text>{error}</Text>}
    </div>
  );
};

export default PokeGrid;
