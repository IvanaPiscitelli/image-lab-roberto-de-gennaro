import { useEffect } from "react";
import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-roberto.png";
import SocialMediaList from "./SocialMediaList";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      as="footer"
      role="contentinfo"
      py="6"
      h={{ base: "50vh", md: "40vh" }}
      mt={{ base: "1.5em", md: "5em" }}
      color="white"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", sm: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="flex-start"
      >
        <Flex direction={{ base: "column", md: "row" }} align="flex-start" justify="space-evenly" w="full" wrap="wrap">
          <Image src={logo} alt="logo" />
          <Stack direction="column" mt={{ base: "5", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              FOLLOW US
            </Text>
            <SocialMediaList color="white" />
          </Stack>
          <Stack direction="column" mt={{ base: "5", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              PAGES
            </Text>
            <Link to="/about-me">About Me</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/location">Location</Link>
            <Link to="/my-works">My Works</Link>
            <Link to="/contact-me">Contact Me</Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
