import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Pokemon {
  name: string;
  url: string;
}

interface ColorData {
  pokemon_species: {
    name: string;
    url: string;
  }[];
}

interface TypeData {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

interface FetchResponse {
  results: Pokemon[];
}

const usePokemons = (
  selectedColor?: String | null,
  selectedType?: String | null,
  searchText?: string | null,
) => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError("");

    const fetchPokemons = async () => {
      try {
        if (searchText) {
          const res = await apiClient.get<any>(
            `/pokemon/${searchText.toLowerCase()}`,
            {
              signal: controller.signal,
            },
          );
          setData([
            {
              name: res.data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${res.data.id}/`,
            },
          ]);
        }
        // 情况1: 同时选择了颜色和类型 - 需要取交集
        else if (selectedColor && selectedType) {
          const [colorRes, typeRes] = await Promise.all([
            apiClient.get<ColorData>(`/pokemon-color/${selectedColor}`, {
              signal: controller.signal,
            }),
            apiClient.get<TypeData>(`/type/${selectedType}`, {
              signal: controller.signal,
            }),
          ]);

          const colorPokemons = colorRes.data.pokemon_species.map((item) => ({
            name: item.name,
            url: item.url.replace("pokemon-species", "pokemon"),
          }));

          const typePokemons = typeRes.data.pokemon.map((p) => p.pokemon);

          // 取交集：找出同时存在于两个列表中的宝可梦
          const colorNames = new Set(colorPokemons.map((p) => p.name));
          const intersection = typePokemons.filter((p) =>
            colorNames.has(p.name),
          );

          setData(intersection);
        }
        // 情况2: 只选择了类型
        else if (selectedType) {
          const res = await apiClient.get<TypeData>(`/type/${selectedType}`, {
            signal: controller.signal,
          });
          setData(res.data.pokemon.map((p) => p.pokemon));
        }
        // 情况3: 只选择了颜色
        else if (selectedColor) {
          const res = await apiClient.get<ColorData>(
            `/pokemon-color/${selectedColor}`,
            { signal: controller.signal },
          );
          setData(
            res.data.pokemon_species.map((item) => ({
              name: item.name,
              url: item.url.replace("pokemon-species", "pokemon"),
            })),
          );
        }
        // 情况4: 都没选择，获取默认列表
        else {
          const res = await apiClient.get<FetchResponse>("/pokemon", {
            signal: controller.signal,
          });
          setData(res.data.results);
        }

        setIsLoading(false);
      } catch (err: any) {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPokemons();

    return () => controller.abort();
  }, [selectedColor, selectedType, searchText]);

  return { data, error, isLoading };
};

export default usePokemons;
