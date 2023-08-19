import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import NavBarBurger from "../components/NavBarBurger";
import Footer from "../components/Footer";
import LocationComp from "../components/LocationComp";

const Location = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "main" "footer"`,
      }}
    >
      <GridItem area="nav">
        <Hide below="sm">
          <NavBar backgroundColor="black" colorText="white" />
        </Hide>
        <Show below="sm">
          <NavBarBurger />
        </Show>
      </GridItem>
      <GridItem area="main" py={{ base: "100px", md: "150px" }}>
        <LocationComp />
      </GridItem>
      <GridItem area="footer" bg="black">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Location;
