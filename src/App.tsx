import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarBurger from "./components/NavBarBurger";
import TextBox from "./components/TextBox";
import Main from "./pages/Main";

// import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "section" "footer"`,
        lg: `"nav nav" "main" "section" "footer"`,
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
      <GridItem area="main">
        <Main />
      </GridItem>
      <GridItem area="section">
        <TextBox headingChildren="My Best Works" />
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
