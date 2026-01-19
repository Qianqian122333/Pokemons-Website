import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokeGrid from "./components/PokeGrid";
import ColorList from "./components/ColorList";
function App() {
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
      // gridTemplateRows={"50px 1fr 30px"}
      // gridTemplateColumns={"150px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area={"aside"}>
          <ColorList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PokeGrid />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
