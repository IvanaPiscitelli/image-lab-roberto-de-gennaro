import { Box, HStack, Image, Slide } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SocialMediaList from "./SocialMediaList";
import IconMap from "./IconMap";
import NavBarList from "./NavBarList";
import useScrollPosition from "../hooks/useScrollPosition";
import { Menu } from "@chakra-ui/react";
const NavBar = () => {
  const scrollPosition = useScrollPosition();
  const showNavBar = scrollPosition > 0 ? true : false;
  console.log(scrollPosition);

  return (
    <Box
      width="100%"
      position={showNavBar ? "fixed" : "relative"}
      boxShadow={showNavBar ? "lg" : "none"}
      backgroundColor={showNavBar ? "black" : "#D1CEC9"}
      color={showNavBar ? "white" : "black"}
      transition={"background 0.2s ease-in-out, border-color 0.2s ease-in-out"}
    >
      <HStack paddingX="30px" paddingY="12px" justifyContent="space-between">
        <IconMap />

        <Image src={logo} alt="logo" align="center" fill="container" marginLeft="40px" width="150px" height="38px" />

        <SocialMediaList />
      </HStack>

      <HStack justifyContent="center" spacing={10} padding="10px" whiteSpace="nowrap">
        <NavBarList />
      </HStack>
    </Box>
  );
};

export default NavBar;
