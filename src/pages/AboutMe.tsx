import { Box, Grid, GridItem, HStack, Hide, Show } from "@chakra-ui/react";
import firstImg from "../assets/about-me-1.webp";
import secondImg from "../assets/dummy-user.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import NavBar from "../components/NavBar";
import NavBarBurger from "../components/NavBarBurger";
import Footer from "../components/Footer";

const AboutMe = () => {
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
      <GridItem area="main" bg="white" color="black">
        <div id="first-div-main" style={{ paddingTop: "200px", maxWidth: "1170px", marginLeft: "auto", marginRight: "auto" }}>
          <HStack style={{ display: "flex", padding: "10px 15px" }}>
            <Box style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginTop: "0", marginBottom: "10px", letterSpacing: "2px" }}>OUR STORY</h3>
              <p style={{ fontSize: "50px", fontWeight: 700, marginTop: "0", marginBottom: "0" }}>AWARD WINNING MALE IMAGE GROOMING</p>
            </Box>
            <Box style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
              <p style={{ fontSize: "15px", fontWeight: 400, marginTop: "0", marginBottom: "0", lineHeight: "1.5em", textAlign: "left" }}>IMAGE LAB presents the revolutionary transition between precision barbering and contemporary hairdressing. A fusion of technical and artistic skills with a commitment to bridge the gap between the traditional barbershop and the modern hair business.</p>
            </Box>
          </HStack>
        </div>
        <Box style={{ paddingTop: "20px", paddingBottom: "0", maxWidth: "1170px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ padding: "0 15px" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginBottom: "90px", paddingTop: "30px" }}>
              <div style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
                <img src={firstImg} style={{ position: "relative", overflow: "hidden", display: "inline-flex", justifyContent: "flex-start", maxWidth: "100%", verticalAlign: "middle", opacity: 1, transition: "opacity .3s" }} />
              </div>
              <div style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
                <p style={{ paddingLeft: "100px", fontSize: "20px", fontWeight: 400, marginTop: "0", marginBottom: "0", lineHeight: "1.5em" }}>"Our cutting philosophy stems from the consultation. There is no such thing as can’t do, won’t do or don’t do within our cutting philosophy. They say the customer is always right...and we say the stylist is right behind them and on hand to deliver their expert advice both professionally and technically"</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", alignContent: "center" }}>
              <div style={{ padding: "15px" }}>
                <h2 style={{ textAlign: "center", wordBreak: "break-word", fontSize: "32px" }}>
                  MEET THE FOUNDER
                </h2>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
                <h3 style={{ fontWeight: 700, letterSpacing: "2px", marginTop: 0, marginBottom: "10px", fontSize: "15px", textAlign: "start" }}>ROBERTO DE GENNARO</h3>
                <p style={{ fontWeight: 600, letterSpacing: "2px", marginTop: 0, marginBottom: "10px", fontSize: "18px" }}>Hair Designer – Crotone</p>
                <p style={{ fontSize: "15px" }}>With an infectious character and a remarkable work rate Josh Lamonaca has become a world renowned figure revolutionising a system for men’s hair education.<br /><br />
                  Josh has featured in over 25 countries sharing the MENSPIRE philosophy at some of the most prestigious events in the world, with audiences rising above 3000 people.<br /><br />
                  Known for empowering his audience from 1/2/1 education to global stage shows Josh Lamonaca has an unconditional passion for sharing knowledge mentoring others and gaining reward in seeing his staff and students grow.<br /><br />
                  Recognised throughout the industry for his fearless creativity josh has seen his social following rise extravagantly after his iconic style and haircuts have created a huge impact being replicated around the world.<br /><br />
                  The hard work hasn’t been unnoticed as Josh Lamonaca has seen his efforts identified after being awarded as educator of the year at both New York City, USA Barbercon 2017 and ROME, Italy festival barber 2018</p>
              </div>
              <div style={{ maxWidth: "50%", flexBasis: "50%", padding: "15px" }}>
                <img src={secondImg} style={{ position: "relative", overflow: "hidden", display: "inline-flex", justifyContent: "flex-start", maxWidth: "100%", verticalAlign: "middle", opacity: 1, transition: "opacity .3s", width: "100%" }} />
              </div>
            </div>
          </div>
        </Box>
        <Box style={{ maxWidth: "1170px", marginLeft: "auto", marginRight: "auto" }}>
          <a href="/" style={{ padding: "50px 15px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
            <p style={{ textAlign: "center", fontSize: "50px", fontWeight: 700, fontFamily: "Quicksand", marginRight: "30px" }}>Back To Homepage</p>
            <FaLongArrowAltRight size={48} />
          </a>
        </Box>
      </GridItem>
      <GridItem area="footer" bg="black">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default AboutMe;