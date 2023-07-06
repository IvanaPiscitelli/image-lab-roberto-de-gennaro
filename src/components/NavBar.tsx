import { Box, HStack, Image, Slide } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SocialMediaList from "./SocialMediaList";
import IconMap from "./IconMap";
import NavBarList from "./NavBarList";
import useScrollPosition from "../hooks/useScrollPosition";

const NavBar = () => {
  const scrollPosition = useScrollPosition();
  const showNavBar = scrollPosition > 0 ? true : false;

  return (
    <>
      {/* {showNavBar && (
        <Slide direction="top" style={{ zIndex: 10 }} in={showNavBar}> */}
      <Box
        width="100%"
        position={showNavBar ? "fixed" : "relative"}
        boxShadow={showNavBar ? "lg" : "none"}
        backgroundColor={showNavBar ? "#000000" : "#D1CEC9"}
        color={showNavBar ? "white" : "#000000"}
        transition={"background-color 0.3s"}
      >
        <HStack padding="10px" justifyContent="space-between">
          <IconMap />

          <Image boxSize="65px" src={logo} alt="logo" align="center" fill="container" marginLeft="40px" />

          <SocialMediaList />
        </HStack>

        <HStack justifyContent="center" spacing={10} padding="10px" whiteSpace="nowrap">
          <NavBarList />
        </HStack>
      </Box>
      {/* </Slide>
      )} */}
      {/* <Box
        width="100%"
        position={scrollPosition > 0 ? "fixed" : "relative"}
        boxShadow={scrollPosition > 0 ? "lg" : "none"}
        backgroundColor={scrollPosition > 0 ? "black" : "#D1CEC9"}
      >
        <HStack padding="10px" justifyContent="space-between">
          <IconMap />

          <Image boxSize="65px" src={logo} alt="logo" align="center" fill="container" marginLeft="40px" />

          <SocialMediaList />
        </HStack>

        <HStack justifyContent="center" spacing={10} padding="10px" whiteSpace="nowrap">
          <NavBarList />
        </HStack>
      </Box> */}
    </>
  );
};

export default NavBar;
