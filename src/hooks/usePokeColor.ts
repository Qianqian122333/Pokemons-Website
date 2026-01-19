import useData from "./useData";
export interface Color {
  name: string;
  url: string;
}

const useColors = () => {
  return useData<Color>("/pokemon-color");
};
export default useColors;
