import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarBurger from "./components/NavBarBurger";
import ParallaBg1 from "./components/ParallaxBg1";
import ParallaBg2 from "./components/ParallaxBg2";
import TextBox from "./components/TextBox";
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
      <GridItem area="main">
        <ParallaBg1 />
        <TextBox
          headingChildren="Roberto De Gennaro"
          textChildren="I'm pride ourselves in offering a high quality of service and that begins with appointment based bookings. Our online system allows you to pick a stylist and time that’s convenient for you, and if you can’t make it you can reschedule within 24 hours of your appointment."
        />
        <ParallaBg2 />
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
