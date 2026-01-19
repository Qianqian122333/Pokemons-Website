import useData from "./useData";
export interface Pokemon {
  name: string;
  url: string;
}

const usePokemons = (selectedColor?: String | null) => {
  const endpoint = selectedColor
    ? `/pokemon-color/${selectedColor}`
    : "/pokemon";
  const result = useData<Pokemon>(endpoint);

  // 如果是颜色查询，API 返回的是 { pokemon_species: [...] }
  // 需要转换成 { results: [...] }
  if (selectedColor && result.data) {
    const colorData = result.data as any;
    if (colorData.pokemon_species) {
      return {
        ...result,
        data: colorData.pokemon_species.map((item: any) => ({
          name: item.name,
          url: item.url.replace("pokemon-species", "pokemon"),
        })),
      };
    }
  }

  return result;
};
export default usePokemons;
