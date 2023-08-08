import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import NavBarBurger from "../components/NavBarBurger";
import TextBox from "../components/TextBox";
import Main from "./Main";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

// import CookieBanner from "./components/CookieBanner";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "section" "works" "footer"`,
        lg: `"nav nav" "main" "section" "works "footer"`,
      }}
    >
      <GridItem area="nav">
        <Hide below="sm">
          <NavBar backgroundColor="transparent" colorText="black" />
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
      <GridItem area="works">
        <ImageSlider />
      </GridItem>
      <GridItem area="footer" bg="black">
        <Footer />
      </GridItem>
      {/* Use only when we use ads software or login flow */}
      {/* <CookieBanner /> */}
    </Grid>
  );
};

export default App;