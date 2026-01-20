import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemons, { Pokemon } from "../hooks/usePokemons";
import PokeCard from "./PokeCard";
import PokeCardSkeleton from "./PokeCardSkeleton";
import PokeCardContainer from "./PokeCardContainer";
interface PokeGridProps {
  selectedColor?: String | null;
  selectedType?: String | null;
  searchText?: string | null;
  onSelectPokemon: (pokemon: Pokemon) => void;
}

const PokeGrid = ({
  selectedColor,
  selectedType,
  searchText,
  onSelectPokemon,
}: PokeGridProps) => {
  const {
    data: pokemons,
    error,
    isLoading,
  } = usePokemons(selectedColor, selectedType, searchText);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 4 }}
        spacing={5}
        padding={"10px"}
      >
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokeCardContainer key={pokemon.name}>
              <PokeCard
                pokemon={pokemon}
                onClick={() => onSelectPokemon(pokemon)}
              />
            </PokeCardContainer>
          ))}
        {isLoading &&
          skeleton.map((s) => (
            <PokeCardContainer key={s}>
              <PokeCardSkeleton key={s} />
            </PokeCardContainer>
          ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
};

export default PokeGrid;
