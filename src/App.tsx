import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokeGrid from "./components/PokeGrid";
import ColorList from "./components/ColorList";
import Footer from "./components/Footer";
import { useState } from "react";
import { Color } from "./hooks/usePokeColor";
function App() {
  const [selectedColor, setSelectedColor] = useState<String | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                  "main"
                  "footer"`,
        lg: `"nav nav"
                  "aside main"
                  "footer footer"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <ColorList onSelectColor={(color) => setSelectedColor(color)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PokeGrid selectedColor={selectedColor} />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
