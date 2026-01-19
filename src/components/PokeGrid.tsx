import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemons from "../hooks/usePokemons";
import PokeCard from "./PokeCard";
import PokeCardSkeleton from "./PokeCardSkeleton";

const PokeGrid = () => {
  const { pokemons, error, isLoading } = usePokemons();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 4 }}
        spacing={10}
        padding={"10px"}
      >
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
        {isLoading && skeleton.map((s) => <PokeCardSkeleton key={s} />)}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
};

export default PokeGrid;
