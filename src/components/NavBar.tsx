import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SocialMediaList from "./SocialMediaList";
import IconMap from "./IconMap";
import NavBarList from "./NavBarList";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px" justifyContent="space-between">
        <IconMap />

        <Image boxSize="65px" src={logo} alt="logo" align="center" fill="container" marginLeft="40px" />

        <SocialMediaList />
      </HStack>

      <HStack justifyContent="center" spacing={10} padding="10px" whiteSpace="nowrap">
        <NavBarList />
      </HStack>
    </>
  );
};

export default NavBar;
