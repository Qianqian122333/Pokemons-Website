import { Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Heading fontSize="2xl">Pokémon</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
