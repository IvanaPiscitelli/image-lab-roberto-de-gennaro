import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "main" "footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="yellow.300">
        Main
      </GridItem>
      <GridItem area="footer" bg="green.300">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
