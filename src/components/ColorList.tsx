import { list } from "@chakra-ui/react";
import useColors from "../hooks/usePokeColor";

const ColorList = () => {
  const { colors, error, isLoading } = useColors();
  return (
    <div>
      {colors.map((color) => (
        <li key={color.name}>{color.name}</li>
      ))}
    </div>
  );
};

export default ColorList;
