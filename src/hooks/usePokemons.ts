import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Pokemon {
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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchPokemonsResponse>("/pokemon", { signal: controller.signal })
      .then((response) => {
        setPokemons(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { pokemons, error, isLoading };
};
export default usePokemons;
