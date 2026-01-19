import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <h1>Pokémon</h1>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
