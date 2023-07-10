import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarBurger from "./components/NavBarBurger";
// import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "main" "footer"`,
      }}
    >
      <GridItem area="nav">
        <Hide below="sm">
          <NavBar />
        </Hide>
        <Show below="sm">
          <NavBarBurger />
        </Show>
      </GridItem>
      <GridItem area="main" bg="#D1CEC9" height="2000px">
        Main
      </GridItem>
      <GridItem area="footer" bg="green.300">
        Footer
      </GridItem>
      {/* Use only when we use ads software or login flow */}
      {/* <CookieBanner /> */}
    </Grid>
  );
}

export default App;
