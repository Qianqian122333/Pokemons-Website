import "./App.css";
import { Box, Grid, GridItem, Show, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokeGrid from "./components/PokeGrid";
import ColorList from "./components/ColorList";
import Footer from "./components/Footer";
import { useState } from "react";
import TypeSelector from "./components/TypeSelector";
import { Pokemon } from "./hooks/usePokemons";
import PokeDetailModal from "./components/PokeDetailModal";
function App() {
  const [selectedColor, setSelectedColor] = useState<String | null>(null);
  const [selectedType, setSelectedType] = useState<String | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateRows="auto 1fr auto"
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      minH="100vh"
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <ColorList
            onSelectColor={(color) => setSelectedColor(color)}
            selectedColor={selectedColor}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box padding={"10px"}>
          <TypeSelector
            onSelectType={(type) => setSelectedType(type)}
            selectedType={selectedType}
          />
        </Box>
        <PokeGrid
          selectedColor={selectedColor}
          selectedType={selectedType}
          searchText={searchText}
          onSelectPokemon={(pokemon) => {
            setSelectedPokemon(pokemon);
            onOpen();
          }}
        />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
      <PokeDetailModal
        isOpen={isOpen}
        onClose={onClose}
        pokemon={selectedPokemon}
      />
    </Grid>
  );
}

export default App;
