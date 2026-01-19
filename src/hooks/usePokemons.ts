import useData from "./useData";
export interface Pokemon {
  name: string;
  url: string;
}
const usePokemons = () => {
  return useData<Pokemon>("/pokemon");
};
export default usePokemons;
