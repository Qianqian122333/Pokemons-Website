import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Pokemon {
  name: string;
  url: string;
}
interface FetchPokemonsResponse {
  count: number;
  results: Pokemon[];
}
const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchPokemonsResponse>("/pokemon", { signal: controller.signal })
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { pokemons, error };
};
export default usePokemons;
