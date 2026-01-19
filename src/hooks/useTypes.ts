import useData from "./useData";

export interface Type {
  name: string;
  url: string;
}

const useTypes = () => {
  return useData<Type>("/type");
};

export default useTypes;
