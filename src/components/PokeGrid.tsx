import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemons from "../hooks/usePokemons";
import PokeCard from "./PokeCard";

const PokeGrid = () => {
  const { pokemons, error } = usePokemons();
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing={10}
        padding={"10px"}
      >
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
};

export default PokeGrid;
