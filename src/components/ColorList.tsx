import useColors from "../hooks/usePokeColor";

const ColorList = () => {
  const { data: colors, error, isLoading } = useColors();
  return (
    <div>
      {colors.map((color) => (
        <li key={color.name}>{color.name}</li>
      ))}
    </div>
  );
};

export default ColorList;
