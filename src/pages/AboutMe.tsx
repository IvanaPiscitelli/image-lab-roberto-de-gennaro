import { Box, Grid, GridItem, Hide, Image, Link, Show } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import NavBar from "../components/NavBar";
import NavBarBurger from "../components/NavBarBurger";
import Footer from "../components/Footer";

import firstImg from "../assets/about-me-1.webp";
import secondImg from "../assets/dummy-user.webp";

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
        <Box pt={{ base: "50px", md: "150px", lg: "200px" }} maxWidth={{ base: "100vw", lg: "1170px" }} mt="auto">
          <Box display="flex" flexDirection={{ base: "column", md: "row" }} p="10px" alignItems="center">
            <Box flex={1} p="15px" textAlign="center">
              <Box fontSize="15px" fontWeight={700} mt="0px" mb="10px" letterSpacing="2px">
                OUR STORY
              </Box>
              <Box fontSize="50px" fontWeight={700} my="0" textAlign="center">
                AWARD WINNING MALE IMAGE GROOMING
              </Box>
            </Box>
            <Box flex={1} p="15px">
              <Box fontSize="15px" fontWeight={400} my="0" textAlign={{ base: "center", md: "left" }}>
                IMAGE LAB presents the revolutionary transition between precision barbering and contemporary
                hairdressing. A fusion of technical and artistic skills with a commitment to bridge the gap between the
                traditional barbershop and the modern hair business.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pt="20px" pb="0" maxWidth={{ base: "100vw", md: "1170px" }} mx="auto">
          <Box p="0 15px">
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              flexWrap="wrap"
              mb={{ base: "30px", md: "90px" }}
              pt="30px"
            >
              <Box flex={1} p="15px">
                <Image
                  src={firstImg}
                  position="relative"
                  overflow="hidden"
                  display="inline-flex"
                  justifyContent="flex-start"
                  maxWidth="100%"
                  verticalAlign="middle"
                  opacity={1}
                  transition="opacity .3s"
                />
              </Box>
              <Box flex={1} p="15px">
                <Box
                  pl={{ base: "0", md: "100px" }}
                  pt={{ base: "20px", md: "0px" }}
                  fontSize="20px"
                  fontWeight={400}
                  my="0"
                  lineHeight="1.5em"
                  textAlign={{ base: "center", md: "left" }}
                >
                  "Our cutting philosophy stems from the consultation. There is no such thing as can’t do, won’t do or
                  don’t do within our cutting philosophy. They say the customer is always right...and we say the stylist
                  is right behind them and on hand to deliver their expert advice both professionally and technically"
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex" alignContent="center">
              <Box p="15px" mb={{ base: "30px", md: "0px" }}>
                <Box textAlign="center" wordBreak="break-word" fontSize="32px">
                  MEET THE FOUNDER
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" flexWrap="wrap">
              <Box flex={1} p="15px">
                <Box
                  fontWeight={700}
                  letterSpacing="2px"
                  mt="0px"
                  mb="10px"
                  fontSize="15px"
                  textAlign={{ base: "center", md: "start" }}
                >
                  ROBERTO DE GENNARO
                </Box>
                <Box
                  fontWeight={600}
                  letterSpacing="2px"
                  mt="0px"
                  mb="10px"
                  fontSize="18px"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Hair Designer – Crotone
                </Box>
                <Box textAlign={{ base: "center", md: "left" }}>
                  With an infectious character and a remarkable work rate Josh Lamonaca has become a world renowned
                  figure revolutionising a system for men’s hair education.
                  <br />
                  <br />
                  Josh has featured in over 25 countries sharing the MENSPIRE philosophy at some of the most prestigious
                  events in the world, with audiences rising above 3000 people.
                  <br />
                  <br />
                  Known for empowering his audience from 1/2/1 education to global stage shows Josh Lamonaca has an
                  unconditional passion for sharing knowledge mentoring others and gaining reward in seeing his staff
                  and students grow.
                  <br />
                  <br />
                  Recognised throughout the industry for his fearless creativity josh has seen his social following rise
                  extravagantly after his iconic style and haircuts have created a huge impact being replicated around
                  the world.
                  <br />
                  <br />
                  The hard work hasn’t been unnoticed as Josh Lamonaca has seen his efforts identified after being
                  awarded as educator of the year at both New York City, USA Barbercon 2017 and ROME, Italy festival
                  barber 2018
                </Box>
              </Box>
              <Box flex={1} p="15px">
                <Image
                  src={secondImg}
                  position="relative"
                  overflow="hidden"
                  display="inline-flex"
                  justifyContent="flex-start"
                  maxWidth="100%"
                  verticalAlign="middle"
                  opacity={1}
                  transition="opacity .3s"
                  w="100%"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mx="auto" maxWidth={{ base: "100vw", md: "1170px" }}>
          <Link href="/" p="50px 15px" display="flex" justifyContent="center" alignItems="center" alignContent="center">
            <Box
              textAlign="center"
              fontSize="50px"
              fontWeight={700}
              fontFamily="Quicksand"
              mr={{ base: "0px", md: "30px" }}
            >
              Back To Homepage
            </Box>
            <FaLongArrowAltRight size={48} />
          </Link>
        </Box>
      </GridItem>
      <GridItem area="footer" bg="black">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default AboutMe;
