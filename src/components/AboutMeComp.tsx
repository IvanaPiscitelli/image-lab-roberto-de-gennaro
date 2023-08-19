import { Box, Grid, GridItem, Hide, Image, Link, Show } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import NavBar from "./NavBar";
import NavBarBurger from "./NavBarBurger";
import Footer from "./Footer";

import firstImg from "../assets/about-me-1.webp";
import photoFounder from "../assets/photoFounder.jpeg";

import { useTranslation } from "react-i18next";

const AboutMeComp = () => {
  const { t } = useTranslation();
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
        <Box pt={{ base: "50px", md: "150px", lg: "200px" }} maxWidth={{ base: "100vw", lg: "1170px" }} mx="auto">
          <Box display="flex" flexDirection={{ base: "column", md: "row" }} p="10px" alignItems="center">
            <Box flex={1} p="15px" textAlign="center">
              <Box fontSize="15px" fontWeight={700} mt="0px" mb="10px" letterSpacing="2px">
                {t("ourStory")}
              </Box>
              <Box fontSize="50px" fontWeight={700} my="0" textAlign="center">
                {t("titleHome")}
              </Box>
            </Box>
            <Box flex={1} p="15px">
              <Box fontSize="15px" fontWeight={400} my="0" textAlign={{ base: "center", md: "left" }}>
                {t("subTitleAbout")}
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
                  {t("ourPhilosophy")}
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex" alignContent="center">
              <Box p="15px" mb={{ base: "30px", md: "0px" }}>
                <Box textAlign="center" wordBreak="break-word" fontSize="32px">
                  {t("founder")}
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
                  {t("founderName")}
                </Box>
                <Box
                  fontWeight={600}
                  letterSpacing="2px"
                  mt="0px"
                  mb="10px"
                  fontSize="18px"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {t("job")} – Crotone
                </Box>
                <Box textAlign={{ base: "center", md: "left" }} fontSize="15px">
                  {t("description1")}
                  <br />
                  <br />
                  {t("description2")}
                  <br />
                  <br />
                  {t("description3")}
                  <br />
                  <br />
                  {t("description4")}
                  <br />
                  <br />
                  {t("description5")}
                  <br />
                  <br />
                  {t("description6")}
                  <br />
                  <br />
                  {t("description7")}
                </Box>
              </Box>
              <Box flex={1} p="15px" display="flex" alignItems="center" justifyContent="center">
                <Image
                  src={photoFounder}
                  position="relative"
                  overflow="hidden"
                  display="inline-flex"
                  justifyContent="flex-start"
                  maxWidth={{ base: "85%", lg: "75%" }}
                  verticalAlign="middle"
                  opacity={1}
                  transition="opacity .3s"
                  w="100%"
                  my={{ base: "10%", md: "5%", lg: "10%" }}
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
              {t("backHome")}
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

export default AboutMeComp;
