import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "main main" "footer"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "180 px 1fr",
      }}
    >
      <GridItem area="nav" bg="blue.300">
        NavBar
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
