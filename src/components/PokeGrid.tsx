import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface Pokemon {
  name: string;
  url: string;
}
interface FetchPokemonsResponse {
  count: number;
  results: Pokemon[];
}
const PokeGrid = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchPokemonsResponse>("/pokemon")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
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
